import React from 'react';
import { render } from 'react-dom';

import { DatePicker } from 'antd';

import 'antd/dist/antd.css';

const container = document.body.appendChild(
    document.createElement('div')
);

render(<DatePicker />, container);