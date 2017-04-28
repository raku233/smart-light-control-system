import React, { Component } from 'react';
import { message } from 'antd';
import { Map, Markers } from 'react-amap';
import './index.css';

export default class LampMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.loading,
            markers: [],
            center: null,
            windowVisible: false,
            windowContent: '',
        };

        this.markersEvents = {
            click: (mapOption, marker) => {
                this.props.loadElectricParameter(this.props.devID);
                this.setState({
                    center: {
                        latitude: mapOption.lnglat.lat,
                        longitude: mapOption.lnglat.lng
                    }
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
        this.locateToMarker(nextProps);
    }

    locateToMarker(nextProps) {
        const { devLocation, rodLocations, devID } = nextProps;
        if (devLocation.length !== 0) {
            const center = {
                longitude: parseFloat(devLocation.split(',')[0], 10),
                latitude: parseFloat(devLocation.split(',')[1], 10)
            };
            const markers = Array(rodLocations.length).fill(true).map((e, idx) => ({
                position: {
                    longitude: rodLocations[idx].devX,
                    latitude: rodLocations[idx].devY
                },
                label: {
                    content: rodLocations[idx].rodName,
                    offset: [0, -20]
                },
                index: idx, 
                type: 'rod'
            }));
            markers.push({
                position: center,
                label: {
                    content: devID,
                    offset: [0, -20]
                },
                index: markers.length,
                type: 'device'
            });
            this.setState({
                center,
                markers
            });
        } else {
            message.error('所选设备不存在地理位置');
        }
    }

    renderMarkerLatout(extData) {
        switch (extData.type) {
        case 'device': {
            return <img src={require('../../../assets/device.png')} width={30} alt="终端" />;
        }
        case 'rod': {
            return <img src={require('../../../assets/street_lamp.png')} width={30} alt="路灯" />;
        }
        default: {
            return false;
        }
        }
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
                  render={this.renderMarkerLatout}
                  useCluster={{ zoomOnClick: true }}
                />
            </Map>
        );
    }
}