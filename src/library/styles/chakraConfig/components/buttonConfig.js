export const ButtonConfig = {
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
      fontSize: '14px',
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
        bg: !props.disabled ? 'hover' : 'primary.40',
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
        bg: 'hover',
        borderColor: 'hover',
      },
    },
    action: (props) => ({
      fontWeight: 600,
      fontSize: props.size === 'm' ? '14px' : '16px',
      border: '1px solid',
      borderColor: 'rgba(44, 66, 81, 0.1)',
      _hover: {
        color: !props.disabled && 'white',
        bg: !props.disabled && 'hover',
        borderColor: !props.disabled && 'hover',
      },
    }),
  },

  defaultProps: {
    size: 'lg',
    colorScheme: 'primary',
  },
}
