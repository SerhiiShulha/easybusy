import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'Field is required',
  },
  string: {
    min: ({ min }) => `Min length is ${min} characters`,
    max: ({ max }) => `Max length is ${max} characters`,
    email: 'Email is not valid',
  },
  date: {
    min: 'Invalid date',
    max: 'Invalid date',
  },
})
