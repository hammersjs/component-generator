import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface {{{ componentName }}}Props {}


const prefixCls = 'alita-{{{ prefixCls }}}';
const {{{ componentName }}}: FC<{{{ componentName }}}Props> = (props) => {
  return <div className={prefixCls}></div>;
};

{{{ componentName }}}.displayName = '{{{ componentName }}}';
export default withError({{{ componentName }}});
