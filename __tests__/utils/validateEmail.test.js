import validateEmail from '../../utils/validateEmail';

describe('Validate Email', () => {
  it('It should match a basic email', () => {
    expect(validateEmail('joe@codefellows.com')).toBeUndefined();
  });

  it('It should match if the email contains a period', () => {
    expect(validateEmail('joe.schmoe@codefellows.net')).toBeUndefined();
  });

  it('It should match if the email contains other top-level domains', () => {
    expect(validateEmail('joe@codefellows.org')).toBeUndefined();
  });

  it('It should match if the email contains a period and other top-level domains', () => {
    expect(validateEmail('joe.schmoe@codefellows.net')).toBeUndefined();
  });

  it("It should fail things that aren't email addresses", () => {
    expect(validateEmail('justastring')).toBe('Invalid email address');
    expect(validateEmail('missing@adomain')).toBe('Invalid email address');
    expect(validateEmail('@noname.com')).toBe('Invalid email address');
    expect(validateEmail('missing.atsymbol.net')).toBe('Invalid email address');
    expect(validateEmail('looksgood@sofar.comohnowaitthisisbad')).toBe(
      'Invalid email address'
    );
  });

  it('returns "Required" when no email is provided', () => {
    expect(validateEmail()).toBe('Required');
  });
});
