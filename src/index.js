// 测试
// const React={
//     createElement(...args){
//         console.log(args);
//     }
// };
// let div=<div>hello</div>;
// console.log(div);


// console.log('hello world');
// const React={
//     createElement(...args)
//     {
//         //输出参数
//         console.log(args);
//     }
// }

// let div=<div>hello</div>;
// let name='饥人谷';
// let element=<h1>hello {{name}}</h1>

function createElement(tag,attrs,...children)
{
    return{
        tag,
        attrs,
        children
    }
}

const React={
    createElement
};

let div=<h1 className="hello">
  
</h1>;
console.log(div);