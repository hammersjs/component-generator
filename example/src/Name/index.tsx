import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { NameType } from './PropsType'
import './index.less';

const prefixCls = 'alita-name'
const Name: FC<NameType> = (props) => {
  const log = useTracker(Name.displayName, {});
  return <div className={prefixCls}></div>;
};

Name.displayName = 'Name';
export default withError(Name);
