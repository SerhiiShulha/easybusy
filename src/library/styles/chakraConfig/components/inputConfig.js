import { colors } from '../../../constants/styles'

export const InputConfig = {
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
    inline: {
      field: {
        border: 0,
        py: '3px',
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
}
