import { Box, Button, Typography } from "@mui/material";
import IconHome from "../../assets/svg/Files/home";
import { useEffect, useRef, useState } from "react";
import { selectUserData, setData } from "../../features/user/userDataSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
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

  const handleVideoEnded = () => {
    const blockVideo = [...userData.blockVideo];
    blockVideo[0] = true;
    dispatch(setData({ ...userData, blockVideo }));
    const layout = document.getElementById("Layout");
    if (layout) {
      const widthToScroll = window.innerWidth * 1.001;
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

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          zIndex: 999,
          display: "flex",
          minHeight: "100vh",
          background: "#FBF8F8",
          color: "black",
          justifyContent: { xs: "end", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "end", md: "center" },
          py: "5%",
          gap: 3,
          px: "8%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "41%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 2, xl: 3 },
            justifyContent: { xs: "end", md: "start" },
            alignItems: { xs: "end", md: "start" },
          }}
        >
          <Typography
            variant="h6"
            color={"#FC5700"}
            fontWeight={800}
            sx={{
              px: { xs: 2, md: 4, xl: 5 },
              py: { xs: 0.5, md: 1, xl: 1.3 },
              background: "#FAE4D9",
              borderRadius: "99px",
            }}
          >
            Lernify
          </Typography>
          <Typography variant="h2" color={"#191D20"} fontWeight={700}>
            Bem-vindo ao Futuro da Educação Corporativa!
          </Typography>
          <Button
            variant="contained"
            onClick={handleVideoEnded}
            sx={{
              background: "#191D20",
              px: { xs: 1, md: 2, xl: 3 },
              py: { xs: 1, md: 1.5, xl: 2 },
              borderRadius: { xs: 1, md: 2, xl: 3 },
            }}
          >
            <Typography variant="h6" color={"#f2f2f2"} fontWeight={800}>
              Começar trilha
            </Typography>
          </Button>
        </Box>
        <Box
          ref={boxRef}
          className={isInViewport ? "PageOneFadeLeft" : "PageOneHidden"}
          sx={{
            width: { xs: "100%", md: "45%" },
            display: "flex",
            flexDirection: "column",
            gap: 1,
            justifyContent: { xs: "end", md: "start" },
            alignItems: { xs: "end", md: "start" },
          }}
        >
          <IconHome />
          <Typography
            variant="h6"
            textTransform={"uppercase"}
            color={"#000"}
            fontWeight={600}
            align="right"
          >
            USE O SCROLL DO MOUSE OU as setas acima para avançar
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
