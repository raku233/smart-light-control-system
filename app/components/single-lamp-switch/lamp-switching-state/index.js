import React, { Component } from 'react';
import { Button, Slider, Card, Row, Col, Checkbox, Select, message } from 'antd';

import './index.css';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;

export default class LampSwitchingState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            lux1State: 0,
            lux2State: 0,
            lux1Disabled: true,
            lux2Disabled: true,
            groupSelect: '全部',
            onOffSelect: '开灯',
            lampCheckboxState: '0000',
            broadcastLux : 0,
            luxGroup: 255,
        };
    }

    componentWillReceiveProps(nextProps) {
    }

    onLamp1CheckboxChange(e) {
        this.setState({
            lux1Disabled: !e.target.checked
        });
    }

    onLamp2CheckboxChange(e) {
        this.setState({
            lux2Disabled: !e.target.checked
        });
    }

    onLux1Change(value) {
        this.setState({
            lux1State: value
        })
    }

    onLux2Change(value) {
        this.setState({
            lux2State: value
        })
    }

    onGroupSelect(value,option) {
        this.setState({
            groupSelect: value
        })
    }

    onOnOffSelect(value,option) {
        this.setState({
            onOffSelect: value
        })
    }

    onBroadcastCheckboxChange(e) {
        this.setState({
            disabled: !e.target.checked
        });
    }

    onBroadcastLuxChange(value) {
        this.setState({
            broadcastLux: value
        })
    }

    onLuxGroupSelectChange(value,option) {
        this.setState({
            luxGroup: value
        })
    }

    

    onLampCheckboxGroupChange(checkedValues) {
        let tmpCheckboxState = [0,0,0,0];
        for (const key of checkedValues) {
            tmpCheckboxState[key] = 1;
        }
        this.state.lampCheckboxState = tmpCheckboxState.join('');
    }

    handleLuxSetting(e) {
        const luxState = [0, 0];
        luxState[0] = this.state.lux1Disabled ? 255 : this.state.lux1State;
        luxState[1] = this.state.lux2Disabled ? 255 : this.state.lux2State;
        this.props.uploadLux(luxState);
    }

    handleEasySetting(e) {
        const { groupSelect, onOffSelect, lampCheckboxState, luxGroup, broadcastLux, disabled } = this.state;
        const cmdType = groupSelect + onOffSelect;
        const chkFlagStr =  disabled ? '0000' : `${lampCheckboxState},${broadcastLux},${broadcastLux},${luxGroup},${luxGroup}`;
        console.log(chkFlagStr);
        this.props.uploadEasySet(cmdType, chkFlagStr);
    }

    handleRestoreTimeControl(e) {
        const { groupSelect, onOffSelect, lampCheckboxState, luxGroup, broadcastLux, disabled } = this.state;
        const cmdType = "恢复时控"
        const chkFlagStr =  disabled ? '0000' : `${lampCheckboxState},${broadcastLux},${broadcastLux},${luxGroup},${luxGroup}`;

        this.props.uploadEasySet(cmdType, chkFlagStr);
    }

    render() {
        const children = [];
        children.push(<Option key={255}>{255}</Option>);
        for (let i = 0; i < 17; i++) {
            children.push(
                <Option key={i}>{i}</Option>
            );
        }
        // 滑动输入条刻度
        const masks = {
            0: '0',
            25: '25',
            50: '50',
            75: '75',
            100: '100'
        };

        const lampOptions = [
            { label: '灯1', value: '0' },
            { label: '灯2', value: '1' }
        ]

        return (
            <div className="c-cls-container">
                <Row className="c-cls-row">
                    <Col span="12">
                        <Card title="手动设置亮度" bodyStyle={{ padding: 10 }}>
                            <Checkbox onChange={this.onLamp1CheckboxChange.bind(this)}>灯1</Checkbox>
                            <Slider defaultValue={0} marks={masks} disabled={this.state.lux1Disabled} onAfterChange={this.onLux1Change.bind(this)}/>
                            <Checkbox onChange={this.onLamp2CheckboxChange.bind(this)}>灯2</Checkbox>
                            <Slider defaultValue={0} marks={masks} disabled={this.state.lux2Disabled} onAfterChange={this.onLux2Change.bind(this)}/>
                            <Button type="danger" className="c-cls-button" onClick={this.handleLuxSetting.bind(this)}>设置</Button>
                        </Card>
                    </Col>
                    <Col span="12">
                        <Card title="快速响应广播和强制控制" bodyStyle={{ padding: 10 }}>
                            <div style={{ display: 'flex' }}>
                                <Select className="c-cls-select" defaultValue={this.state.groupSelect} onSelect={this.onGroupSelect.bind(this)}>
                                    <Option key="全部">全部</Option>
                                    <Option key="奇数杆">奇数杆</Option>
                                    <Option key="偶数杆">偶数杆</Option>
                                    <Option key="组号">组号</Option>
                                </Select>
                                <Select className="c-cls-select" defaultValue={this.state.onOffSelect} onSelect={this.onOnOffSelect.bind(this)}>
                                    <Option key="开灯">开灯</Option>
                                    <Option key="关灯">关灯</Option>
                                </Select>
                            </div>
                            <div>
                                <Checkbox style={{ margin: '8px 4px' }} onChange={this.onBroadcastCheckboxChange.bind(this)}>拓展广播</Checkbox>
                                <div style={{ display: 'flex' }}>
                                    <span className="c-cls-span">亮度</span>
                                    <Slider marks={masks} style={{ flex: 1 }} disabled={this.state.disabled} onAfterChange={this.onBroadcastLuxChange.bind(this)}></Slider>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <span className="c-cls-span">分组号</span>
                                    <Select className="c-cls-select" disabled={this.state.disabled} onSelect={this.onLuxGroupSelectChange.bind(this)}>
                                        {children}
                                    </Select>
                                    <CheckboxGroup options={lampOptions} onChange={this.onLampCheckboxGroupChange.bind(this)} disabled={this.state.disabled}/>
                                </div>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <Button type="danger" className="c-cls-button2" onClick={this.handleEasySetting.bind(this)}>设置</Button>
                                    <Button type="primary" className="c-cls-button2" onClick={this.handleRestoreTimeControl.bind(this)}>恢复时控</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        );
    }
}