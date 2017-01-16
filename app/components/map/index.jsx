import React from 'react';

import lazyLoadMapApi from '../../utils/lazyLoadMapApi.js';

import './index.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _map: null
        };
    }
    addMask(position) {
        const map = this.state._map;
        const marker = new AMap.Marker({
            // icon: require('../../assets/images/map/mark_b.png'),
            position: position
        });
        marker.setMap(map);
    }
    addPlugin(plugins) {
        const map = this.state._map;
        const plugins_name = plugins.map(name => `AMap.${name}`);
        AMap.plugin(plugins_name, () => {
            for (const plugin of plugins) {
                map.addControl(new AMap[plugin]());
            }
        });
    }
    componentDidMount() {
        const loadConfig = {
            key: 'ef0c1ca363c38244282dc40464767268',
            plugin: ['Scale', 'ToolBar']
        };
        lazyLoadMapApi(loadConfig)
            .then(() => {
                const map = this.state._map = new AMap.Map('map-frame', {
                    zoom: 10,
                    center: [116.39, 39.9]
                });
                this.addPlugin(loadConfig.plugin);
                this.addMask([116.39, 39.9]);
            });
    }
    render() {
        return (
            <div className="el-react-map-container">
                <div className="el-react-map" id="map-frame"></div>
            </div>
        );
    }
}