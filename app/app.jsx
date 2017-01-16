import React from 'react';
import { render } from 'react-dom';

import Map from './components/map/index.jsx';

const container = document.body.appendChild(
    document.createElement('div')
);

render(<Map />, container);