import { env } from 'process';
import { login } from '../../utils/login-utils';
import { loginError } from '../../ui-maps/login-ui-map';

describe('Linode Manager - Smoke - Login Suite', () => {
  beforeAll(() => browser.url('/'));

  it('should throw error on login attempt with invalid password', () => {
    login(env.linodeUser, 'BadPassword#2983563');

    const errorDisplays = $(loginError.alert).waitForVisible();
    const passwordErrorText = $(loginError.alertMsg).getText();

    expect(errorDisplays).toBe(true);
    expect(passwordErrorText).toBe('Username or password incorrect.');
  });

  it('should successfully login with valid credentials', () => {
    login(env.linodeUser, env.linodePassword);
    $('.MainHeader-logo').waitForVisible();
    const headerUsername = $('.MainHeader-username').getText();

    expect(headerUsername).toBe(env.linodeUser);
  });
});
