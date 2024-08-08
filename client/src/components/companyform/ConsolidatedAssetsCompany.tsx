import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ConsolidatedAssetsCompany = () => {
  const [assets, setAssets] = useState([{ assetType: '', assetDetails: '' }]);

  const handleAddField = () => {
    setAssets([...assets, { assetType: '', assetDetails: '' }]);
  };

  const handleRemoveField = (index) => {
    setAssets(assets.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index, event) => {
    const { name, value } = event.target;
    setAssets(assets.map((asset, i) => (i === index ? { ...asset, [name]: value } : asset)));
  };

  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142d" mt={3}>
        Consolidated Assets
      </Typography>
      {assets.map((asset, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Type"
              name="assetType"
              variant="outlined"
              fullWidth
              margin="normal"
              value={asset.assetType}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Asset Details"
              name="assetDetails"
              variant="outlined"
              fullWidth
              margin="normal"
              value={asset.assetDetails}
              onChange={(e) => handleFieldChange(index, e)}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton onClick={() => handleRemoveField(index)} color="secondary">
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button onClick={handleAddField} startIcon={<AddCircleOutlineIcon />}>
        Add Asset
      </Button>
    </Box>
  );
};

export default ConsolidatedAssetsCompany;
