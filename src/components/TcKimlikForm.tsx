"use client";

import React from 'react';
import { observer } from 'mobx-react'; // observer burada import edilmeli
import { TextField } from '@mui/material';
import formStore from '../../store/FormStore';

const TcKimlikForm: React.FC = observer(() => {
  return (
    <TextField
      fullWidth
      label="TC Kimlik Numarası"
      variant="outlined"
      value={formStore.tcKimlik}
      onChange={(e) => formStore.setTcKimlik(e.target.value)}
    />
  );
});

export default TcKimlikForm;
