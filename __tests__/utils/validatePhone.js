import validatePhone from '../../utils/validatePhone';

describe('Validate Phone', () => {
  it('returns "undefined" for valid phone numbers', () => {
    expect(validatePhone('(555) 555-5555')).toBeUndefined();
    expect(validatePhone('555 555-5555')).toBeUndefined();
    expect(validatePhone('555-555-5555')).toBeUndefined();
    expect(validatePhone('555 5555555')).toBeUndefined();
    expect(validatePhone('5555555555')).toBeUndefined();
    expect(validatePhone('234 567 8910')).toBeUndefined();
  });

  it('returns "Invalid phone number" for invalid phone numbers', () => {
    expect(validatePhone('abcdefghij')).toBe('Invalid phone number');
    expect(validatePhone('222 222 2222 ext. 2222')).toBe(
      'Invalid phone number'
    );
    expect(validatePhone('(222 222-2222')).toBe('Invalid phone number');
    expect(validatePhone('222 222-2222-')).toBe('Invalid phone number');
    expect(validatePhone('(222 222- 2222')).toBe('Invalid phone number');
    expect(validatePhone('(222 222 -2222')).toBe('Invalid phone number');
    expect(validatePhone('523 555--5555')).toBe('Invalid phone number');
    expect(validatePhone('55555555555')).toBe('Invalid phone number');
    expect(validatePhone('55555555555')).toBe('Invalid phone number');
    expect(validatePhone('55555555555')).toBe('Invalid phone number');
    expect(validatePhone('55_55_5555')).toBe('Invalid phone number');
  });

  it('returns "Required" when no phone number is provided', () => {
    expect(validatePhone()).toBe('Required');
  });
});
