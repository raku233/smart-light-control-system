import React, { Component } from 'react';
import { Map } from 'react-amap';

export default class LampMap extends Component {
    render() {
        const AMAP_KEY = 'a8501da295b13fe4f4d1ebf51da6bf3c';
        const plugins = ['Scale', 'OverView', 'ToolBar'];

        return (
            <Map amapkey={AMAP_KEY} plugins={plugins} />
        );
    }
}