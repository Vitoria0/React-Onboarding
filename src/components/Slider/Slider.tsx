import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperCore } from "swiper";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { Slider1 } from "../../assets/svg/Slider/Slider1";
import { Slider2 } from "../../assets/svg/Slider/Slider2";
import { Slider3 } from "../../assets/svg/Slider/Slider3";
import { Slider4 } from "../../assets/svg/Slider/Slider4";
import { Slider5 } from "../../assets/svg/Slider/Slider5";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setData } from "../../features/user/userDataSlice";
import { useRef } from "react";

export const Slider = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleVideoEnded = () => {
    const blockVideo = [...userData.blockVideo];
    blockVideo[1] = true;
    dispatch(setData({ ...userData, blockVideo }));
    const layout = document.getElementById("Layout");
    if (layout) {
      const widthToScroll = window.innerWidth * 5.001;
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

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.isEnd) {
      handleVideoEnded();
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "80%" },
      }}
    >
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              p: { xs: "15%", md: "7%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "70%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Slider1 />
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              color={"#191D20"}
              textAlign={{ xs: "center", md: "left" }}
            >
              <strong>Realidade Aumentada</strong>
              <br></br>
              <br></br>
              Já pensou em utilizar a realidade aumentada para criar jogos
              corporativos que combinam elementos virtuais, interativos e
              tridimensionais ao ambiente real? Estes jogos são feitos com um
              roteiro específico e uma árvore de decisões com situações do dia a
              dia de trabalho.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: 5,
              p: { xs: "15%", md: "7%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "80%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Slider2 />
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              color={"#191D20"}
              textAlign={{ xs: "center", md: "left" }}
            >
              <strong>Jogos Corporativos</strong>
              <br></br>
              <br></br>
              Os Jogos Corporativos são exatamente o que o nome diz. Nessa
              categoria é possível Gamificar uma tarefa diária, entregar um
              treinamento obrigatório no formato de simulação ou realidade
              virtual, desenvolver quiz, etc.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              p: { xs: "15%", md: "7%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "50%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Slider3 />
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              color={"#191D20"}
              textAlign={{ xs: "center", md: "left" }}
            >
              <strong>Adventure Quiz</strong>
              <br></br>
              <br></br>
              Trivia interativa, com produção exclusiva, feita a partir de
              perguntas específicas para avaliar o conhecimento do participante
              em um ambiente de livre navegação, com feedback de certo e errado.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: 5,
              p: { xs: "15%", md: "7%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "70%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Slider4 />
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              color={"#191D20"}
              textAlign={{ xs: "center", md: "left" }}
            >
              <strong>Simuladores</strong>
              <br></br>
              <br></br>
              Já pensou em ter um Simulador interativo e exclusivo, com roteiro
              específico e árvore de decisões com situações do dia a dia de
              trabalho? Aqui podemos oferecer uma solução persolanizada para
              você.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              p: { xs: "15%", md: "7%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { md: "50%" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Slider5 />
            </Box>
            <Typography
              variant="h6"
              fontWeight={500}
              color={"#191D20"}
              textAlign={{ xs: "center", md: "left" }}
            >
              <strong>PDF Interativo</strong>
              <br></br>
              <br></br>
              Torne a leitura mais interessante com experiência de aprendizagem
              nos PDF's informativos da sua empresa.
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
