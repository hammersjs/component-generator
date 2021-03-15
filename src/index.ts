import { IApi } from 'umi';
import PageGenerator from './generator/create-charts';

export default (api: IApi) => {
  api.registerGenerator({
    key: 'charts',
    // @ts-ignore
    Generator: PageGenerator({ api }),
  });
};
