import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { Card } from "../../assets/svg/Files/card";
import { Card2 } from "../../assets/svg/Files/card2";
import { One } from "../../assets/svg/Person/one";
import { Two } from "../../assets/svg/Person/two";

const Introducao02 = () => {
  const boxRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [opacities, setOpacities] = useState([0, 0]);

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

  const handleClick = (index: number) => {
    setOpacities((prevOpacities) =>
      prevOpacities.map((opacity, i) =>
        i === index ? (opacity === 1 ? 0 : 1) : opacity
      )
    );
  };

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
        py: "5%",
        px: "5%",
        position: "relative",
      }}
    >
      <Box
        ref={boxRef}
        className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
        sx={{
          width: { xs: "100%", md: "43%", xl: "60%" },
          display: "flex",
          flexDirection: "column",
          gap: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 300ms ease-in-out",
            position: "relative",
            aspectRatio: "819/373",
            "&:hover": {
              transform: "scale(1.05)",
              cursor: "pointer",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              top: 0,
              position: "absolute",
              zIndex: 0,
            }}
          >
            <Card />
          </Box>
          <Box
            onClick={() => handleClick(0)}
            sx={{
              zIndex: 1,
              height: "100%",
              opacity: opacities[0],
              transition: "opacity 0.5s ease-in-out",
              cursor: "pointer",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xs: "1.5rem 6rem 1.5rem 2rem",
                md: "2.5rem 8rem 2.5rem 4rem",
                xl: "3rem 10rem 3rem 6rem",
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight={500}
              color={"#191D20"}
              textAlign={"center"}
              width={"100%"}
            >
              <strong>
                Como vocês garantem a relevância dos cursos em um mundo em
                constante mudança?
              </strong>
              <br></br>
              <br></br>
              Nosso processo de desenvolvimento de cursos é dinâmico e flexível.
              Mantemos contato próximo com líderes de mercado, especialistas do
              setor e clientes para garantir que nossos cursos estejam sempre
              alinhados com as últimas tendências e necessidades do mercado.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "30%", md: "35%", xl: "40%" },
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <One />
        </Box>
      </Box>
      <Box
        className={isInViewport ? "ZoomIn" : "PageOneHidden"}
        sx={{
          width: { xs: "100%", md: "43%", xl: "60%" },
          display: "flex",
          flexDirection: "column-reverse",
          gap: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 300ms ease-in-out",
            position: "relative",
            aspectRatio: "819/373",
            "&:hover": {
              transform: "scale(1.05)",
              cursor: "pointer",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              top: 0,
              position: "absolute",
              zIndex: 0,
            }}
          >
            <Card2 />
          </Box>
          <Box
            onClick={() => handleClick(1)}
            sx={{
              zIndex: 1,
              height: "100%",
              opacity: opacities[1],
              transition: "opacity 0.5s ease-in-out",
              cursor: "pointer",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: {
                xs: "1.5rem 2rem 1.5rem 4rem",
                md: "2.5rem 4rem 2.5rem 7rem",
                xl: "3rem 6rem 3rem 10rem",
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight={500}
              color={"#191D20"}
              textAlign={"center"}
              width={"100%"}
            >
              <strong>
                Como você garante que os programas sejam acessíveis a equipes em
                diferentes locais e contextos culturais?
              </strong>
              <br></br>
              <br></br>
              Nossos programas são específicos com diversidade e inclusão em
              mente. Utilizamos uma variedade de formatos e modalidades de
              entrega, incluindo treinamento presencial, online e
              semipresencial, para garantir que nossos cursos sejam acessíveis a
              todos, independentemente de sua localização ou contexto cultural.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "30%", md: "35%", xl: "40%" },
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Two />
        </Box>
      </Box>
    </Box>
  );
};
export default Introducao02;
