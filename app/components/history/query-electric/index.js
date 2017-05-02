import React, { Component } from 'react';
import { Select, Checkbox, Button, message } from 'antd';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;

class QueryElectric extends Component {
    constructor(props) {
        super(props);

        this.state = {
            children: [],
            electricOption: {
                selectRod: '',
                currentLargeThanZero: false,
                currentEqualToZero: false,
                voltageLargeThanZero: false,
                voltageEqualToZero: false
            }
        };

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onRodSelect = this.onRodSelect.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { statusGroup } = nextProps;
        if (statusGroup.length > 0) {
            this.renderSelectOptions(statusGroup);
        }
    }

    onCheckboxChange(checkedValues) {
        for (const key in this.state.electricOption) {
            if (key !== 'selectRod') {
                this.state.electricOption[key] = false;
            }
        }
        for (const value of checkedValues) {
            this.state.electricOption[value] = true;
        }
        console.log(this.state.electricOption);
    }

    onRodSelect(value) {
        this.state.electricOption.selectRod = value;
    }
    
    handleSearchClick(e) {
        const { devID, rangeDate } = this.props;
        const { electricOption } = this.state;
        if (!devID) {
            message.error('请选择一个终端设备');
            return;
        }
        if (rangeDate.length !== 2) {
            message.error('请选择一个时间段');
            return;
        }
        if (!electricOption.selectRod) {
            message.error('请选择一个灯杆');
            return;
        }
        this.props.loadSingleParamStatus(devID, rangeDate, electricOption);
    }

    renderSelectOptions(statusGroup) {
        const children = [];
        for (const status of statusGroup) {
            children.push(<Option key={status.key}>{status.rodNum}</Option>);
        }
        this.setState({
            children
        });
    }

    render() {
        const options = [
            { label: '电流大于零', value: 'currentLargeThanZero' },
            { label: '电流为零', value: 'currentEqualToZero' },
            { label: '电压大于零', value: 'voltageLargeThanZero' },
            { label: '电压为零', value: 'voltageEqualToZero' }
        ];
        return (
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <span>灯杆编号：</span>
                <Select
                  style={{ width: 100, marginRight: 16 }}
                  size="small"
                  onSelect={this.onRodSelect}
                >
                    {this.state.children}
                </Select>
                <CheckboxGroup options={options} onChange={this.onCheckboxChange} />
                <Button className="c-h-qh-button" size="small" style={{ width: 50 }} onClick={this.handleSearchClick}>查询</Button>
            </div>
        );
    }
}

export default QueryElectric;