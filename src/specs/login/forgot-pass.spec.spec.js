import { env } from 'process';
import { assertGenericErrorDisplays } from '../utils/login-utils';

import {
  loginForm,
  forgotPasswordForm,
} from '../ui-maps/login-ui-map';

xdescribe('Linode Manager - Login - Forgot Password Suite', () => {
  beforeAll(() => browser.url('/'));

  it('should display the forgot password page', () => {
    browser.click(loginForm.forgot);
  });
});
