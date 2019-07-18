import validateZipCode from '../../utils/validateZipCode';

describe('Valide Zip Code', () => {
  it('returns "undefined" for valid zip codes', () => {
    expect(validateZipCode(98136)).toBeUndefined();
    expect(validateZipCode(10001)).toBeUndefined();
  });

  it('returns "Invalid zip code" for invalid zip codes', () => {
    expect(validateZipCode(123)).toBe('Invalid zip code');
    expect(validateZipCode('zip')).toBe('Invalid zip code');
  });

  it('returns "Required" when no zip code is provided', () => {
    expect(validateZipCode()).toBe('Required');
  });
});
