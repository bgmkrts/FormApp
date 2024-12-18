"use client";

import React from 'react';
import { TextField, Grid, Box } from '@mui/material';
import { observer } from 'mobx-react';
import formStore from '../../store/FormStore';

const AdresForm = observer(() => {
  return (
    <Box mb={3}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Cadde"
            variant="outlined"
            value={formStore.cadde}
            onChange={(e) => formStore.setCadde(e.target.value)}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Sokak"
            variant="outlined"
            value={formStore.sokak}
            onChange={(e) => formStore.setSokak(e.target.value)}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            fullWidth
            label="İl"
            variant="outlined"
            value={formStore.il}
            onChange={(e) => formStore.setIl(e.target.value)}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            fullWidth
            label="İlçe"
            variant="outlined"
            value={formStore.ilce}
            onChange={(e) => formStore.setIlce(e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default AdresForm;
