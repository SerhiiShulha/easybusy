export const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
]

const currentYear = new Date().getFullYear()
export const birthYears = Array(currentYear - (currentYear - 100))
  .fill('')
  .map((_, i) => currentYear - i)
  .map((y) => ({ value: y, label: y }))
