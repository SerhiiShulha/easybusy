import { extendTheme } from '@chakra-ui/react'
import { colors } from '../constants/styles'

export const theme = extendTheme({
  fonts: {
    body: 'Inter',
    heading: 'Rota',
  },
  colors: {
    primary: {
      10: 'rgba(12, 206, 107, 0.1)',
      20: 'rgba(12, 206, 107, 0.2)',
      30: 'rgba(12, 206, 107, 0.3)',
      40: 'rgba(12, 206, 107, 0.4)',
      50: 'rgba(12, 206, 107, 0.5)',
      60: 'rgba(12, 206, 107, 0.6)',
      70: 'rgba(12, 206, 107, 0.7)',
      80: 'rgba(12, 206, 107, 0.8)',
      90: 'rgba(12, 206, 107, 0.9)',
      100: 'rgba(12, 206, 107, 1)',
    },
    accent: '#fffc52',
    text: {
      50: 'rgba(44, 66, 81, 0.5)',
      60: 'rgba(44, 66, 81, 0.6)',
      70: 'rgba(44, 66, 81, 0.7)',
      80: 'rgba(44, 66, 81, 0.8)',
      90: 'rgba(44, 66, 81, 0.9)',
      100: 'rgba(44, 66, 81, 1)',
    },
  },
  shadows: {
    outline: '0 0 0 2px rgba(255, 252, 82, 0.4)',
  },
  styles: {
    global: {
      'html, body': {
        color: 'text.100',
        fontWeight: 500,
      },
    },
  },
  components: {
    Button: {
      baseStyles: {
        fontWeight: 600,
      },
      sizes: {
        lg: {
          h: '52px',
          px: '45px',
          borderRadius: '6px',
        },
        m: {
          h: '44px',
          px: '20px',
          borderRadius: '6px',
        },
      },
      variants: {
        solid: {
          bg: 'primary.100',
          color: 'white',
          fontWeight: 600,
          fontSize: '16px',
          _hover: {
            bg: 'primary.70',
          },
        },
        outline: {
          fontWeight: 600,
          fontSize: '16px',
          borderColor: 'text.100',
          _hover: {
            bg: 'primary.10',
            borderColor: 'primary.100',
          },
        },
      },

      defaultProps: {
        size: 'lg',
        colorScheme: 'primary',
      },
    },
    Link: {
      variants: {
        text: {
          display: 'inline-flex',
          fontWeight: 600,
        },
        solid: {
          display: 'inline-flex',
          bg: 'primary.100',
          color: 'white',
          fontWeight: 600,
          fontSize: '16px',
          textAlign: 'center',
          // border: '1px solid',
          // borderColor: 'primary.100',
          _hover: {
            bg: 'primary.70',
            textDecoration: 'none',
          },
        },
        outline: (props) => ({
          display: 'inline-flex',
          py: props.size === 'lg' ? '13px' : '9px',
          bg: 'transparent',
          color: props.colorScheme === 'white' ? 'white' : 'text.100',
          fontWeight: 600,
          fontSize: '16px',
          textAlign: 'center',
          border: '1px solid',
          borderColor: props.colorScheme === 'white' ? 'white' : 'text.100',
          _hover: {
            bg: 'primary.10',
            borderColor: 'primary.100',
            textDecoration: 'none',
          },
        }),
      },
      sizes: {
        text: {
          px: 0,
          py: 0,
        },
        lg: {
          px: '45px',
          py: '14px',
          fontSize: '16px',
          borderRadius: '6px',
        },
        m: {
          px: '20px',
          py: '10px',
          fontSize: '14px',
          borderRadius: '6px',
        },
      },
      defaultProps: {
        variant: 'solid',
        size: 'lg',
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: '8px',
          fontWeight: 500,
          _placeholder: {
            color: 'text.60',
          },
        },
      },
      sizes: {
        xxl: {
          field: {
            h: '58px',
            fontSize: '14px',
            p: '15px',
            borderWidth: '2px',
          },
        },
      },
      variants: {
        filled: {
          field: {
            bg: '#f9f9f9',
            _hover: {
              bg: '#f3f3f3',
            },
            _focus: {
              borderColor: colors.primary,
            },
            _disabled: {
              opacity: 0.6,
            },
          },
        },
      },
      defaultProps: {
        size: 'xxl',
        variant: 'filled',
      },
    },
  },
})
