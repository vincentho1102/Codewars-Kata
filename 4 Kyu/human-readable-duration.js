const complete = prop => prop.split` `[0] > 1 ? prop + 's' : prop;

const convert = (y,d,h,m,s) => {
    const arr = [complete(y), complete(d), complete(h), complete(m), complete(s)]
    const newArr = arr.filter(e => e)
    return newArr.slice(0,-1).length > 0 ? newArr.slice(0,-1).join`, ` + ' and ' + newArr.slice(-1) : newArr.join``;
}

function formatDuration (seconds) {
    const y = (seconds / (3600 * 24 * 365) << 0) > 0 ? `${seconds / (3600 * 24 * 365) << 0} year` : '';
    const d = (seconds % (3600 * 24 * 365) / (3600 * 24) << 0) > 0 ? `${seconds % (3600 * 24 * 365) / (3600 * 24) << 0} day` : '';
    const h = (seconds % (3600 * 24) / 3600 << 0) > 0 ? `${seconds % (3600 * 24) / 3600 << 0} hour` : '';
    const m = (seconds % 3600 / 60 << 0) > 0 ? `${seconds % 3600 / 60 << 0} minute` : '';
    const s = (seconds % 60 << 0) > 0 ? `${seconds % 60 << 0} second` : '';
    return seconds > 0 ? convert(y,d,h,m,s) : 'now';
}


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");