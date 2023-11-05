import { useState } from "react";

export const useRead = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const lengthDescription = (des: string) => {
    const len: number = des.length;
    return len;
  };

  const regex = new RegExp(`.{1,${38}}`, "g");
  const arrayMatch = (des: string) => {
    return des.match(regex) || [];
  };
  return { toggleReadMoreLess, lengthDescription, arrayMatch, isShowMore };
};
