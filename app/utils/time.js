export const getTimeString = time => {
    const hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds(),
        year = time.getFullYear(),
        month = time.getMonth(),
        day = time.getDate();

    return `${year}/${month + 1}/${day} ${hour}:${minute}:${second}`;
};

export const getDateString = time => {
    const year = time.getFullYear(),
        month = time.getMonth(),
        day = time.getDate();

    return `${year}-${month + 1}-${day}`;
};

