import { Affix, Box, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ReactElement } from "react";

type ScrollToTopProps = { children?: ReactElement; target: string };

const ScrollToTop = ({ children, target }: ScrollToTopProps) => {
  const [scroll] = useWindowScroll();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(target);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Box
            role="presentation"
            style={transitionStyles}
            onClick={handleClick}
          >
            {children}
          </Box>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
