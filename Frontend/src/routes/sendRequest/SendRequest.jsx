import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const SendRequest = ({ bookId }) => {
  const [requesterId, setRequesterId] = useState('');
  const [error, setError] = useState('');

  const handleSendRequest = async () => {
    try {
      await axios.post(`https://backend-alpha-dusky-96.vercel.app/api/create-request/${id}`, {
        requesterId,
        bookListingId: bookId,
      });
      alert('Exchange request sent successfully');
    } catch (err) {
      setError('Error sending request');
      console.error(err);
    }
  };

  return (
    <div>
      <TextField
        label="Requester ID"
        value={requesterId}
        onChange={(e) => setRequesterId(e.target.value)}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendRequest}
      >
        Send Request
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SendRequest;
