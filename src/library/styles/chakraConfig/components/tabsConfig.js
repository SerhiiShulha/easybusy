export const TabsConfig = {
  baseStyle: {
    tab: {
      color: 'text.30',
      fontWeight: 800,
      fontFamily: 'Rota, sans-serif',
    },
  },
  variants: {
    unstyled: {
      tab: {
        fontSize: '3rem',
        lineHeight: '4rem',
        p: '0',

        '&:not(:last-child)': {
          mr: '3rem',
        },

        _selected: {
          color: 'text.100',
          transition: '0.3s all',
        },
      },
      tabpanel: {
        p: '2.5rem 0 0',
      },
    },
  },
}
