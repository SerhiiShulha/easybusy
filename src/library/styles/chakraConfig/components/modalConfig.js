export const ModalConfig = {
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
      p: '4rem 3rem 6rem',
    },
  }),
}
