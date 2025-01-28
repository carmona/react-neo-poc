/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */

const logMessage = (...args: any[]) => {
  console.info('MGM: ', ...args);
};

const logError = (...args: any[]) => {
  console.error('MGM: ', ...args);
};

export { logMessage, logError };
