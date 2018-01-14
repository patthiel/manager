exports.browserConf = {
  default: {
    browserName: 'chrome',
    maxInstances: 5,
    acceptInsecureCerts: true,
  },
  chrome: {
    browserName: 'chrome',
    maxInstances: 5,
    acceptInsecureCerts: true,
  },
  headlessChrome: {
    browserName: 'chrome',
    maxInstances: 5,
    acceptInsecureCerts: true,
    chromeOptions: {
      args: ['--headless', '--disable-gpu'],
    },
  },
  firefox: {
    browserName: 'firefox',
    marionette: true,
    maxInstances: 5,
    acceptInsecureCerts: true,
  },
  headlessFirefox: {
    browserName: 'firefox',
    marionette: true,
    'moz:firefoxOptions': {
      binary: '/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin',
      args: ['-headless'],
    },
    maxInstances: 5,
    acceptInsecureCerts: true,
  },
  safari: {
    browserName: 'safari',
    'safari.options': {
      acceptInsecureCerts: true,
    },
    maxInstances: 1,
  },
};
