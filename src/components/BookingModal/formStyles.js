export const formStyles = {
  option: (base, state) => ({
    ...base,
    textAlign: 'center',
    color: state.isSelected ? '#191A15' : `rgba(25, 26, 21, 0.3)`,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.25,
    paddingLeft: 20,
    paddingTop: 8,
    '&:hover': {
      backgroundColor: '#C5C5C5',
      color: '#191A15',
    },
    backgroundColor: 'white',

    borderRadius: 14,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    maxHeight: 'none',
  }),
  container: base => ({
    ...base,
    width: '50%',
  }),
  control: base => ({
    ...base,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingRight: 18,
    border: '1px solid rgba(25, 26, 21, 0.1)',
    '&:hover': { backgroundColor: 'rgba(25, 26, 21, 0.1)' },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
  }),
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      width: 0,
    },
    '::-webkit-scrollbar-thumb': {
      display: 'none',
    },

    '::-webkit-scrollbar-thumb:hover': {
      display: 'none',
    },
    padding: 0,
  }),
  menu: base => ({
    ...base,
    paddingRight: 8,
    borderRadius: 14,
    overflow: 'hidden',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02);',
    maxHeight: 180,
    width: 150,
    padding: 0,
    right: 0,
  }),
  singleValue: base => ({
    ...base,
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 16,
    color: '#191A15',
  }),
};
