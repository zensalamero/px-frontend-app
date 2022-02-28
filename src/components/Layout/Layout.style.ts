import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(4, 0),

      backgroundColor: theme.palette.secondary.main,
      minHeight: '100vh',
    },
  }),
);
