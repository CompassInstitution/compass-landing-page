import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export default function HorizontalScroll(children) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {children}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);
  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function Arrow({ children, disabled, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
