import React from "react";
import Header from "./Header";
import MenuContainer from "./MenuContainer";

export default function HeaderWithMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <MenuContainer open={open} />
    </>
  );
}
