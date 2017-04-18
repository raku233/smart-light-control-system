import React, { Component } from 'react';
import { Button } from 'antd';
import { Map, Markers } from 'react-amap';

export default class LampMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.deviceList.loading,
            markers: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.renderMarkers();
    }

    renderMarkers() {
        if (this.props.deviceList.loading) {
            return null;
        }

        if (JSON.stringify(this.props.deviceList.deviceList) === '{}') {
            return null;
        }

        const { deviceList } = this.props.deviceList;

        let test = [];
        for (const value in deviceList) {
            test = test.concat(deviceList[value]);
        }

        const positionArray = test.filter((value) => {
            return ('location' in value);
        });

        const center = {
            longitude: parseFloat(positionArray[0].location.split(',')[0], 10),
            latitude: parseFloat(positionArray[0].location.split(',')[1], 10)
        };

        const renderMarkersArray = Array(positionArray.length).fill(true).map((e, idx) => ({
            position: {
                longitude: parseFloat(positionArray[idx].location.split(',')[0], 10),
                latitude: parseFloat(positionArray[idx].location.split(',')[1], 10)
            }
        }));

        this.setState({
            markers: renderMarkersArray,
            center
        });
    }

    render() {
        const AMAP_KEY = 'a8501da295b13fe4f4d1ebf51da6bf3c';
        const plugins = ['Scale', 'OverView', 'ToolBar'];
        console.log(this.state.markers);
        return (
            <Map
              amapkey={AMAP_KEY}
              plugins={plugins}
              center={this.state.center}
              zoom={13}
            >
                <Markers markers={this.state.markers} />
            </Map>
        );
    }
}