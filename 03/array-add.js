//数组拓展方法
/*
1,contains:判断数组是否包含指定目标
*/
function contaions(target, item) {
  return target.indexOf(item) > -1
}

/*
2,removeAt:移除数组中指定位置的元素，返回布尔值表示成功与否
*/
function removeAt(target, index) {
  return !!target.splice(index, 1).length
}

/*
3,remove:移除数组中第一个匹配传参的的元素，返回布尔值表示成功与否
*/
function remove(target, item) {
  var index = target.indexOf(item);
  if(~index) {
    return removeAt(target, index);
  }
  return false;
}

/*
4,shuffle: 对数组进行洗牌
*/
function shuffle(target) {
  var j, x, i = target.length;
  for(; i > 0; j = parseInt(Math.random() * i), x = target[--i], target[i] = target[j], target[j] = x) {

  }
  return target;
}

/*
5,random: 从数组中随机抽取一个数
*/
function random(target) {
  return target[Math.floor(Math.random() * target.length)];
}

/*
6,flatten: 对数组进行平坦化处理，返回一个一维新数组
*/
function flatten(target) {
  var result = [];
  target.forEach(function(item) {
    if(Array.isArray(item)) {
      result = result.concat(flatten(item));
    }else {
      result.push(item);
    }
  });
  return result;
}

/*
7,unique: 对数组进行去重，返回一个没有重复元素的新数组
*/
function unique(target) {
  var result = [];
  loop: for(var i=0, n = target.length; i < n; i++){
    for(var x = i+1; x < n; x++){
      if(target[x] === target[i]) {
        continue loop;
      }
    }
    result.push(target[i]);
  }
  return result;
}

/*
8,compact: 过滤数组中的null和undefined，但不影响原数组
*/
function compact(target) {
  return target.filter(function(el) {
    return el != null;
  })
}

/*
9,pluck:取得对象数组的每个元素的指定属性，组成数组返回
*/
function pluck(target, name) {
  var result = [], prop;
  target.forEach(function(item) {
    prop = item[name];
    if(prop != null) {
      result.push(prop);
    }
  });
  return result;
}

/*
10,groupBy:根据指定条件（回调或者某个属性）进行分组，构成对象返回
*/
function groupBy(target, val) {
  var result = {};
  var iterator = $.isFunction(val) ? val : function(obj) {
    return obj[val];
  };
  target.forEach(function(value, index){
    var key = iterator(value, index);
    (result[key] || (result[key] = [])).push(value);
  });
  return result;
}

// console.log(remove([1,3,4,56,5], 2));
// console.log(shuffle([1,3,4,56,5]));
// console.log(flatten([[1,2,4],3,[3,2,6],56,5]));
// console.log(unique([1,3,1,3,4,56,5]));
console.log(pluck([{a:1,b:3}, {a:2, c: 5}], 'a'));


