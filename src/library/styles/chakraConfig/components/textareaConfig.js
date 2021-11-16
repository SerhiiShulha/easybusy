import { colors } from '../../../constants/styles'

export const TextareaConfig = {
  baseStyle: {
    borderRadius: '8px',
    fontWeight: 500,
    border: '1px solid',
    _placeholder: {
      color: 'text.60',
    },
  },
  sizes: {
    xxl: {
      minHeight: '20rem',
      maxHeight: '60rem',
      fontSize: '14px',
      p: '15px',
      border: '1px solid',
    },
  },
  variants: {
    filled: {
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
  defaultProps: {
    variant: 'filled',
    size: 'xxl',
  },
}
