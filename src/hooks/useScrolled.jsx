import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the page has been scrolled beyond a specific threshold.
 *
 * @param {number} threshold - The pixel value at which the page is considered scrolled.
 *                             Defaults to 100.
 * @returns {boolean} Returns `true` if the vertical scroll position (`window.scrollY`)
 *                    exceeds the threshold, otherwise returns `false`.
 *
 * @example
 * const isScrolled = useScrolled(150);
 *
 * return (
 *   <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
 *     Navbar Content
 *   </nav>
 * );
 */
function useScrolled(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

export default useScrolled;
