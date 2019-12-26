// 时间转换
export function Dateformat (date, format) {
    try {
      var _date = date;
      date = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S+": date.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
      }
      return format;
    } catch (error) {
      return null;
    }
}

// 将中国标准时间格式化为（yyyy-MM-dd hh:mm:ss）
export function formatGtmToDateTime (theDate, istimer) {
    var _hour = theDate.getHours();
    var _minute = theDate.getMinutes();
    var _second = theDate.getSeconds();
    var _year = theDate.getFullYear();
    var _month = theDate.getMonth();
    var _date = theDate.getDate();
    if (_hour < 10) {
      _hour = "0" + _hour;
    }
    if (_minute < 10) {
      _minute = "0" + _minute;
    }
    if (_second < 10) {
      _second = "0" + _second;
    }
    _month = _month + 1;
    if (_month < 10) {
      _month = "0" + _month;
    }
    if (_date < 10) {
      _date = "0" + _date;
    }
    if (istimer) {
      return _hour + ":" + _minute + ":" + _second;
    } else {
      return _year + "-" + _month + "-" + _date + " " + _hour + ":" + _minute + ":" + _second;
    }
}

 // 把字符串日期转为日期
export function getDate (datetimeStr) {
    var mydateint = Date.parse(datetimeStr.replace(/-/g, "/")); // 数值格式的时间
    if (!isNaN(mydateint)) {
      var mydate = new Date(mydateint);
      return mydate;
    }
    mydate = new Date(datetimeStr); // 字符串格式时间
    var monthstr = mydate.getMonth() + 1;
    if (!isNaN(monthstr)) { // 转化成功
      return mydate;
    } // 字符串格式时间转化失败
    var dateParts = datetimeStr.split(" ");
    var dateToday = new Date();
    var year = dateToday.getFullYear();
    var month = dateToday.getMonth();
    var day = dateToday.getDate();
    if (dateParts.length >= 1) {
      var dataPart = dateParts[0].split("-"); // yyyy-mm-dd  格式时间
      if (dataPart.length === 1) {
        dataPart = dateParts[0].split("/"); // yyyy/mm/dd格式时间
      }
      if (dataPart.length === 3) {
        year = Math.floor(dataPart[0]);
        month = Math.floor(dataPart[1]) - 1;
        day = Math.floor(dataPart[2]);
      }
    }
    if (dateParts.length === 2) { // hh:mm:ss格式时间
      var timePart = dateParts[1].split(":"); // hh:mm:ss格式时间
      if (timePart.length === 3) {
        var hour = Math.floor(timePart[0]);
        var minute = Math.floor(timePart[1]);
        var second = Math.floor(timePart[2]);
        return new Date(year, month, day, hour, minute, second);
      }
    } else {
      return new Date(year, month, day);
    }
}

// 判断时间大小
export function compareDate (dateBegin, dateEnd) {
    var newDateBegin = dateBegin.replace(/-/g, "/");
    var newDateEnd = dateEnd.replace(/-/g, "/");
    if (Date.parse(newDateBegin) === Date.parse(newDateEnd)) {
        return 0;
    }

    if (Date.parse(newDateBegin) < Date.parse(newDateEnd)) {
        return 1;
    }

    if (Date.parse(newDateBegin) > Date.parse(newDateEnd)) {
        return -1;
    }
}

export function timeBeginTime () {
    var date = new Date();
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1);
    M = M.length <= 1 ? "0" + M : M;
    var D = date.getDate();
    D = D < 10 ? "0" + D : D;
    return Y + "-" + M + "-" + D + " " + "00:00:00";
}
export function timeEndTime () {
    var date = new Date();
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1);
    M = M.length <= 1 ? "0" + M : M;
    var D = date.getDate();
    D = D < 10 ? "0" + D : D;
    return Y + "-" + M + "-" + D + " " + "23:59:59";
}
  // 时间戳转换为yy-mm-dd
  export function formatDateTime (timeStamp) {
    var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ("0" + m) : m;
    var d = date.getDate();
    d = d < 10 ? ("0" + d) : d;
    var h = date.getHours();
    h = h < 10 ? ("0" + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ("0" + minute) : minute;
    second = second < 10 ? ("0" + second) : second;
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  }
  // 获取当前时间 年月日时分秒
  export function getNowFormatDate () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
      " " + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + seperator2 + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
      seperator2 + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
    return currentdate;
  }
  // 获取当前时间 年月日
export function getNowDate () {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
