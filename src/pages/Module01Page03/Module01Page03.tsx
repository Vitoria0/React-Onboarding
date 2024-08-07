import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { Computer } from "../../assets/svg/Person/computer";

const Module01Page03 = () => {
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
        flexDirection: "column",
        alignItems: { xs: "center", md: "start" },
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
          Explore o Futuro da Educação Corporativa Conosco
        </Typography>
      </Box>
      <Box
        className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
        sx={{
          display: "flex",
          mx: "5%",
          flexDirection: { xs: "column", md: "row" },
          gap: 1.5,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", md: "30%", xl: "30%" },
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Computer />
        </Box>
        <Typography
          variant="h6"
          width={"80%"}
          fontWeight={600}
          sx={{
            width: { xs: "100%", md: "45%", xl: "40%" },
            pb: { xs: "0%", md: "10%" },
          }}
        >
          Nossa paixão pela educação corporativa é evidente em tudo o que
          fazemos. Se você está buscando uma parceria que vá além do
          convencional, você não está no lugar certo. Junte-se a nós nesta
          jornada rumo ao sucesso. Seja parte de uma comunidade global de
          aprendizado, onde a capacitação e o desenvolvimento pessoal e
          profissional são prioridades absolutas.
        </Typography>
      </Box>
    </Box>
  );
};
export default Module01Page03;
