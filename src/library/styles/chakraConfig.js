import { extendTheme } from '@chakra-ui/react'
import { colors } from '../constants/styles'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  sizes: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1110px',
    // container: {
    //   sm: '576px',
    //   md: '768px',
    //   lg: '992px',
    //   xl: '1200px',
    // },
  },
  breakpoints: createBreakpoints({
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }),
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
    hover: '#09B65F',
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
    outline: '0',
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
        solid: (props) => ({
          bg: 'primary.100',
          color: 'white',
          fontWeight: 600,
          fontSize: '16px',
          _hover: {
            bg: !props.isDisabled ? 'hover' : 'primary.40',
          },
          _disabled: {
            bg: 'primary.40',
            opacity: 1,
          },
        }),
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
          alignItems: 'center',
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
            bg: 'hover',
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
            color: 'white',
            bg: 'hover',
            borderColor: 'hover',
            textDecoration: 'none',
          },
        }),
      },
      sizes: {
        text: {
          px: 0,
          py: 0,
        },
        lg: (props) => ({
          px: props.variant === 'text' ? 0 : '45px',
          py: props.variant === 'text' ? 0 : '14px',
          fontSize: '16px',
          borderRadius: '6px',
        }),
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
          border: '1px solid',
          _placeholder: {
            color: 'text.60',
          },
        },
      },
      sizes: {
        xxl: {
          field: {
            h: '52px',
            fontSize: '14px',
            p: '15px',
            border: '1px solid',
          },
        },
      },
      variants: {
        filled: {
          field: {
            bg: '#f9f9f9',
            border: '1px solid',
            _hover: {
              bg: '#f3f3f3',
            },
            _focus: {
              borderColor: colors.primary,
            },
            _invalid: {
              borderColor: colors.error,
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
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          borderRadius: '1.6rem',
        },
        header: {
          p: '3rem',
          fontSize: '3rem',
          fontWeight: 800,
          textAlign: 'center',
          lineHeight: 1,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
        closeButton: {
          top: '3rem',
          insetEnd: '3rem',
        },
        body: {
          paddingTop: '4rem',
        },
        footer: {
          display: 'block',
          p: '4rem 3rem 9rem',
        },
      }),
      sizes: {
        'fit-container': {},
      },
    },
    NumberInput: {
      baseStyle: {
        field: {
          borderRadius: '8px',
          fontWeight: 500,
          border: '1px solid',
          _placeholder: {
            color: 'text.60',
          },
        },
      },
      sizes: {
        xxl: {
          field: {
            h: '52px',
            fontSize: '14px',
            p: '15px',
            border: '1px solid',
          },
        },
      },
      variants: {
        filled: {
          field: {
            bg: '#f9f9f9',
            border: '1px solid',
            _hover: {
              bg: '#f3f3f3',
            },
            _focus: {
              borderColor: colors.primary,
            },
            _invalid: {
              borderColor: colors.error,
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
    Slider: {
      baseStyle: {
        track: {
          bg: '#f9f9f9',
        },
        filledTrack: {
          bg: 'primary.100',
        },
        thumb: {
          w: '20px',
          h: '20px',
        },
      },
      sizes: {
        md: (props) => ({
          track: {
            h: '8px',
          },
          thumb: {
            h: '2rem',
            w: '2rem',
            borderWidth: 2,
            borderColor: 'primary.100',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        }),
      },
    },
    Alert: {
      baseStyle: {
        container: {
          px: '3rem',
          py: '1.5rem',
        },
        title: {
          fontWeight: 500,
        },
        description: {
          fontWeight: 400,
          marginTop: '1rem',
          fontSize: '1.4rem',
        },
      },
    },
  },
})
