import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  props: BoxProps;
};

const BoxWithMotion = React.forwardRef(({ children, props }: Props, ref) => (
  <Box ref={ref} {...props}>
    {children}
  </Box>
));

export const BoxMotion = motion(BoxWithMotion, { forwardMotionProps: true });
