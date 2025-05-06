import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({
  text = "Click Me",
  href,
  onClick,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  sx = {},
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      sx={{
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "1rem",
        py: 1.5,
        ...sx, 
      }}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
