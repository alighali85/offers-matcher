import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(4),

  },
  inputField: {
    margin: theme.spacing(2),
    maxWidth: 496,
    minWidth: 296,
    alignSelf: 'center',

  },
  submitButton: {
    margin: theme.spacing(2),
    maxWidth: 496,
    minWidth: 296,
    alignSelf: 'center',
  },
}));


export default function ResultModal({ result = null, resetAction, offers }) {
  const successMessage = 'Great, you got into an agreement!';
  const failureMessage = 'Unfortunately, the expectations didn\'t meet, try again!';
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  ResultModal.testId = 'resut-modal-test';

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} data-testid={ResultModal.testId}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        onExit={resetAction}
      >
        <DialogTitle>{result ? 'Success!' : 'Failure!'}</DialogTitle>
        <DialogContent>
          <Alert severity={result ? 'success' : 'error'}>
            {result ? successMessage : failureMessage}
          </Alert>
          <DialogContentText>
            Employer offers:
            {' '}
            <strong>{offers?.employer}</strong>
            <br />
            Employee wants:
            {' '}
            <strong>{offers?.employee}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetAction} color="primary">Reset</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
