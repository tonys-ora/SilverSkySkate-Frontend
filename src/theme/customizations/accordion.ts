import { Components, Theme } from '@mui/material/styles'

export const accordionCustomizations: Components<Theme> = {
  MuiAccordion: {
    defaultProps: {
      elevation: 0,
      disableGutters: true
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '12px',
        padding: '24px',
        overflow: 'clip',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid',
        borderColor: theme.palette.divider,
        ':before': {
          backgroundColor: 'transparent'
        },
        '&:first-of-type': {
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        },
        '&:last-of-type': {
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px'
        }
      })
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 0,
        minHeight: '0px'
      },
      content: {
        margin: 0
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '24px 0 0 0'
      }
    }
  }
}
