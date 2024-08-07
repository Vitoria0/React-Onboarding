import IconButton from "@mui/material/IconButton";
import { HomeIcon } from "../../assets/svg/home";
import { useSelector } from "react-redux";
import { selectLocation } from "../../features/location/locationSlice";

export const BackToHome = () => {
  const userLocation = useSelector(selectLocation);

  const block01 = userLocation > 9.9 && userLocation < 53;
  const block04 = userLocation > 53 && userLocation < 69;
  const block06 = userLocation > 69 && userLocation < 96;
  const block08 = userLocation > 96;

  const scrollRight = () => {
    const layout = document.getElementById("Layout");
    if (layout) {
      const widthToScroll =
        window.innerWidth *
        (block01 ? 3 : block04 ? 16 : block06 ? 21 : block08 ? 29 : 0); 
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

  return (
    <IconButton
      aria-label="back to home"
      style={{ background: "#000" }}
      sx={{
        position: "fixed",
        zIndex: 99,
        top: "3%",
        left: "2%",
        maxWidth: { xs: "10%", md: "4.5%" },
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
  );
};
