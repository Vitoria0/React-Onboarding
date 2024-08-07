import { Button, Typography } from "@mui/material";

interface PrimaryProps {
  text: string;
  page: number;
}

export const Primary: React.FC<PrimaryProps> = ({ text, page }) => {
  const scrollRight = () => {
    const layout = document.getElementById("Layout");
    if (layout) {
      const widthToScroll = window.innerWidth * page ;
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
    <Button
      onClick={scrollRight}
      variant="contained"
      sx={{
        width: { xs: "100%", md: "70%" },
        minHeight: "4.5rem",
        borderRadius: "15px",
        px: 4,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography variant="h6">{text}</Typography>
    </Button>
  );
};
