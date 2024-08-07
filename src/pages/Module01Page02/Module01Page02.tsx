import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { Video } from "../../assets/svg/Files/video";

const Module01Page02 = () => {
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
      sx={{
        background: "#FBF8F8",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        justifyContent: { xs: "top", md: "start" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "center" },
        minWidth: "100vw",
        gap: { xs: 5, md: 10, xl: 20 },
        pt: { xs: "30%", md: "8%" },
        pb: { xs: "0%", md: "5%" },
        px: "5%",
        position: "relative",
      }}
    >
      <Box
        ref={boxRef}
        className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
        sx={{
          width: { sx: "80%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h5" fontWeight={800} textTransform={"uppercase"}>
          Personalização para o Sucesso
        </Typography>
        <Typography variant="h6" width={"80%"}>
          Acreditamos que cada organização é única, e nossos programas refletem
          essa crença. Cada aprendizagem é cuidadosamente adaptada para atender
          às necessidades específicas de nossos clientes, oferecendo uma
          experiência de aprendizagem personalizada que impulsiona o crescimento
          e a inovação. <strong> Assista o vídeo para saber mais: </strong>
        </Typography>
      </Box>

      <Box
        className={isInViewport ? "PageOneFadeRight" : "PageOneHidden"}
        sx={{
          width: { sx: "80%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Video />
      </Box>
    </Box>
  );
};
export default Module01Page02;
