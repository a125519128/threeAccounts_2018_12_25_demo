let strUtil = {
  /**
   *判断字符串中是否有表情等特殊字符
   * @param string
   * @return boolen
   */
  isEmojiCharacter: function(substring) {
    for (var i = 0; i < substring.length; i++) {
      var hs = substring.charCodeAt(i);
      if (0xd800 <= hs && hs <= 0xdbff) {
        if (substring.length > 1) {
          var ls = substring.charCodeAt(i + 1);
          var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
          if (0x1d000 <= uc && uc <= 0x1f77f) {
            return true;
          }
        }
      } else if (substring.length > 1) {
        var ls = substring.charCodeAt(i + 1);
        if (ls == 0x20e3) {
          return true;
        }
      } else {
        if (0x2100 <= hs && hs <= 0x27ff) {
          return true;
        } else if (0x2B05 <= hs && hs <= 0x2b07) {
          return true;
        } else if (0x2934 <= hs && hs <= 0x2935) {
          return true;
        } else if (0x3297 <= hs && hs <= 0x3299) {
          return true;
        } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 ||
          hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b ||
          hs == 0x2b50) {
          return true;
        }
      }
    }
  },
  /**
   *过滤表情等特殊字符 
   *@param string
   */
  filteremoji: function(emojireg) {
    var ranges = [
      '\ud83c[\udf00-\udfff]',
      '\ud83d[\udc00-\ude4f]',
      '\ud83d[\ude80-\udeff]'
    ];
    emojireg = emojireg.replace(new RegExp(ranges.join('|'), 'g'), '');
    return emojireg;
  },
  /**
   * 将数值四舍五入(保留2位小数)后格式化成金额形式
   *
   * @param num 数值(Number或者String)
   * @return 金额格式的字符串,如'1,234,567.45'
   * @type String
   */
  formatCurrency: function(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
      num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
      cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      num = num.substring(0, num.length - (4 * i + 3)) + ',' +
      num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
  },
  /*
   * 判断字符串是否为空
   * @param str 传入的字符串
   * @returns {}
   */
  isEmpty: function(str) {
    if (str != null && str.trim().length > 0) {
      return false;
    } else {
      return true;
    }
  },
  isNotEmpty: function(str) {
    if (str != null && str.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  },
  /*
   * 判断两个字符串子否相同
   * @param str1
   * @param str2
   * @returns {Boolean}
   */
  isEquals: function(str1, str2) {
    if (str1 == str2) {
      return true;
    } else {
      return false;
    }
  },
  /*
   * 忽略大小写判断字符串是否相同
   * @param str1
   * @param str2
   * @returns {Boolean}
   */
  isEqualsIgnorecase: function(str1, str2) {
    if (str1.toUpperCase() == str2.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 判断是否是数字
   * @param value
   * @returns {Boolean}
   */
  isNum: function(value) {
    if (value != null && value.length > 0 && isNaN(value) == false) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 判断是否是中文
   * @param str
   * @returns {Boolean}
   */
  isChine: function(str) {
    var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
    if (reg.test(str)) {
      return false;
    }
    return true;
  },
  /** 是否是姓名 */
  isName: function(value) {
    var regx = /^[\u4e00-\u9fa5]{2,4}$/;
    return regx.test(value);
  },
  /**
   * 是否是数字或者字母
   */
  isNumOrAlphabet: function(value) {
    var Regx = /^[A-Za-z0-9]*$/;
    return Regx.test(value);
  },
  /** 是否是手机号码 */
  isPhoneNo: function(value) {
    var phoneNoRegx = /^1[34578]\d{9}$/;
    return phoneNoRegx.test(value);
  },
  /** 是否是身份证号 */
  isIdNo: function(value) {
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return regx.test(value);
  },
  /** 是否是银行卡号 */
  isBankCardNum: function(value) {
    var regx = /^\d{14,19}$/;
    return regx.test(value);
  },
  /**
   * 获取一个随机字符串
   * @param  {string} length 字符串长度
   * @return {[string]}       字符串
   */
  randomStr: function(length) {
    var res = "";
    for (var i = 0; i < length; i++) {
      var randomChar = this.getRandomCharacter();
      res += randomChar;
    }
    return res;
  },
  /**
   * 获取一个随机字符
   * @return {string} 随机字符
   */
  getRandomCharacter: function() {
    var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b",
      "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
      "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
      "X", "Y", "Z", "_"
    ];
    var length = characters.length;
    var randomNum = Math.ceil(Math.random() * (length - 1));
    return characters[randomNum];
  },
  /**
   * 银行卡脱敏
   */
  deBankCardNum: function(value) {
    if (value == '' || value == null || value == undefined || value.length == 0) {
      return "";
    }
    var length = value.length;
    var str1 = value.substring(0, 4);
    var str2 = value.substring(length - 4, length);
    var str3 = "";
    for (let i = 0; i < length - 8; i++) {
      str3 += "*"
    };
    return str1 + str3 + str2;
  },
  /**
   * 是否是长沙银行卡1
   * @param  {[type]}  String cardNumber    [description]
   * @return {Boolean}        [description]
   */
  isBCSCard: function(cardNumber) {
    if (cardNumber != "" && cardNumber.length > 6) {
      cardNumber = cardNumber.substring(0, 6);
      if (cardNumber == "622368" ||
        cardNumber == "621739" ||
        cardNumber == "940071" ||
        cardNumber == "621446" ||
        cardNumber == "622898" ||
        cardNumber == "622900" ||
        cardNumber == "409266" //visa
        ||
        cardNumber == "409257" ||
        cardNumber == "622806" ||
        cardNumber == "628283" ||
        cardNumber == "628282" ||
        cardNumber == "628281" ||
        cardNumber == "430100" //好老的卡
        ||
        cardNumber == "430101" //好老的卡
        ||
        cardNumber == "625901") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  /**
   * 是否是长沙银行卡2
   * @param  {[type]}  String cardNumber    [description]
   * @return {Boolean}        [description]
   */
  isBCSXXCard: function(cardNumber) {
    if (cardNumber != "" && cardNumber.length > 12) {
      var cardNumber1 = cardNumber.substring(0, 11);
      var cardNumber2 = cardNumber.substring(0, 12);
      if (cardNumber1 == "62236874308" //磁条
        ||
        cardNumber2 == "621446288201" //IC
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isBCSQYCard: function(cardNumber) {
    if (cardNumber != "" && cardNumber.length > 12) {
      var cardNumber1 = cardNumber.substring(0, 11);
      var cardNumber2 = cardNumber.substring(0, 12);
      if (cardNumber1 == "62236874608" //磁条
        ||
        cardNumber2 == "621446288301" //IC
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isBCSYZCard: function(cardNumber) {
    if (cardNumber != "" && cardNumber.length > 12) {
      var cardNumber1 = cardNumber.substring(0, 11);
      var cardNumber2 = cardNumber.substring(0, 12);
      if (cardNumber1 == "62236873508" //磁条
        ||
        cardNumber2 == "621446288101" //IC
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isBCSCreditCard: function(cardNumber) {
    if (cardNumber != "" && cardNumber.length > 6) {
      cardNumber = cardNumber.substring(0, 6);
      if (cardNumber == "622898" ||
        cardNumber == "622900" ||
        cardNumber == "622806" ||
        cardNumber == "628283" ||
        cardNumber == "628282" ||
        cardNumber == "628281" ||
        cardNumber == "409266" //visa
        ||
        cardNumber == "409257" ||
        cardNumber == "625901") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isBCSStoreCard: function(cardNumber) {
    if (cardNumber != "" && cardNumber.length > 6) {
      cardNumber = cardNumber.substring(0, 6);
      if (cardNumber == "622368" ||
        cardNumber == "621739" ||
        cardNumber == "940071" ||
        cardNumber == "621446" ||
        cardNumber == "430100" //好老的卡
        ||
        cardNumber == "430101" //好老的卡
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  /**
   * 银行卡 按4位 一间隔
   */
  bankCardFour: function(value) {
    if (value == '' || value == null || value == undefined || value.length == 0) {
      return "";
    }
    return value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
  }
};
export default strUtil