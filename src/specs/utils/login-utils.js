import { loginForm, loginError } from '../ui-maps/login-ui-map';

export const assertGenericErrorDisplays = () => {
  const errorDisplays = $(loginError.alert).waitForVisible();
  const errorMsgDisplays = $(loginError.alertMsg).waitForVisible();

  expect(errorDisplays).toBe(true);
  expect(errorMsgDisplays).toBe(true);
};

export const login = (username, password) => {
  $(loginForm.username.input).setValue(username);
  $(loginForm.password.input).setValue(password);
  browser.click(loginForm.submit);
};
