import * as path from 'path';

export const proto = (name: string): string => {
  // Use __dirname to get the directory of the current file
  // Then navigate to the proto folder relative to this package
  const protoPath = path.resolve(__dirname, '..', 'proto', name, `${name}.proto`);
  return protoPath;
}
