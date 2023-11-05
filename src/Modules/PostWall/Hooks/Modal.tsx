import * as React from "react";

export const useModal = () => {
  const [openModal, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return { openModal, handleOpenModal, handleCloseModal };
};
