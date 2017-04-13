const getTimeString = time => {
    const hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds(),
        year = time.getFullYear(),
        month = time.getMonth(),
        day = time.getDay();

    return `${year}/${month + 1}/${day} ${hour}:${minute}:${second}`;
};

module.exports = getTimeString;