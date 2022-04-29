import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    [theme.breakpoints.down('xs')]: {
      dialogPaper: {
        position: 'absolute',
        width: `calc(100% - 110px)`,
      },
    },
    dialogPaperLarge: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: 512,
      height: `calc(100% - 110px)`,
    },
    dialog__header: {
      '& .MuiTypography-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    dialogContentContainer: {
      padding: '8px 24px 24px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
  }),
);
