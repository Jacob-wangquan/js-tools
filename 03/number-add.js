//Number 新增（扩展）方法

/*
1,limit: 确保数值在[n1, n2]闭合区间里，如果超出，则置换为离他最近的最大值或者最小值
*/
function limit(target, n1, n2) {
  var a = [n1, n2].sort();
  if(target < a[0]) target = a[0];
  if(target > a[1]) target = a[1];
  return target;
}

/*
2,nearer:求出距离指定数值最近的数
*/
function nearer(target, n1, n2) {
  var diff1 = Math.abs(target - n1),
  diff2 = Math.abs(target - n2);
  return diff1 < diff2 ? n1 : n2;
}

/*
3,toFixed: 取值精度 校正
  大数相加出问题是因为精度不足，小数相加出问题是进制转算时产生误差
*/
if(0.9.toFixed(0) !== '1') {   //低版本浏览器
  Number.prototype.toFixed = function(n) {
    var power = Math.pow(10, n);
    var fixed = (Math.round(this * power) / power).toString();
    if( n == 0) return fixed;
    if(fixed.indexOf('.') < 0){
      fixed += '.';
    }
    var padding = n + 1 - (fixed.length - fixed.indexOf('.'));
    for(var i = 0; i< padding; i++) {
      fixed += '0';
    }
    return fixed;
  };
}
