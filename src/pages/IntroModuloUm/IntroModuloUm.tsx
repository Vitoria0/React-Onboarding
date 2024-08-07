import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { Group } from "../../assets/svg/Person/group";

const IntroModuloUm = () => {
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
        justifyContent: { xs: "top", md: "center" },
        flexDirection: { xs: "column", md: "row" },
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
        className={isInViewport ? "ZoomIn" : "PageOneHidden"}
        sx={{
          width: { xs: "100%", md: "1000%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={500}
          color={"#191D20"}
          textAlign={"left"}
          sx={{
            width: { xs: "100%", md: "30%" },
          }}
        >
          Acreditamos que o acesso à educação corporativa deve ser universal.
          Portanto, tornamos nossos programas acessíveis e inclusivos,
          garantindo que todas as equipes, independentemente de sua localização
          ou contexto, tenham acesso às ferramentas e recursos necessários para
          alcançar o sucesso.
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          color={"#191D20"}
          textAlign={"right"}
          sx={{
            width: { xs: "100%", md: "30%" },
          }}
        >
          O que nos diferencia é nossa abordagem exclusiva. Cada programa é
          projetado especificamente para atender às necessidades específicas de
          nossos clientes, oferecendo soluções específicas que impulsionam o
          crescimento e a inovação dentro de suas organizações.
        </Typography>
      </Box>
      <Box
        ref={boxRef}
        className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
        sx={{
          width: { xs: "50%", md: "40%" },
          position: { xs: "relative", md: "absolute" },
          bottom: { xs: 0, md: "5%" },
        }}
      >
        <Group />
      </Box>
    </Box>
  );
};
export default IntroModuloUm;
