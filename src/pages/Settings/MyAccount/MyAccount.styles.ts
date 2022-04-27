import { createStyles, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles(() =>
  createStyles({
    contentContainer: {
      padding: '0 86px',
      marginTop: '16px',
    },
    contactInput: {
      '& .react-tel-input': {
        '& .form-control': {
          width: '96px!important',
        },
      },
    },
    passwordInvalid: {
      '& .MuiFormLabel-root': {
        color: '#f44336',
      },
      '& .MuiInputBase-root': {
        border: '1px solid #f44336',
      },
      '& .MuiFormHelperText-root': {
        color: '#f44336',
      },
    },
    passwordValid: {
      '& .MuiFormLabel-root': {
        color: '#31ab37',
      },
      '& .MuiInputBase-root': {
        border: '1px solid #31ab37',
      },
      '& .MuiFormHelperText-root': {
        color: '#31ab37',
      },
    },
  }),
);
