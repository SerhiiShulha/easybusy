import { colors } from '../../../constants/styles'
import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import Select from 'react-select'
import FormField from '../FormField'

const styles = {
  control: (provided, { isFocused, isDisabled }) => ({
    ...provided,
    minHeight: '5.2rem',
    border: 0,
    backgroundColor: !isDisabled ? colors.input : colors.inputDisabled,
    boxShadow: isFocused ? `0 0 0 1px ${colors.primary}` : 'none',
    cursor: 'text',
    borderRadius: '.8rem',
  }),
  placeholder: (provided, { isDisabled }) => ({
    ...provided,
    color: !isDisabled ? colors.text60 : colors.text30,
    fontSize: '1.4rem',
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: '1.5rem',
  }),
  singleValue: (provided, { isDisabled }) => ({
    ...provided,
    fontSize: '1.4rem',
    color: !isDisabled ? colors.text : colors.text80,
  }),
  multiValue: (provided, { isFocused }) => ({
    ...provided,
    // margin: '0 8px 0 0',
    padding: '7px 8px',
    borderRadius: '1rem',
    backgroundColor: '#efefef',
    fontSize: '14px',
  }),
  multiValueRemove: (provided, { isFocused }) => ({
    ...provided,
    fontSize: '8px',
    padding: '4px',
    ':hover': {
      backgroundColor: 'transparent',
      color: colors.error,
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
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
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    fontSize: '1.4rem',
    backgroundColor: isSelected || isFocused ? '#f5f5f5' : 'transparent',
    color: colors.text,
  }),
}

const SingleSelect = ({
  isMulti = false,
  label,
  options,
  isDisabled = false,
  afterChange,
  mb,
  className,
  ...inputProps
}) => {
  const [field, meta, helpers] = useField(inputProps.name)

  const onChange = (option) => {
    helpers.setValue(option)

    if (afterChange && option?.value) afterChange(option?.value)
  }

  return (
    <FormField
      label={label}
      name={field.name}
      touched={meta.touched}
      mb={mb}
      error={meta.error}
      className={className}
    >
      <Select
        {...field}
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        isDisabled={isDisabled}
        options={options}
        styles={styles}
        placeholder={inputProps.placeholder}
        onChange={(option) => onChange(option)}
      />
    </FormField>
  )
}

export default SingleSelect
