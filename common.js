var _ = require("./index");
module.exports = {
    //获取url上的参数
    getUrlSearch: function(param) {
        var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        } else {
            return undefined;
        }
    },
    //数组去重
    uniqArray: function(arr) {
        var newArr = [];
        var objArr = {};

        for (var i = 0; i < arr.length; i++) {
            var tempVal = arr[i];
            if (objArr[tempVal] !== 1) {
                newArr.push(tempVal);
                objArr[tempVal] = 1;
            }
        }
        return newArr;
    },
    //对象是否为空
    isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    },

}