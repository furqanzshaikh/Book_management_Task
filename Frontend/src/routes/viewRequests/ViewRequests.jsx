import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const ViewRequests = () => {
  const [requests, setRequests] = useState([]);
  const token = useSelector(state => state.auth.authToken); 
  const userObj = jwtDecode(token)



  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const id = userObj.id
        const response = await axios.get(`https://backend-alpha-dusky-96.vercel.app/api/update-request/${id}`, { 
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRequests(response.data.requests);
      } catch (error) {
        console.error('Error fetching exchange requests:', error);
      }
    };

    fetchRequests();
  }, [token]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Exchange Requests
      </Typography>
      {requests.map((request) => (
        <Card key={request.id} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">
              Book: {request.bookListing.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {request.status}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              // Add handler for accepting/rejecting requests
            >
              Accept
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              // Add handler for accepting/rejecting requests
            >
              Reject
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ViewRequests;
