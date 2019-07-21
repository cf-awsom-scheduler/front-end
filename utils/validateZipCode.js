export default function validateZipCode(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[0-9]{5}(?:-[0-9]{4})?$/g.test(value)) {
    error = 'Invalid zip code';
  }
  return error;
}
