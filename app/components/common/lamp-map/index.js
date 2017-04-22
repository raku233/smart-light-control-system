import React, { Component } from 'react';
import { message } from 'antd';
import { Map, Markers } from 'react-amap';

export default class LampMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.deviceList.loading,
            markers: null
        };

        this.renderMarkers = this.renderMarkers.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { selectedDevice } = nextProps;
        this.renderMarkers(nextProps);
        if ('location' in selectedDevice) {
            const position = {
                longitude: parseFloat(selectedDevice.location.split(',')[0], 10),
                latitude: parseFloat(selectedDevice.location.split(',')[1], 10)
            };
            this.locateToMarker(position);
        } else {
            message.error('所选设备不存在地理位置');
        }
    }

    locateToMarker(position) {
        this.setState({
            center: position
        });
    }

    renderMarkers(nextProps) {
        const { deviceList } = nextProps;

        if (deviceList.loading) {
            return null;
        }

        if (JSON.stringify(deviceList.deviceList) === '{}') {
            return null;
        }

        const deviceListObject = deviceList.deviceList;
        let test = [];

        for (const value in deviceListObject) {
            test = test.concat(deviceListObject[value]);
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