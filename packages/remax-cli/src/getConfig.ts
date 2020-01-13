import fs from 'fs';
import path from 'path';
import esm from 'esm';
import defaultOptions from './defaultOptions';
import { RemaxNodePlugin } from './API';
import { PluginImpl, RollupOptions } from 'rollup';
import validateOptions from 'schema-utils';
import schema from './RemaxOptionsSchema.json';

export interface RemaxOptions {
  cssModules: boolean | RegExp;
  pxToRpx: boolean;
  cwd: string;
  progress: boolean;
  output: string;
  rootDir: string;
  compressTemplate?: boolean;
  UNSAFE_wechatTemplateDepth: number | { [key: string]: number };
  alias?: {
    [key: string]: string;
  };
  postcss?: {
    options?: {
      [key: string]: any;
    };
    url?: {
      inline?: boolean;
      maxSize?: number;
      filter?: boolean;
      useHash?: boolean;
      hashOptions?: 'method' | 'shrink' | 'append';
    };
    plugins?: PluginImpl[];
  };
  rollupOptions?: RollupOptions | ((options: RollupOptions) => RollupOptions);
  plugins: RemaxNodePlugin[];
}

export type RemaxConfig = Partial<RemaxOptions>;

export interface CliOptions {
  target: string;
}

function readJavascriptConfig(path: string) {
  // eslint-disable-next-line
  require = esm(module, {
    cjs: {
      dedefault: true,
    },
  });
  delete require.cache[require.resolve(path)];
  const config = require(path);

  return config || {};
}

export default function getConfig(validate = true): RemaxOptions {
  const configPath: string = path.join(process.cwd(), './remax.config');
  let options = {};

  if (fs.existsSync(configPath + '.js')) {
    options = readJavascriptConfig(configPath + '.js');
  }

  if (validate) {
    validateOptions(schema as any, options, {
      name: 'remax',
    });
  }

  return {
    ...defaultOptions,
    ...options,
  };
}
