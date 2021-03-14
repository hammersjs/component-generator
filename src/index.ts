import { IApi } from 'umi';
import createPageGenerator from './generator/create-charts';

export default (api: IApi) => {
  api.registerGenerator({
    key: 'charts',
    // @ts-ignore
    Generator: createPageGenerator({ api }),
  });
};
