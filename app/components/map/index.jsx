import React from 'react';

import lazyLoadMapApi from '../../utils/lazyLoadMapApi.js';

import './index.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const loadConfig = {
            key: 'ef0c1ca363c38244282dc40464767268'
        };
        lazyLoadMapApi(loadConfig)
            .then(() => {
                const map = new AMap.Map('map-frame', {
                    zoom: 10,
                    center: [116.39,39.9]
                });
            });
    }
    render() {
        return(
            <div className="el-react-map-container">
                <div className="el-react-map" id="map-frame"></div>
            </div>
        );
    }
}