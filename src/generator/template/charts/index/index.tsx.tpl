import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { {{{ componentName }}}Type } from './PropsType'
import './index.less';

const prefixCls = 'alita-{{{ prefixCls }}}';
const {{{ componentName }}}: FC<{{{ componentName }}}Type> = (props) => {
  const log = useTracker({{{ componentName }}}.displayName, {});
  return <div className={prefixCls}></div>;
};

{{{ componentName }}}.displayName = '{{{ componentName }}}';
export default withError({{{ componentName }}});
