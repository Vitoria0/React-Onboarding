import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { End } from "../../assets/svg/Files/end";
import { Button } from "../../assets/svg/Files/button";
import { jsPDF } from "jspdf";
import certificado from "../Module01Page04/certificado.png";
import { getStudentName } from "../../scorm/scorm-functions";
const Module01Page04 = () => {
  const boxRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const studentName = getStudentName();

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

  const generatePDF = async () => {
    const widthMm = 1804 / 3.78;
    const heightMm = 1005 / 3.78;

    const doc = new jsPDF({
      orientation: "l",
      unit: "mm",
      format: [widthMm, heightMm],
    });

    const imageUrl = certificado;

    const backgroundImage = await fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      });

    if (backgroundImage) {
      doc.addImage(backgroundImage, "PNG", 0, 0, widthMm, heightMm);

      doc.setTextColor("#DA581E");
      doc.setFontSize(35);
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;

      doc.text(formattedDate, 114 / 3.78, 525 / 3.78);

      doc.save("certificado.pdf");
    } else {
      console.error("A imagem de fundo não pôde ser carregada.");
    }
  };

  return (
    <Box
      sx={{
        background: "#FBF8F8",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        justifyContent: { xs: "top", md: "center" },
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
        className={isInViewport ? "PageOneFadeDown" : "PageOneHidden"}
        sx={{
          display: "flex",
          width: { xs: "100%", md: "38%", xl: "40%" },
          height: "auto",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "start",
          position: "relative",
          gap: 3,
        }}
      >
        <Typography variant="h3" fontWeight={800}>
          Não esqueça de<br></br> compartilhar sua<br></br> conquista!
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          width={{ xs: "100%", md: "80%" }}
        >
          Baixe o seu certificado e compartilhe em suas redes sociais!
        </Typography>
        <Box
          onClick={generatePDF}
          sx={{
            width: {
              xs: "10rem",
              md: "15rem",
              xl: "20rem",
            },
            aspectRatio: "363/68",
            transition: "transform 0.2s ease-in-out",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Button />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: { xs: "70%", md: "38%", xl: "40%" },
          height: "auto",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "start",
          position: "relative",
          gap: 3,
        }}
      >
        <End />
      </Box>
    </Box>
  );
};
export default Module01Page04;
