import { Components, Theme } from '@mui/material/styles'
import { tabClasses } from '@mui/material/Tab'

import { hexToRgba } from '@/utils'

import { colors } from '../themePrimitives'

export const tabCustomizations: Components<Theme> = {
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 'auto',
        borderRadius: '12px',
        ...theme.applyStyles('dark', {
          backgroundColor: colors.bgDark
        })
      }),
      indicator: {
        display: 'none'
      },
      scroller: {
        width: 'auto'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: '0px',
        fontSize: '16px',
        padding: '8px 16px',
        borderRadius: '12px',
        textTransform: 'none',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        color: theme.palette.text.secondary,
        border: 'transparent',

        ':hover': {
          color: colors.dark,
          backgroundColor: colors.white
        },
        [`&.${tabClasses.selected}`]: {
          color: colors.dark,
          backgroundColor: colors.white,
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.1)'
        },
        ...theme.applyStyles('dark', {
          [`&.${tabClasses.selected}`]: {
            color: colors.prime,
            backgroundColor: hexToRgba(colors.prime, 8),
            borderColor: colors.prime
          }
        })
      })
    }
  }
}
