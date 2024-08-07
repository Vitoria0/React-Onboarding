import React from 'react';
import { motion } from 'framer-motion';

import Text from '../Text';

type Props = {
  children: React.ReactNode;
  props: React.Attributes;
};

const TextWithMotion = React.forwardRef(({ children, ...props }: Props) => {
  return <Text {...props}>{children}</Text>;
});

export const TextMotion = motion(TextWithMotion, { forwardMotionProps: true });
