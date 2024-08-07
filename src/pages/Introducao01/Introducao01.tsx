import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import Space from "../../assets/svg/Files/space";
import Equipe from "../../assets/svg/Files/equipe";

const Introducao01 = () => {
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
        justifyContent: { xs: "center", md: "center" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minWidth: "100vw",
        gap: { xs: 5, md: 10, xl: 20 },
        pt: { xs: "6%", md: "5%" },
        pb: { xs: "0%", md: "5%" },
        px: "5%",
        position: "relative",
      }}
    >
      <Box
        ref={boxRef}
        className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
        sx={{
          width: { xs: "100%", md: "50%", xl: "45%" },
          display: "flex",
          flexDirection: "column",
          gap: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight={700} color={"#191D20"}>
            Bem-vindo à Lernify, onde estamos revolucionando a maneira como as
            organizações encaram a educação corporativa. Somos uma equipe de
            especialistas apaixonados por capacitar indivíduos e colaboradores o
            sucesso organizacional através da inovação educacional.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "30%", md: "40%", xl: "70%" },
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Space />
        </Box>
      </Box>
      <Box
        className={isInViewport ? "ZoomIn" : "PageOneHidden"}
        sx={{
          width: { xs: "100%", md: "50%", xl: "45%" },
          display: "flex",
          flexDirection: "column",
          gap: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "30%", md: "35%", xl: "60%" },
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Equipe />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            color={"#191D20"}
            textAlign={"right"}
          >
            Aqui nós acreditamos que a educação corporativa não é apenas um
            investimento, mas sim uma estratégia vital para contribuição o
            sucesso sustentável no mercado atual em constante evolução.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Introducao01;
