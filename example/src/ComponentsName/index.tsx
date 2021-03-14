import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { ComponentsNameType } from './PropsType'
import './index.less';

const prefixCls = 'alita-componentsname'
const ComponentsName: FC<ComponentsNameType> = (props) => {
  const log = useTracker(ComponentsName.displayName, {});
  return <div className={prefixCls}></div>;
};

ComponentsName.displayName = 'ComponentsName';
export default withError(ComponentsName);
