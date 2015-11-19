// 原型式继承
// 其基本思路是借助原型可以基于已有的对象创建新的对象

function object(o){
 function F(){}
 F.prototype = o;
 return new F();
}

var person = {
  name: "Tom",
  friends:  ["Jack", "John", "Kim"]
};
var David = object(person);
David.name = "David";
David.friends.push("Amy");
console.log(David.friends);// ["Jack", "John", "Kim", "Amy"]
var Rob = object(person);
Rob.name = "Rob";
console.log(Rob.friends);// ["Jack", "John", "Kim", "Amy"]