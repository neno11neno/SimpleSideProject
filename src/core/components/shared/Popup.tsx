import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface PopupProps {
    open: boolean;
    onClose: () => void;
    data: string; // 假設資料是一個字串
  }

const Popup: React.FC<PopupProps> = ({ open, onClose, data }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Shared Popup</DialogTitle>
      <DialogContent>
        <p>{data}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
