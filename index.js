// Unixify pathname, return pathname with sep "/" instead of sep "\\"
module.exports = exports = function unixifypath(pathname) {
    if(pathname){
        return String(pathname).replace(/\\/g, '/')
    }
}
