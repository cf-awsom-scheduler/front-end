export default function validatePhone(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^((\(\d{3}\))|(\d{3}))[-\s]?\d{3}[-\s]?\d{4}$/g.test(value)) {
    error = 'Invalid phone number';
  }
  return error;
}
