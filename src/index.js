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
function render(vdom,container)
{
   let node;
   if(typeof vdom==='string')
   {
    node=document.createTextNode(vdom);
   }
   if(typeof vdom=== 'object')
   {
     node=document.createElement(vdom.tag);
     vdom.children.forEach(childVdom =>render(childVdom,node));
   }
   container.appendChild(node);
}
const ReactDOM={
    render(vdom,container)
    {
      container.innerHTML='';
      render(vdom,container);
    }
};
let div=<h1 className="hello">
  <span>hello</span>
  <span>world</span>
</h1>;
console.log(div);
ReactDOM.render(div,document.body);