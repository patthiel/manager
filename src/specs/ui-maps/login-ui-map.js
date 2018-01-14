/*
* TODO: Tag elements in templates with `data-qa-` attributes
*/
export const loginForm = {
  headerMsg: '.CardHeader > h1',
  username: {
    // label: '',
    input: '#username',
  },
  password: {
    // label: '',
    input: '#password',
  },
  submit: '.btn-primary',
  forgot: '.btn-secondary',
};

export const loginError = {
  alert: '.alert-danger',
  alertMsg: '.alert-danger > ul > li',
};

export const forgotPasswordForm = {
  headerMsg: '#login > legend',
  headerSecondaryMsg: '#login > p',
};
