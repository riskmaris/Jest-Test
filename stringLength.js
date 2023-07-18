const stringLength = (string) => {
    if(string.length > 0 && string.length < 10){
        return string.length;
    }
    return 'string is beyond interval';
};

module.exports = stringLength;