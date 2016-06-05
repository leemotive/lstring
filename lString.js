;(function (global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        global.lString = factory();
    }
})(typeof window !== 'undefined' ? window : this, function () {
    function isStartWith (str, start, ignoreCase) {
        if (str.length < start.length) {
            return false;
        }
        if (ignoreCase) {
            str = str.toLowerCase();
            start = start.toLowerCase();
        }
        return str.indexOf(start) === 0;
    }

    function isEndWith (str, end, ignoreCase) {
        if (str.length < end.length) {
            return false;
        }
        if (ignoreCase) {
            str = str.toLowerCase();
            end = end.toLowerCase();
        }
        return str.lastIndexOf(end) === str.length - end.length;
    }

    function reverse (str) {
        return str.split('').reverse().join('');
    }

    function camelize (str) {
        return str.replace(/-(\w)/g, function (match, sub) {
            return sub.toUpperCase();
        });
    }

    function hyphen (str) {
        return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    }

    function trimQuotes (str) {
        return str.replace(/^(['"])(.*)\1$/g, '$2');
    }

    function contains (str, subStr) {
        return str.indexOf(subStr) !== -1;
    }

    function isEmpty (str) {
        return str == null || str === '';
    }

    function isNotEmpty (str) {
        return !isEmpty(str);
    }

    function messageFormat (str, obj) {
        return str.replace(/\{(\w+)\}/g, function (match, key) {
            return obj[key] || match;
        });
    }

    function strip (str) {
        return str.replace(/^\s|\s$/g, '');
    }

    function stripContinuousDuplicateChar (str) {
        return str.replace(/(.)\1+/g, '$1');
    }

    function stripDuplicateChar (str) {
        var map = {}, arr = [], char;
        for (var index = 0, length = str.length; index < length; index++) {
            char = str[index];
            if (!map[char]) {
                map[char] = 1;
                arr.push(char);
            }
        }
        return arr.join('');
    }
    return {
        isStartWith: isStartWith,
        isEndWith: isEndWith,
        reverse: reverse,
        camelize: camelize,
        hyphen: hyphen,
        trimQuotes: trimQuotes,
        contains: contains,
        isEmpty: isEmpty,
        isNotEmpty: isNotEmpty,
        messageFormat: messageFormat,
        strip: strip,
        stripContinuousDuplicateChar: stripContinuousDuplicateChar,
        stripDuplicateChar: stripDuplicateChar
    }
}); 