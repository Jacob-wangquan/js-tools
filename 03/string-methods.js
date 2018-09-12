 /*
    1,contains: 判断一个字符串是否包含另一个字符串
    */
   function contains(target, it) {
    return target.indexOf(it) != -1;
  }

  function contains(target, str, separator) {
    return separator ?
           (separator + target + separator).indexOf(separator + str + separator) > -1 : target.indexOf(str) > -1;
  }

  /*
  2,startsWith： 判定目标字符串是否位于原字符串的开始之处
  */
  function startsWith(target, str, ingorecase) {
    var start_str = target.substr(0, str.length);
    return ingorecase ? start_str.toLowerCase() === str.toLowerCase() : start_str === str;
  }

  /*
  3,endsWith： 判定目标字符串是否位于原字符串的结束之处
  */
  function endsWith(target, str, ingorecase) {
    var end_str = target.substring(target.length - str.length);
    return ingorecase ? end_str.toLowerCase() === str.toLowerCase() : end_str === str;
  }

   /*
  4,repeat: 将一个字符串重复自身n次
  */
  function repeat(target, n) {
    //创建的对象带有length属性，是因为要调用数组的原型方法，需要指定call的第一个参数为类数组对象，类数组对象的必要条件是length属性为非负整数
    return Array.prototype.join.call({
      length: n+1
    }, target);
  }

   /*
  5,byteLen: 取得字符串所有字节的长度
  */
  function byteLen(target) {
    var byteLength = target.length, i = 0;
    for(; i<target.length; i++) {
      if(target.charCodeAt(i) > 255) {
        byteLength++;
      }
    }
    return byteLength;
  }

   /*
  6,truncate: 对字符串进行截断，超过限定长度时，默认添加三个点号或者其他
  */
  function truncate(target, length, truncation) {
    length = length || 30;
    truncation = truncation === void(0) ? '...' : truncation;
    return target.length > length ?
           target.slice(0, length - truncation.length) + truncation :
           String(target);
  }

   /*
  7,camelize: 将字符串转换成驼峰风格
  */
  function camelize(target) {
    if(target.indexOf('-') < 0 && target.indexOf('_') < 0) {
      return target;
    }
    return target.replace(/[-_][^-_]/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  }

   /*
  8,pad: 为字符串的某一端添加填充数
  */
  function pad(target, n) {
    var zero = new Array(n).join('0');
    var str = zero + target;
    var result = str.substr(-n);
    return result;
  }

  /*
  9,trim: 去掉字符串两端的空格
  */  
 function trim(str) {
   return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
 }

 function trim2(str) {
   return str.substring(Math.max(str.search(/\S/), 0), str.search(/\S\s*$/) + 1);
 }

 console.log(trim('  11--33  '));