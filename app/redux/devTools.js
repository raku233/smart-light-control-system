import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='shift-h'
                 changePositionKey='shift-q'>
        <LogMonitor theme='tomorow' />
    </DockMonitor>
);

export default DevTools;