import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) =>
  createStyles({
    contentContainer: {
      padding: '0 144px',
      marginTop: '16px',
    },
    profileItemsContainer: {
      [theme.breakpoints.up('md')]: {
        '& .MuiGrid-grid-lg-2': {
          maxWidth: '20%',
          flexBasis: '20%',
        },
      },
    },
    autocompleteContainer: {
      marginTop: '10px',
      '& > * + *': {
        marginTop: 2,
      },
      '& .MuiAutocomplete-tag': {
        height: '23px',
      },
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
        padding: '5px',
      },
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
        padding: 0,
      },
    },
    autoCompleteGrid: {
      textAlign: 'right',
      position: 'relative',
      '& .MuiTypography-root': {
        cursor: 'pointer',
        position: 'absolute',
        zIndex: '2',
        color: '#212121',
        top: '-25px',
        right: '0',
      },
    },
    chipContainer: {
      margin: '10px 0 0',
      '& .MuiChip-root': {
        margin: '0 5px 5px 0',
      },
    },
  }),
);
