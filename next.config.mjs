// next.config.mjs
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // transform config if needed
    }

    return config;
  }
};
