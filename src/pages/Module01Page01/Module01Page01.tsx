import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { Slider } from "../../components/Slider/Slider";

const Module01Page01 = () => {
  const boxRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    });

    const currentBoxRef = boxRef.current;

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (currentBoxRef) {
        observer.unobserve(currentBoxRef);
      }
    };
  }, [boxRef]);

  return (
    <Box
      ref={boxRef}
      sx={{
        background: "#FBF8F8",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        justifyContent: { xs: "top", md: "center" },
        flexDirection: { xs: "column", md: "column" },
        alignItems: { xs: "center", md: "start" },
        minWidth: "100vw",
        gap: { xs: 3, md: 5, xl: 10 },
        pt: { xs: "30%", md: "8%" },
        pb: { xs: "0%", md: "5%" },
        px: "5%",
        position: "relative",
      }}
    >
      <Box
        className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          color={"#191D20"}
          textAlign={"center"}
        >
          Inovação que Impulsiona o Sucesso
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ width: { xs: "100%", md: "70%" } }}
        >
          Estamos comprometidos com a inovação contínua. Clique nos cards para
          ver todos os tipos de soluções que temos disponíveis, prontas para
          você!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider />
      </Box>
    </Box>
  );
};
export default Module01Page01;
