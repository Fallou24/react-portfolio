import React from "react";
import { useState } from "react";
import "./scrollTop.scss";

const ScrollTop = () => {
    const [scrollUp,setScrollUp] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY>560) {
        setScrollUp(true)
    }
    else{
        setScrollUp(false)
    }
  });

  return (
    <p className={scrollUp ? "scrollTop show-scroll" : "scrollTop"}>
      <button>
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </button>
    </p>
  );
};

export default ScrollTop;
