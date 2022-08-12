const MS_TIME = 1000;

export const getRedirectTime = (time: number): Function => {
    let result = time;

    return function () {
        result -= MS_TIME;

        return result;
    };
};
