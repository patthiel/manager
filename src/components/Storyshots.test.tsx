import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';

const getMatchOptions = ( {context : { kind, story }, url } ) => {
  return {
    failureThreshold: 0.5,
    failureThresholdType: 'percent',
  };
};

initStoryshots({ suite: 'Image storyshots', test: imageSnapshot({ getMatchOptions }) });
