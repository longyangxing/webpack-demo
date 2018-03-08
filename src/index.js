// var jspang  = Symbol();
// var obj = {
//     [jspang] : '技术'
// }
// console.log(obj[jspang])
// obj[jspang] = 'web';
// console.log(obj[jspang])

// let obj = {name:'jspang',skill:'web'};
// let age = Symbol();
// obj[age] = 18;
// for( let item in obj){
//     console.log(obj[item])
// }

//map
// let json  = {
//     name: 'json',
//     skill: 'web'
// }

// var map = new Map()
// map.set(json,'iam')
// console.log(map)

// map.set('js',json)
// console.log(map)

// Proxy
// var obj = {
//     add:function(val){
//         return val + 10;
//     },
//     name: 'I am jspang'
// };

// console.log(obj.add(100))
// console.log(obj.name)

// var pro = new Proxy({
//     add:function(val){
//         return val + 10;
//     },
//     name: 'I am jspang'
// },{
//     get:function(target,key,property){
//         console.log('come in get')
//         //debugger
//         return target[key];
//     },
//     set:function(target, key, value,receiver){
//         debugger
//         console.log(`setting ${key} = ${value}`);
//         return target[key] = value;
//     }
// })

// console.log(pro.name)
// pro.name = '技术胖'
// console.log(pro.name)

// let target = function(){
//     return 'iiiii'
// }
// var handler = {
//     apply(target,ctx,args){
//         debugger

//         console.log('do apply')
//         return Reflect.apply(...arguments)
//     }
// }

// var pro = new Proxy(target,handler)
// console.log(pro())

// Promise
let state = 1;
function step1(resolve,reject){
    console.log('1开始')
    if(state == 1){
        resolve('洗菜做饭--完成')
    }else{
        reject('洗菜做饭--出错');
    }
}

function step2(resolve,reject){
    console.log('2开始--吃饭')
    if(state == 1){
        resolve('坐下吃饭--完成')
    }else{
        reject('坐下吃饭--出错');
    }
}

// function step3(resolve,reject){
//     console.log('3开始--收拾桌子')
//     if(state == 1){
//         resolve('收拾桌子--完成')
//     }else{
//         reject('收拾桌子--出错');
//     }
// }

// new Promise(step1).then(function(val){
//     debugger
//     console.log(val)
//     return new Promise(step2)
// }).then(function(val){
//     console.log(val)
//     return val;
// })


class Coder{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    name(val){
        console.log(val)
        return val;
    }
    skill(val){
        console.log(this.name('js')+'：'+'Skill：' + val);
    }
    add(){
        return this.a + this.b;
    }

}

class htmler extends Coder{

}

let pang = new htmler(1,2)
console.log(pang.add())