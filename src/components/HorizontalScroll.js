import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

export default function HorizontalScroll(children) {
  return (
    <div className=" scorllbar-hide">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {children}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);
  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <HiChevronLeft className=" "/>
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <HiChevronRight />
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
