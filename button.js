// button.js
export default {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
    content: "''",
  },
  '&::after': {
    boxSizing: 'border-box',
    content: "''",
  }
}