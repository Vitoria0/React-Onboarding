import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocation,
  setLocation,
} from "../features/location/locationSlice";
import { completeCourse } from "../scorm/scorm-functions";
import { selectUserData, setData } from "../features/user/userDataSlice";

import confetti from "canvas-confetti";
import { HomeIcon } from "../assets/svg/home";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const dispatch = useDispatch();
  const userLocation = useSelector(selectLocation);
  const [shouldScrollOnLoad, setShouldScrollOnLoad] = useState(true);
  const userData = useSelector(selectUserData);
  const blockVideo = [...userData.blockVideo];
  const [showBackTooltip, setShowBackTooltip] = useState(false);
  const [showHomeTooltip, setShowHomeTooltip] = useState(false);
  const customColors = ["#DA581E", "#FFFFFF", "#000000"];
  const [podeClicar, setPodeClicar] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const isScreenLarge = useMediaQuery("(max-width:1634px)");

  const arrowUpStyle: React.CSSProperties = {
    position: "absolute",
    top: "-9px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "0",
    height: "0",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid #636363",
  };

  const arrowUpStyleHome: React.CSSProperties = {
    position: "fixed",
    top: "-9px",
    left: "13%",
    transform: "translateX(-50%)",
    width: "0",
    height: "0",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid #636363",
  };

  const localStorageKey = "blockVideoStatus7.5";
  const initialBlockVideoStatus =
    localStorage.getItem(localStorageKey) === "true" || false;
  const [blockVideoStatus, setBlockVideoStatus] = useState<boolean>(
    initialBlockVideoStatus
  );

  const [showGoTooltip, setShowGoTooltip] = useState(!blockVideoStatus);

  useEffect(() => {
    if (!blockVideoStatus) {
      setHasLoaded(true);
      const goTimer = setTimeout(() => {
        setShowGoTooltip(false);
        setShowBackTooltip(true);
      }, 6000);
      const backTimer = setTimeout(() => {
        setShowBackTooltip(false);
        setShowHomeTooltip(true);
      }, 12000);

      const homeTimer = setTimeout(() => {
        setShowHomeTooltip(false);
        const updatedBlockVideo = [...userData.blockVideo];
        updatedBlockVideo[12] = true;
        dispatch(setData({ ...userData, blockVideo: updatedBlockVideo }));
        setBlockVideoStatus(true);
        localStorage.setItem(localStorageKey, "true");
      }, 18000);
      return () => {
        clearTimeout(goTimer);
        clearTimeout(backTimer);
        clearTimeout(homeTimer);
      };
    }
  }, [hasLoaded]);

  const handleBackClick = () => {
    try {
      if (!podeClicar) {
        return;
      }
      setPodeClicar(false);
      if (containerRef.current) {
        smoothScrollTo(
          containerRef.current,
          containerRef.current.scrollLeft - window.innerWidth,
          100,
          2
        );
      }
      setTimeout(() => {
        setPodeClicar(true);
      }, 1500);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  };

  const handleGoClick = () => {
    try {
      if (!podeClicar) {
        return;
      }
      setPodeClicar(false);
      if (containerRef.current) {
        smoothScrollTo(
          containerRef.current,
          containerRef.current.scrollLeft + window.innerWidth,
          100,
          2
        );
      }
      setTimeout(() => {
        setPodeClicar(true);
      }, 1500);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  };

  const scrollRight = () => {
    const layout = document.getElementById("Layout");
    if (layout) {
      const widthToScroll =
        window.innerWidth *
        ( 0);
      setTimeout(
        () =>
          layout.scrollTo({
            behavior: "smooth",
            left: widthToScroll,
          }),
        100
      );
    } else {
      console.error("Element with id 'Layout' not found");
    }
  };
  const handleButtonClick = () => {
    scrollRight();
  };

  const isBlocked = () => {
    if (containerRef.current) {
      const { scrollLeft } = containerRef.current;
      const { scrollWidth, clientWidth } = containerRef.current;
      const totalWidth = scrollWidth - clientWidth;
      const percentage = (scrollLeft / totalWidth) * 100;
      if (percentage >= 100) {
        return true;
      }
      return false;
    }
    return false;
  };

  useEffect(() => {
    try {
      const handleScroll = () => {
        if (containerRef.current) {
          const { scrollLeft } = containerRef.current;
          const totalWidth = window.innerWidth * 7;
          const percentage = (scrollLeft / totalWidth) * 100;
          dispatch(setLocation(percentage));
          setScrollPercentage(percentage);
        }
      };

      containerRef.current?.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        containerRef.current?.removeEventListener("scroll", handleScroll);
      };
    } catch (error) {
      console.error("Error setting scroll event listener:", error);
    }
  }, [scrollPercentage]);

  useEffect(() => {
    try {
      const percentageFromStorage = userLocation;
      if (
        percentageFromStorage !== undefined &&
        containerRef.current &&
        shouldScrollOnLoad
      ) {
        const totalWidth = window.innerWidth * 7;
        const percentage = (percentageFromStorage / 100) * totalWidth;
        containerRef.current.scrollLeft = percentage;
        setScrollPercentage(percentageFromStorage);
        setShouldScrollOnLoad(false);
      }
    } catch (error) {
      console.error("Error retrieving scroll percentage from storage:", error);
    }
  }, [scrollPercentage, userLocation, shouldScrollOnLoad]);

  let count = 1;

  const smoothScrollTo = (
    element: HTMLDivElement,
    to: number,
    duration: number,
    increment: number
  ) => {
    try {
      const start = element.scrollLeft;
      const change = to - start;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        if (element) {
          element.scrollLeft = val;
        }
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };

      animateScroll();
    } catch (error) {
      console.error("Error in smoothScrollTo:", error);
    }
  };

  const easeInOutQuad = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    try {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    } catch (error) {
      console.error("Error in easeInOutQuad:", error);
      return 0;
    }
  };

  const handleWheelScroll = (e: React.WheelEvent) => {
    const percentageFromStorage = userLocation;

    try {
      if (containerRef.current) {
        const delta = Math.max(-10, Math.min(10, e.deltaY));
        smoothScrollTo(
          containerRef.current,
          containerRef.current.scrollLeft + delta * 20,
          60,
          20
        );
      }
      if (percentageFromStorage === 100 && blockVideo[7] === true) {
        setTimeout(() => completeCourse(), 1000);
      }
      if (percentageFromStorage === 100 && count === 1) {
        confetti({
          particleCount: 150,
          spread: 100,
          colors: customColors,
        });
        count = 2;
      }
    } catch (error) {
      console.error("Error handling wheel scroll:", error);
    }
  };

  return (
    <Box
      sx={{
        overflowY: "hidden",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "start",
        overflowX: "hidden",
        position: "relative",
        zIndex: 3,
        scrollSnapType: "x mandatory",
      }}
      id="Layout"
      onWheel={handleWheelScroll}
      ref={containerRef}
      tabIndex={0}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "8px",
          zIndex: 999,
          background: "#E0E0E0",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: `${scrollPercentage}%`,
            backgroundColor: "#DA581E",
          }}
        />
      </Box>

      <IconButton
        aria-label="back to home"
        style={{ background: "#DA581E" }}
        sx={{
          position: "fixed",
          zIndex: 99,
          top: "3%",
          left: "2%",
          maxWidth: { xs: "10%", md: "4%" },
          p: { xs: 1.5, md: 2.3 },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        onClick={handleButtonClick}
      >
        <HomeIcon />
      </IconButton>
      {showHomeTooltip && (
        <Box
          sx={{
            color: "#fff",
            fontSize: "14px",
            maxWidth: "300px",
            background: "#636363",
            transform: "translateX(10%)",
            position: "fixed",
            borderRadius: "5px",
            zIndex: 999,
            top: { xs: "6rem", xl: "8rem" },
            left: isScreenLarge ? "-0.5rem" : "0.5rem",
            p: "1%",
          }}
        >
          <div style={arrowUpStyleHome}></div>
          <Typography variant="body1" align="center">
            Ao clicar neste botão, você voltará para a primeira tela do módulo.
          </Typography>
        </Box>
      )}
      <IconButton
        aria-label="handleBackClick"
        style={{ background: "#DA581E" }}
        sx={{
          position: "fixed",
          zIndex: 99,
          top: "3%",
          left: { xs: "13.5%", md: "7%" },
          maxWidth: { xs: "10%", md: "4%" },
          p: { xs: 1.5, md: 2.3 },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
          pointerEvents: scrollPercentage > 0 ? " " : "none",
          opacity: scrollPercentage > 0 ? 1 : 0.5,
        }}
        onClick={handleBackClick}
      >
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1566 0.848797L25.0102 0.995243V0.996628L8.84882 17.158C8.38373 17.6231 8.38373 18.3783 8.84882 18.8434L25.1566 35.1512C25.6217 35.6163 26.3769 35.6163 26.842 35.1512C27.3071 34.6861 27.3071 33.9308 26.842 33.4657L11.3763 18L26.842 2.53423C27.3071 2.06913 27.3071 1.3139 26.842 0.848797C26.3769 0.383698 25.6217 0.383698 25.1566 0.848797Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </IconButton>
      {showBackTooltip && (
        <Box
          sx={{
            color: "#fff",
            fontSize: "14px",
            maxWidth: "250px",
            background: "#636363",
            transform: "translateX(10%)",
            position: "fixed",
            borderRadius: "5px",
            zIndex: 999,
            top: { xs: "6rem", xl: "8rem" },
            left: isScreenLarge ? "0rem" : "1.5rem",
            p: "1%",
          }}
        >
          <div style={arrowUpStyle}></div>
          <Typography variant="body1" align="center">
            Caso prefira, clique neste botão para retornar ao conteúdo anterior.
          </Typography>
        </Box>
      )}
      <IconButton
        aria-label="handleGoClick"
        style={{ background: "#DA581E" }}
        sx={{
          position: "fixed",
          zIndex: 99,
          top: "3%",
          left: { xs: "25%", md: "12%" },
          maxWidth: { xs: "10%", md: "4%" },
          p: { xs: 1.5, md: 2.3 },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
          opacity: scrollPercentage < 98 && !isBlocked() ? 1 : 0.5,
          pointerEvents: scrollPercentage < 98 && !isBlocked() ? "all" : "none",
        }}
        onClick={handleGoClick}
      >
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8434 35.1512L10.9898 35.0048V35.0034L27.1512 18.842C27.6163 18.3769 27.6163 17.6217 27.1512 17.1566L10.8434 0.848824C10.3783 0.383725 9.62306 0.383725 9.15796 0.848824C8.69286 1.31392 8.69286 2.06916 9.15796 2.53426L24.6237 18L9.15796 33.4658C8.69286 33.9309 8.69286 34.6861 9.15796 35.1512C9.62306 35.6163 10.3783 35.6163 10.8434 35.1512Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </IconButton>
      {showGoTooltip && (
        <Box
          sx={{
            color: "#fff",
            fontSize: "14px",
            maxWidth: "300px",
            background: "#636363",
            transform: "translateX(10%)",
            position: "fixed",
            borderRadius: "5px",
            zIndex: 999,
            top: { xs: "6rem", xl: "8rem" },
            left: isScreenLarge ? "2rem" : "6rem",
            p: "1%",
          }}
        >
          <div style={arrowUpStyle}></div>
          <Typography variant="body1" align="center">
            Durante o curso, clique neste botão para avançar.
          </Typography>
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Layout;
