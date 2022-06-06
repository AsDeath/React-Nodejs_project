capitalize = (str) => {
 return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

const methods = {
    capitalize
}

module.exports = methods;