import React from "react";

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); /////////// guardar menu hook
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return { open, handleClick, handleClose, anchorEl };
};
