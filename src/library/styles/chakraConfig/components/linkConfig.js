export const LinkConfig = {
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
    action: (props) => ({
      fontWeight: 600,
      fontSize: props.size === 'm' ? '14px' : '16px',
      border: '1px solid',
      borderColor: 'rgba(44, 66, 81, 0.1)',
      _hover: {
        color: !props.disabled && 'white',
        bg: !props.disabled && 'hover',
        borderColor: !props.disabled && 'hover',
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
}
