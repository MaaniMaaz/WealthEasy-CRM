import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ClientBtns } from '../components'; // Ensure the correct path
import OverviewContent from '../components/clients/OverviewContent';
import PersonalInfoContent from '../components/clients/PersonalInfoContent';
import AssetsContent from '../components/clients/AssetsContent';
import ActivityContent from '../components/clients/ActivityContent';

const SingleClientPage = () => {
  const { name } = useParams<{ name: string }>();
  const [activeButton, setActiveButton] = useState<'overview' | 'personalInfo' | 'assets' | 'activity'>('overview');

  const handleButtonClick = (button: 'overview' | 'personalInfo' | 'assets' | 'activity') => {
    setActiveButton(button);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'overview':
        return <OverviewContent />;
      case 'personalInfo':
        return <PersonalInfoContent />;
      case 'assets':
        return <AssetsContent />;
      case 'activity':
        return <ActivityContent />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ClientBtns activeButton={activeButton} onButtonClick={handleButtonClick} />
      <Box sx={{ width: '100%', mt: 4 }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default SingleClientPage;
