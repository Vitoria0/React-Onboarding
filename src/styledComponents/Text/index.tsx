import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme, Typography, TypographyProps, useTheme } from '@mui/material';

interface TextProps extends TypographyProps {
  color?: string;
  children: ReactNode;
  theme?: Theme;
  props?: React.Attributes;
}

const StyledTypography = styled(Typography)<TextProps>(({ color, theme }) => ({
  color: color || theme.palette.text.primary,
}));

const Text: React.FC<TextProps> = ({ color, children, ...props }) => {
  const theme = useTheme();
  const textColor = color || theme.palette.text.primary;

  return (
    <StyledTypography {...props} color={textColor}>
      {children}
    </StyledTypography>
  );
};

export default Text;
