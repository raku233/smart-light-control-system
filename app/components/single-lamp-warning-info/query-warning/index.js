import React, { Component } from 'react';
import { Select, Button } from 'antd';
import './index.css';

const { Option } = Select;

class QueryWarning extends Component {
    constructor(props) {
        super(props);

        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        this.props.loadTerminalMessage();
    }

    render() {
        return (
            <div style={{ marginBottom: '16px' }}>
                <Select defaultValue="全警报" style={{ width: '150px' }}>
                    <Option value="all_warning">全警报</Option>
                    <Option value="offline">掉线</Option>
                    <Option value="burglary">防盗</Option>
                    <Option value="over-temperature">过温</Option>
                    <Option value="abnormal-state">状态异常</Option>
                    <Option value="over-current">过流</Option>
                </Select>
                <Button type="primary" className="c-slwi-qw-button" onClick={this.loadData}>搜索</Button>
                <Button type="danger" className="c-slwi-qw-button">删除所选</Button>
            </div>
        );
    }
}

export default QueryWarning;