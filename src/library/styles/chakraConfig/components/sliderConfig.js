export const SliderConfig = {
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
}
