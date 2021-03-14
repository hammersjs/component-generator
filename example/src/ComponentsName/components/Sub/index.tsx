import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface ComponentsNameProps {}

const prefixCls = 'alita-componentsname';
const ComponentsName: FC<ComponentsNameProps> = props => {
  return <div className={prefixCls}></div>;
};

ComponentsName.displayName = 'ComponentsName';
export default withError(ComponentsName);
