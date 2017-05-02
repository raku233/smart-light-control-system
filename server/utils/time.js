const formatTimeStr = timeStr => {
    const str = `0${timeStr}`;
    return str.slice(-2);
};

const getTimeStr = time => {
    const hour = formatTimeStr(time.getHours()),
        minute = formatTimeStr(time.getMinutes()),
        second = formatTimeStr(time.getSeconds()),
        year = time.getFullYear(),
        month = time.getMonth(),
        day = time.getDate();

    return `${year}/${month + 1}/${day} ${hour}:${minute}:${second}`;
};

module.exports = getTimeStr;