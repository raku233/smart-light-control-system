import React, { Component } from 'react';
import { message } from 'antd';
import { Map, Markers, InfoWindow } from 'react-amap';
import './index.css';

export default class LampMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.deviceList.loading,
            markers: null,
            center: null,
            windowVisible: false,
            windowContent: ''
        };

        this.renderMarkers = this.renderMarkers.bind(this);
        this.markersEvents = {
            click: (mapOption, marker) => {
                this.setState({
                    center: {
                        latitude: mapOption.lnglat.lat,
                        longitude: mapOption.lnglat.lng
                    },
                    windowVisible: true,
                    windowContent: marker.si.extData.myLabel
                });
            }
        };
        this.windowEvents = {
            close: () => {
                this.setState({
                    windowVisible: false
                });
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        const { selectedDevice, deviceList } = nextProps;

        this.renderMarkers(deviceList);
        this.locateToMarker(selectedDevice);
    }

    locateToMarker(selectedDevice) {
        if ('location' in selectedDevice) {
            const position = {
                longitude: parseFloat(selectedDevice.location.split(',')[0], 10),
                latitude: parseFloat(selectedDevice.location.split(',')[1], 10)
            };

            this.setState({
                center: position,
                windowVisible: true,
                windowContent: selectedDevice.name
            });
        } else if (JSON.stringify(selectedDevice) !== '{}') {
            message.error('所选设备不存在地理位置');
        }
    }

    renderMarkers(deviceList) {
        let composeDeviceList = [];

        if (deviceList.loading) {
            return null;
        }

        if (JSON.stringify(deviceList) === '{}') {
            return null;
        }

        for (const value in deviceList) {
            composeDeviceList = composeDeviceList.concat(deviceList[value]);
        }

        const hasPositionDeviceList = composeDeviceList.filter((value) => {
            return ('location' in value);
        });

        const renderMarkersArray = Array(hasPositionDeviceList.length).fill(true).map((e, idx) => ({
            position: {
                longitude: parseFloat(hasPositionDeviceList[idx].location.split(',')[0], 10),
                latitude: parseFloat(hasPositionDeviceList[idx].location.split(',')[1], 10)
            },
            myLabel: hasPositionDeviceList[idx].name,
            myIndex: idx
        }));

        this.setState({
            markers: renderMarkersArray
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
              zoom={15}
            >
                <Markers
                  markers={this.state.markers}
                  events={this.markersEvents}
                />
                <InfoWindow
                  position={this.state.center}
                  visible={this.state.windowVisible}
                  content={this.state.windowContent}
                  size={{ width: 100, height: 70 }}
                  offset={[0, -20]}
                  events={this.windowEvents}
                  closeWhenClickMap
                />
            </Map>
        );
    }
}