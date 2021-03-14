import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface CNameProps {}


const prefixCls = 'alita-c';
const CName: FC<CNameProps> = (props) => {
  return <div className={prefixCls}></div>;
};

CName.displayName = 'CName';
export default withError(CName);
