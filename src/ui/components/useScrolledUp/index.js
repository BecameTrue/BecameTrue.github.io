import { useState, useEffect } from "react";

/**
 * Hook for scroll events.
 * @function useScrollChecker - returns true if scolled to up.
 */
const useScrolledUp = () => {
  // States to check scrolled to up or not.
  const [scrolledToUp, setScrolledToUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  // "Whenever" scroll event fires.
  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (window.scrollY > 0) {
        // Compare previous scroll position with current scroll position.
        // If previous scroll position is higher than current one, it means scrolled to up.
        if (prevScrollPos > currentScrollPos) setScrolledToUp(true);
        else setScrolledToUp(false);
      } else {
        //  And if scroll position is equal or less than 0,
        // it means that user is at the top of page. So consider it as "scrolled to up".
        // (Iphone's bouncy effect makes scrolly to minus value.)
        setScrolledToUp(true);
      }
      // After handling, update previous scroll position to current position.
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return {
    scrolledToUp: scrolledToUp
  };
};

export default useScrolledUp;
