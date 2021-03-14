import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CNameType } from './PropsType'
import './index.less';

const prefixCls = 'alita-cname';
const CName: FC<CNameType> = (props) => {
  const log = useTracker(CName.displayName, {});
  return <div className={prefixCls}></div>;
};

CName.displayName = 'CName';
export default withError(CName);
