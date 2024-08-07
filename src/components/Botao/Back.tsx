import IconButton from "@mui/material/IconButton";

export const Back = () => {

  return (
    <IconButton
      aria-label="back to home"
      style={{ background: "#000" }}
      sx={{
        position: "fixed",
        zIndex: 99,
        top: "3%",
        left: "8%",
        maxWidth: { xs: "10%", md: "4.5%" },
        p: { xs: 1.5, md: 2.3 },
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.2)",
        },
      }}
    >
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1566 0.848797L25.0102 0.995243V0.996628L8.84882 17.158C8.38373 17.6231 8.38373 18.3783 8.84882 18.8434L25.1566 35.1512C25.6217 35.6163 26.3769 35.6163 26.842 35.1512C27.3071 34.6861 27.3071 33.9308 26.842 33.4657L11.3763 18L26.842 2.53423C27.3071 2.06913 27.3071 1.3139 26.842 0.848797C26.3769 0.383698 25.6217 0.383698 25.1566 0.848797Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </IconButton>
  );
};
