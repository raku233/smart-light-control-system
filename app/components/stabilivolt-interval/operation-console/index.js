import React, { Component } from 'react';

import { Button } from 'antd';

import './index.css';

export default function OperationConsole() {
    return (
        <div className="c-si-oc-container">
            <div className="c-si-oc-btn-group">
                <Button className="c-si-oc-btn" type="default">刷新</Button>
                <Button className="c-si-oc-btn" type="danger">设置</Button>
            </div>
        </div>
    );
}