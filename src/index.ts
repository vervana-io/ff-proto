import * as path from 'path';

export const proto = (name: string): string => {
  // Use __dirname to get the directory of the current file
  // Then navigate to the proto folder relative to this package
  const protoPath = path.resolve(__dirname, '..', 'proto', name);
  return protoPath;
}

export const protoRoot = (dir = ''): string => {
  return path.resolve(__dirname, '..', 'proto', dir);
}

export * as healthcheck from './healthcheck/healthcheck';
export * as notifications from './notifications/notification';
export * as customers from './customers/customer';
export * as vendors from './vendors/vendor';
export * as riders from './riders/rider';
export * as users from './users/user'
export * as common from './common/common';