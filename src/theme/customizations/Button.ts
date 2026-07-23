import { alpha, Components, Theme } from '@mui/material/styles'
import { svgIconClasses } from '@mui/material/SvgIcon'

import { brand, colors, gray, red } from '../themePrimitives'

export const buttonCustomizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              height: '2.25rem',
              padding: '8px 12px'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              height: '2.5rem'
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundImage: `linear-gradient(180deg, #0DB1A0 0%, #026056 100%)`
            }
          },
          {
            props: {
              color: 'success',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundImage: `linear-gradient(180deg, #34A853 0%, #067524 100%)`
            }
          },
          {
            props: {
              color: 'warning',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              backgroundImage: `linear-gradient(180deg, #FFF6A3 0%, #FF9361 100%)`,
              ...theme.applyStyles('dark', {
                color: 'black'
              })
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'contained'
            },
            style: {
              color: colors.dark,
              background: colors.white,
              boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)',
              border: `1px solid ${colors.border}`,
              ...theme.applyStyles('dark', {
                border: `1px solid ${colors.borderDark}`,
                background: colors.layer2Dark,
                color: colors.white
              })
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'outlined'
            },
            style: {
              color: colors.dark,
              border: '1px solid',
              borderColor: colors.border,
              backgroundColor: theme.palette.background.default,
              justifyContent: 'left',
              padding: '10px',
              gap: '8px',
              ...theme.applyStyles('dark', {
                color: theme.palette.text.secondary,
                border: '1px solid',
                borderColor: colors.borderDark
              })
            }
          },
          {
            props: {
              color: 'error',
              variant: 'outlined'
            },
            style: {
              color: red[700],
              border: '1px solid',
              borderColor: red[200],
              backgroundColor: red[50],
              '&:hover': {
                backgroundColor: red[100],
                borderColor: red[400]
              },
              '&:active': {
                backgroundColor: alpha(red[200], 0.7)
              },
              ...theme.applyStyles('dark', {
                color: red[50],
                border: '1px solid',
                borderColor: red[700],
                backgroundColor: alpha(red[700], 0.3),
                '&:hover': {
                  borderColor: red[700],
                  backgroundColor: alpha(red[700], 0.6)
                },
                '&:active': {
                  backgroundColor: alpha(red[700], 0.5)
                }
              })
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'outlined'
            },
            style: {
              color: brand[700],
              border: '1px solid',
              borderColor: brand[200],
              backgroundColor: brand[50],
              '&:hover': {
                backgroundColor: brand[100],
                borderColor: brand[400]
              },
              '&:active': {
                backgroundColor: alpha(brand[200], 0.7)
              },
              ...theme.applyStyles('dark', {
                color: brand[50],
                border: '1px solid',
                borderColor: brand[900],
                backgroundColor: alpha(brand[900], 0.3),
                '&:hover': {
                  borderColor: brand[700],
                  backgroundColor: alpha(brand[900], 0.6)
                },
                '&:active': {
                  backgroundColor: alpha(brand[900], 0.5)
                }
              })
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'outlined'
            },
            style: {
              borderColor: colors.border,
              ...theme.applyStyles('dark', {
                borderColor: colors.borderDark
              })
            }
          },
          {
            props: {
              color: 'primary',
              variant: 'text'
            },
            style: {
              color: colors.prime
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'text'
            },
            style: {
              color: brand[700],
              '&:hover': {
                backgroundColor: alpha(brand[100], 0.5)
              },
              '&:active': {
                backgroundColor: alpha(brand[200], 0.7)
              },
              ...theme.applyStyles('dark', {
                color: brand[100],
                '&:hover': {
                  backgroundColor: alpha(brand[900], 0.5)
                },
                '&:active': {
                  backgroundColor: alpha(brand[900], 0.3)
                }
              })
            }
          }
        ]
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: '12px',
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.05)',
        letterSpacing: 0,
        color: theme.palette.text.primary,
        border: '1px solid ',
        borderColor: colors.border,
        backgroundColor: colors.white,
        '&:hover': {
          backgroundColor: gray[100],
          borderColor: gray[300]
        },
        '&:active': {
          backgroundColor: gray[200]
        },
        ...theme.applyStyles('dark', {
          backgroundColor: colors.layer1Dark,
          borderColor: gray[700],
          '&:hover': {
            backgroundColor: gray[900],
            borderColor: gray[600]
          },
          '&:active': {
            backgroundColor: gray[900]
          }
        }),
        variants: [
          {
            props: {
              color: 'inherit'
            },
            style: {
              backgroundColor: 'transparent !important',
              border: 'none',
              borderRadius: '50%'
            }
          },
          {
            props: {
              size: 'small'
            },
            style: {
              width: '2.25rem',
              height: '2.25rem',
              padding: '0.25rem',
              [`& .${svgIconClasses.root}`]: { fontSize: '1rem' }
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              width: '2.5rem',
              height: '2.5rem'
            }
          },
          {
            props: {
              color: 'primary'
            },
            style: {
              borderColor: `${colors.prime} !important`,
              backgroundColor: `${alpha(colors.prime, 0.16)} !important`
            }
          }
        ]
      })
    }
  }
}
