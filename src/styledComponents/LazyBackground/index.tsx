import { Box, SxProps } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';

type Props = {
  src: string;
  placeholderSrc: string;
  children: React.ReactNode;
  sx?: SxProps;
};

const LazyBackground = ({ src, placeholderSrc, children, sx }: Props) => {
  const [loadedSrc, setLoadedSrc] = useState(placeholderSrc || '');
  const [blured, setBlured] = useState(false);
  const containerRef = useRef();

  const backgroundStyles = {
    backgroundImage: `url('${loadedSrc}')`,
    transition: 'background-image 0.3s',
    filter: blured ? 'blur(0px)' : 'blur(5px)',
    position: 'absolute', // Posição absoluta para cobrir todo o container
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    zIndex: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const image = new Image();
          image.src = src;
          image.onload = () => {
            setLoadedSrc(src);
            setBlured(true);
            observer.disconnect();
          };
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [src]);

  return (
    <Box ref={containerRef} sx={{ position: 'relative', ...sx }}>
      <Box sx={backgroundStyles}></Box>
      <Box sx={{ zIndex: 2, position: 'relative' }}>{children}</Box>
    </Box>
  );
};

export default LazyBackground;
