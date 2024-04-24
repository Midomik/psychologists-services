export const customStyles = {
  option: (base, state) => ({
    ...base,
    color: state.isSelected ? '#191A15' : `rgba(25, 26, 21, 0.3)`,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 400,
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
  control: base => ({
    ...base,
    height: 48,
    minHeight: 48,
    borderRadius: 14,
    backgroundColor: '#fc832c',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#191A15',
  }),
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      width: 8,
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      background: '#f1f1f1',
    },
    '::-webkit-scrollbar-track': {
      marginTop: 14,
      marginBottom: 14,
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#BFBEB6',
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
    maxHeight: 253,
    padding: 0,
  }),
  singleValue: base => ({
    ...base,
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 16,
    color: '#191A15',
  }),
};
