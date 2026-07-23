import { outlinedInputClasses } from '@mui/material'
import { chipClasses } from '@mui/material/Chip'
import { Components, Theme } from '@mui/material/styles'
import { svgIconClasses } from '@mui/material/SvgIcon'

import { hexToRgba } from '@/utils'

import { brand, colors, gray, red } from '../themePrimitives'

export const Customizations: Components<Theme> = {
  MuiPaper: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        borderRadius: '12px'
      }
    }
  },
  MuiChip: {
    defaultProps: {
      size: 'small'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        border: '1px solid',
        borderRadius: '999px',
        height: 'auto',
        [`& .${chipClasses.label}`]: {
          fontWeight: 400
        },
        variants: [
          {
            props: {
              color: 'default'
            },
            style: {
              borderColor: gray[200],
              backgroundColor: gray[100],
              [`& .${chipClasses.label}`]: {
                color: gray[500]
              },
              [`& .${chipClasses.icon}`]: {
                color: gray[500]
              },
              ...theme.applyStyles('dark', {
                borderColor: gray[700],
                backgroundColor: gray[800],
                [`& .${chipClasses.label}`]: {
                  color: gray[300]
                },
                [`& .${chipClasses.icon}`]: {
                  color: gray[300]
                }
              })
            }
          },
          {
            props: {
              color: 'success'
            },
            style: {
              padding: '4px 8px',
              borderColor: colors.prime,
              backgroundColor: hexToRgba(colors.prime, 8),
              [`& .${chipClasses.label}`]: {
                color: colors.prime,
                padding: '0px'
              },
              [`& .${chipClasses.icon}`]: {
                color: colors.prime
              }
            }
          },
          {
            props: {
              color: 'warning'
            },
            style: {
              borderColor: colors.orange,
              backgroundColor: hexToRgba(colors.orange, 8),
              [`& .${chipClasses.label}`]: {
                color: colors.orange
              },
              [`& .${chipClasses.icon}`]: {
                color: colors.orange
              }
            }
          },
          {
            props: {
              color: 'error'
            },
            style: {
              borderColor: red[100],
              backgroundColor: red[50],
              [`& .${chipClasses.label}`]: {
                color: red[500]
              },
              [`& .${chipClasses.icon}`]: {
                color: red[500]
              },
              ...theme.applyStyles('dark', {
                borderColor: red[800],
                backgroundColor: red[900],
                [`& .${chipClasses.label}`]: {
                  color: red[200]
                },
                [`& .${chipClasses.icon}`]: {
                  color: red[300]
                }
              })
            }
          },
          {
            props: { size: 'small' },
            style: {
              maxHeight: 20,
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.caption.fontSize
              },
              [`& .${svgIconClasses.root}`]: {
                fontSize: theme.typography.caption.fontSize
              }
            }
          },
          {
            props: { size: 'medium' },
            style: {
              [`& .${chipClasses.label}`]: {
                fontSize: theme.typography.body2.fontSize,
                lineHeight: '20px'
              }
            }
          }
        ]
      })
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: 'none'
      },
      input: {
        '&::placeholder': {
          opacity: 0.7,
          color: gray[500]
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: ({ theme }) => ({
        padding: 0,
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 100px ${theme.palette.mode === 'dark' ? colors.layer1Dark : colors.white} inset !important`
        }
      }),
      root: ({ theme }) => ({
        padding: '8px 12px',
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: colors.white,
        transition: 'border 120ms ease-in',
        '&:hover': {
          borderColor: gray[400]
        },
        [`&.${outlinedInputClasses.focused}`]: {
          borderColor: brand[400]
        },
        ...theme.applyStyles('dark', {
          backgroundColor: colors.layer1Dark,
          '&:hover': {
            borderColor: gray[500]
          }
        }),
        variants: [
          {
            props: {
              size: 'small'
            },
            style: {
              height: '2.25rem'
            }
          },
          {
            props: {
              size: 'medium'
            },
            style: {
              height: '2.5rem'
            }
          }
        ]
      }),
      notchedOutline: {
        border: 'none'
      }
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[400]
        })
      })
    }
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        variants: [
          {
            props: {
              severity: 'success'
            },
            style: {
              backgroundColor: hexToRgba(colors.prime, 8),
              color: colors.prime,
              border: `1px solid ${colors.prime}`,
              '& .MuiAlert-icon': {
                color: colors.prime
              }
            }
          },
          {
            props: {
              severity: 'warning'
            },
            style: {
              backgroundColor: hexToRgba(colors.orange, 8),
              color: colors.orange,
              border: `1px solid ${colors.orange}`,
              '& .MuiAlert-icon': {
                color: colors.orange
              }
            }
          },
          {
            props: {
              severity: 'info'
            },
            style: {
              backgroundColor: hexToRgba(colors.orange, 8),
              color: colors.orange,
              border: `1px solid ${colors.orange}`,
              '& .MuiAlert-icon': {
                color: colors.orange
              }
            }
          }
        ]
      }
    }
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: {
        margin: 0
      }
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: { color: 'grey' },
            style: {
              color: `${colors.greyDark} !important`,
              ...theme.applyStyles('dark', {
                color: `${colors.greyLight} !important`
              })
            }
          },
          {
            props: { color: 'grey-dark' },
            style: {
              color: `${colors.greyDark} !important`
            }
          },
          {
            props: { color: 'red' },
            style: {
              color: `${colors.red} !important`
            }
          },
          {
            props: { color: 'default' },
            style: {
              color: `${colors.dark} !important`,
              ...theme.applyStyles('dark', {
                color: `${colors.white} !important`
              })
            }
          },
          {
            props: { color: 'prime' },
            style: {
              color: `${colors.prime} !important`
            }
          }
        ]
      })
    }
  }
}
