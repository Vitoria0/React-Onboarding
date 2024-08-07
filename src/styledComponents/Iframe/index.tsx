import { useState } from 'react';

import { Grid } from '@mui/material';
import ReactPlayer from 'react-player';


type Props = {
  link: string;
  muted: string | boolean;
  onEnd: () => void;
};

const Iframe = ({ link,muted,  onEnd }: Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenVideo = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <Grid
        alignItems={"center"}
        container
        item
        justifyContent={"center"}
        sx={{
          backgroundColor: "#E3E3E305",
          justifyContent: "center",
          borderRadius: "10px",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ReactPlayer
          onEnded={() => {
            onEnd();
            handleOpenVideo();
          }}
          url={link}
          width={"100%"}
          height={"100%"}
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            aspectRatio: 16 / 9,
            opacity: !muted ? 1 : 0
          }}
          
          controls
        />
      </Grid>
    </>
  );
};

export default Iframe;
