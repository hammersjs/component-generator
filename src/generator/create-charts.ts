import { join, basename } from 'path';
import { IApi } from '@umijs/types';
import assert from 'assert';
import chalk from 'chalk';
import { Generator, randomColor, lodash } from '@umijs/utils';
import { existsSync } from 'fs';

const chartsFiles = [
  {
    template: 'demo.tsx.tpl',
    targetPath: 'demos/demo.tsx'
  },
  {
    template: 'index.less.tpl',
    targetPath: 'index.less'
  },
  {
    template: 'index.md.tpl',
    targetPath: 'index.md'
  },
  {
    template: 'index.tsx.tpl',
    targetPath: 'index.tsx'
  },
  {
    template: 'PropsType.ts.tpl',
    targetPath: 'PropsType.ts'
  },
]

const chartsSubFiles = [
  {
    template: 'index.tsx.tpl',
    targetPath: 'index.tsx'
  },
  {
    template: 'index.less.tpl',
    targetPath: 'index.less'
  }
]


export default function ({ api }: { api: IApi }) {
  const { userConfig } = api;
  return class PageGenerator extends Generator {
    constructor(opts: any) {
      super(opts);
      assert(typeof this.args._[0] === 'string', `仅支持umi g charts [name]`);
    }

    createComponent() {
      const [path] = this.args._ as string[];
      const fileName = basename(path);
      const componentName = lodash.upperFirst(fileName);

      const componentsDir = join(`${api.paths.absSrcPath!}`, componentName);
      if (existsSync(componentsDir)) {
        assert(false, '组件已存在，请勿重复创建。请修改组件名称，以免覆盖原组件');
      }

      const prefixCls = fileName.toLowerCase();
      const context = {
        componentName,
        prefixCls,
      }

      const prefixFilePath = 'template/charts/index';
      chartsFiles.forEach(item => {
        this.copyTpl({
          templatePath: join(__dirname, prefixFilePath, item.template),
          target: join(`${api.paths.absSrcPath!}`, `${componentName}`, item.targetPath),
          context,
        });
      })
    }

    createSubComponent() {
      const [path, subPath] = this.args._ as string[];
      const fileName = basename(path);
      const componentName = lodash.upperFirst(fileName);
      const componentsDir = join(`${api.paths.absSrcPath!}`, componentName);
      if (!existsSync(componentsDir)) {
        this.createComponent();
      }

      const subFileName = basename(subPath);
      const subComponentName = lodash.upperFirst(subFileName);
      const subComponentsDir = join(`${api.paths.absSrcPath!}`, componentName, `components/${subComponentName}`);
      if (existsSync(subComponentsDir)) {
        assert(false, `${componentName}:${subComponentName}组件已存在，请勿重复创建。请修改组件名称，以免覆盖原组件`);
      }
      const prefixCls = subComponentName.toLowerCase();
      const context = {
        componentName,
        prefixCls,
      }

      const prefixFilePath = 'template/charts/sub';
      chartsSubFiles.forEach(item => {
        this.copyTpl({
          templatePath: join(__dirname, prefixFilePath, item.template),
          target: join(`${api.paths.absSrcPath!}`, `${componentName}/`, `components/${subComponentName}`, item.targetPath),
          context,
        });
      })

    }

    async writing() {
      const { length } = this.args._;
      if (length === 1) {
        this.createComponent();
      } else if (length === 2) {
        this.createSubComponent();
      }
    }
  }
}
