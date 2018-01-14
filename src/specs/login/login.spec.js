import { values, flatMap } from 'lodash';
import { env } from 'process';

import {
  assertGenericErrorDisplays,
  login,
} from '../utils/login-utils';

import {
  loginForm,
  loginError,
} from '../ui-maps/login-ui-map';

describe('Linode Manager - Login Suite', () => {
  beforeEach(() => {
    browser.url('/');
  });

  it('should display login elements', () => {
    const loginElements = flatMap(values(loginForm), i => {
      if (typeof i === 'object') return values(i);
      return i;
    });
    loginElements.forEach(elem => {
      const elementVisible = $(elem).isVisible();
      expect(elementVisible).toBe(true);
    });
  });

  it('should throw error on login attempt without credentials', () => {
    browser.click(loginForm.submit);
    assertGenericErrorDisplays();
  });

  it('should throw an error on login without password', () => {
    $(loginForm.username.input).setValue(env.linodeUser);
    browser.click(loginForm.submit);
    assertGenericErrorDisplays();
  });

  it('should throw an error with invalid username', () => {
    $(loginForm.username.input).setValue(`${env.linodeUser}243%#%^`);
    browser.click(loginForm.submit);
    assertGenericErrorDisplays();
  });

  it('should throw an error with invalid password', () => {
    login(env.linodeUser, 'BadPassword#2983563');
    const errorDisplays = $(loginError.alert).waitForVisible();
    const passwordErrorText = $(loginError.alertMsg).getText();

    expect(errorDisplays).toBe(true);
    expect(passwordErrorText).toBe('Username or password incorrect.');
  });

  it('should successfully login after failed attempt', () => {
    login(env.linodeUser, 'BadPassword#42253');

    const errorDisplays = $(loginError.alert).waitForVisible();
    const passwordErrorText = $(loginError.alertMsg).getText();

    expect(errorDisplays).toBe(true);
    expect(passwordErrorText).toBe('Username or password incorrect.');

    login(env.linodeUser, env.linodePassword);

    $('.MainHeader-logo').waitForVisible();
  });
});
