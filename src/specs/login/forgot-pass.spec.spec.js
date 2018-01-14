import { assertGenericErrorDisplays } from '../utils/login-utils';

import {
  loginForm,
  forgotPasswordForm,
} from '../ui-maps/login-ui-map';

describe('Linode Manager - Login - Forgot Password Suite', () => {
  beforeAll(() => browser.url('/'));

  it('should display the forgot password page', () => {
    browser.click(loginForm.forgot);
    const forgotPasswordElems = Object.values(forgotPasswordForm);

    forgotPasswordElems.forEach(e => {
      expect($(e).isVisible()).toBe(true);
    });
  });

  xit('should display a error dialog when submitting without username', () => {

  });

  xit('should throw an error when entering an email', () => {

  });

  xit('should display success message on submision of form', () => {

  });
});
