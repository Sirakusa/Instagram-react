import EmojiPicker, { EmojiStyle, EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

export const useEmojis = () => {
  const [, setSelectedEmoji] = useState<string>("1f60a"); /// emoji

  const [inputValue, setInputValue] = useState<string>("");

  function onClick(emojiData: EmojiClickData) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    );
    setSelectedEmoji(emojiData.unified);
  }

  const change = (e) => setInputValue(e.target.value);
  return { inputValue, change, onClick, EmojiStyle, EmojiPicker };
};
