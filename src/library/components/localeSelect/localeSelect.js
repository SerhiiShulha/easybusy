import React, { useState } from 'react'
import Select from 'react-select'

const locales = [
  { value: 'en', label: 'En' },
  { value: 'ua', label: 'Ua' },
]

const styles = {
  control: (provided) => ({
    ...provided,
    border: 0,
    backgroundColor: 'transparent',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 0 0 .8rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '.2rem',
    color: '#fff',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '.8rem',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  }),
  menuList: (provided) => ({
    ...provided,
    border: 0,
    padding: '.6rem 0',
    overflow: 'hidden',
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected || isFocused ? '#ccc' : 'transparent',
  }),
}

const LocaleSelect = () => {
  const [open, isOpen] = useState(false)

  const onChange = () => {}

  return (
    <Select
      // menuIsOpen
      options={locales}
      defaultValue={locales[0]}
      styles={styles}
    />
  )
}

export default LocaleSelect
