import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    if (!isAuthenticated) {
      // If not authenticated, check for token in local storage
      const token = localStorage.getItem('authToken');

      if (!token) {
        // If no token, show the dialog and then navigate after closing
        setOpen(true);
      } else {
        // If there's a token, navigate to the home page (or another appropriate page)
        navigate('/');
      }
    }
  }, [isAuthenticated, navigate]);

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Redirect to login page after closing the dialog
  };

  if (!isAuthenticated) {
    // Don't render children if not authenticated
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Please log in to access this page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  // If the user is authenticated, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;
