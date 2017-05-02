import { notification } from 'antd';

export const showNotification = msg => {
    notification.info({
        message: '设置结果',
        description: msg,
    });
};
