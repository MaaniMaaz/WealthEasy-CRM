import React from 'react';
import { Box, Button } from '@mui/material';

interface ClientBtnsProps {
  activeButton: 'overview' | 'personalInfo' | 'assets' | 'activity';
  onButtonClick: (button: 'overview' | 'personalInfo' | 'assets' | 'activity') => void;
}

const ClientBtns: React.FC<ClientBtnsProps> = ({ activeButton, onButtonClick }) => {
  const buttons = [
    { label: 'Overview', value: 'overview' },
    { label: 'Personal Info', value: 'personalInfo' },
    { label: 'Assets', value: 'assets' },
    { label: 'Activity', value: 'activity' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3, // Increased spacing between buttons
        marginBottom: 3,
      }}
    >
      {buttons.map((button) => (
        <Button
          key={button.value}
          onClick={() => onButtonClick(button.value as 'overview' | 'personalInfo' | 'assets' | 'activity')}
          variant={activeButton === button.value ? "contained" : "outlined"}
          sx={{
            backgroundColor: activeButton === button.value ? '#005BAE' : 'white',
            color: activeButton === button.value ? 'white' : '#005BAE',
            border: `1px solid #005BAE`,
            '&:hover': {
              backgroundColor: activeButton === button.value ? '#004494' : 'transparent',
              borderColor: '#005BAE'
            },
            width: '150px', // Ensure equal width for all buttons
          }}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );
};

export default ClientBtns;
