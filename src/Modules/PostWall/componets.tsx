import {
  Box,
  Button,
  Typography,
  Avatar,
  Stack,
  Link,
  TextField,
  Menu,
  MenuItem,
  Modal,
} from "@mui/material";

import * as React from "react";

import {
  FavoriteIcon,
  IconButton,
  ChatBubbleOutlineIcon,
  DetailsIcon,
  TurnedInNotIcon,
  SentimentSatisfiedAltIcon,
} from "./icons";

import { lessMore, modal } from "./styles";

// Hooks
import { useLikes } from "./Hooks/FocusComment";
import { useButtonState } from "./Hooks/ButtonState";
import { useMenu } from "./Hooks/Menu";
import { useEmojis } from "./Hooks/Emojis";
import { useRead } from "./Hooks/Read";
import { useModal } from "./Hooks/Modal";

export function ReadMoreLess(description: string) {
  const { toggleReadMoreLess, arrayMatch, isShowMore } = useRead();

  const array: string[] = arrayMatch(description);

  return (
    <div className="card">
      <Typography fontSize="14px">{array[0]}</Typography>
      {isShowMore && (
        <Typography fontSize="14px">
          {
            <Box sx={{ width: "330px" }}>
              {array.map((item, index) => {
                if (index != 0) {
                  return item + "\n";
                }
              })}
            </Box>
          }
        </Typography>
      )}
      <Button onClick={toggleReadMoreLess} disableRipple sx={{ ...lessMore }}>
        {isShowMore ? "Read Less" : "Read More"}
      </Button>
    </div>
  );
}

export function ViewImage() {
  return (
    <div>
      <img src={"https://picsum.photos/410/600"} alt="profileImage" />
    </div>
  );
}

export function User(name: string, image: string, location?: string) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ typography: "body1" }}>
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 35, height: 35 }} />
      <Stack>
        <Link
          href="#"
          underline="none"
          color="inherit"
          sx={{ fontWeight: "bold", fontSize: 13 }}>
          {name}
        </Link>
        <div style={{ fontSize: 11 }}>{location}</div>
      </Stack>
    </Stack>
  );
}

export function IconButtons() {
  const { clikButon, ref } = useLikes();
  const { isActive, toggleState } = useButtonState();
  return (
    <Box>
      <Stack direction="row" spacing={28}>
        <Stack direction="row" spacing={1}>
          <IconButton onClick={toggleState}>
            <FavoriteIcon sx={{ color: isActive ? "#f44336" : "#1c1c1c" }} />
          </IconButton>
          <IconButton onClick={clikButon}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          {ShareModal()}
        </Stack>
        {SavedModal()}
      </Stack>
      <Stack spacing={1} direction="row">
        <div />
        <Typography fontSize="14px" variant="body2" fontWeight="bold">
          {displayText(isActive)} Me gusta
          {Description(
            "Jose666",
            "wwwwwwwwwwwwwsssssssssssssssssssssssssswwwwwwwwwwwwwwwwwww"
          )}
          {AddComment(ref)}
        </Typography>
      </Stack>
    </Box>
  );
}

function SavedModal() {
  const { openModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Box>
      <IconButton onClick={handleOpenModal}>
        <TurnedInNotIcon />
      </IconButton>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

function ShareModal() {
  const { openModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Box>
      <IconButton onClick={handleOpenModal}>
        <DetailsIcon />
      </IconButton>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

function Description(user: string, description: string) {
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
      <div></div>
      <Typography fontSize="14px" variant="body2" fontWeight="bold">
        {user}
      </Typography>
      <Box>{ReadMoreLess(description)}</Box>
    </Stack>
  );
}

function AddComment(ref: React.RefObject<HTMLInputElement>) {
  const { open, handleClick, handleClose, anchorEl } = useMenu();
  const { inputValue, change, onClick, EmojiStyle, EmojiPicker } = useEmojis();
  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{ width: "100%", marginTop: 1, alignItems: "center", mb: 1 }}>
      <TextField
        id="outlined-basic"
        label="Añade un comentario..."
        variant="outlined"
        size="small"
        inputRef={ref}
        value={inputValue}
        onChange={change}
        sx={{ width: "90%" }}
      />
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <SentimentSatisfiedAltIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <EmojiPicker
            onEmojiClick={onClick}
            autoFocusSearch={false}
            emojiStyle={EmojiStyle.NATIVE}
          />
        </MenuItem>
      </Menu>
    </Stack>
  );
}

const displayText = (count: boolean) => {
  if (count) {
    return "1";
  }
  return "0";
};
