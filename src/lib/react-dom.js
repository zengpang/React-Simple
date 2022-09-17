import React from "./react";
//将虚拟dom字符串vdom转换为html节点，并设置父容器为container
function render(vdom, container) {
   container.innerHTML='';
   renderVdom(vdom, container);
}
function renderVdom(vdom,container)
{
    let node=createDomfromVdom(vdom);
    //给父容器container添加生成的节点
    container.appendChild(node);
}
//根据虚拟dom字符串生成html节点
function createDomfromVdom(vdom) {
    //新建节点
    let node;
    //如果传入的虚拟节点类型为字符串
    if (typeof vdom === 'string') {
        node = document.createTextNode(vdom);
    }
    //如果传入的虚拟节点类型为对象(意味着包含子节点)
    if (typeof vdom === 'object') {
        /*如果传入的虚拟节点类型为引用类型，则判断传入的虚拟节点
        为自定义组件类型*/
        if (typeof vdom.tag === 'function') {
          let component=getComponent(vdom.tag,vdom.attrs);
          let vnode=component.render();
          node=createDomfromVdom(vnode);
          component.$root=node;
        }
        else {
            //创建节点
            node = document.createElement(vdom.tag);
            //设置节点属性
            setAttribute(node, vdom.attrs);
            //遍历虚拟dom的子节点并全部转换为html节点
            vdom.children.forEach(childVdom => render(childVdom, node));
        }

    }
    return node;
}
//获取组件
function getComponent(constructor,attrs)
{
  if(constructor.prototype instanceof  React.Component)
  {
    return new constructor(attrs);
  }
  else
  {
    let App=class extends React.Component{};
    App.prototype.render=function(){
        return constructor(attrs);
    }
    return new App(attrs);
  }
}
//将虚拟dom的属性字符串数组转化为html属性，并设置给节点
function setAttribute(node, attrs) {

    //虚拟dom的属性字符串数组为空，则返回
    if (!attrs) return;
    //遍历虚拟dom的所有属性
    for (let key in attrs) {
        //判断属性字符串是否以on开头，如果是的话，则判断属性为事件属性
        if (key.startsWith('on')) {
            //如果是事件属性，则直接赋予给节点
            node[key.toLocaleLowerCase()] = attrs[key];
        }
        //如果是属性字符串为普通style属性
        else if (key === 'style') {
            //则将html节点与虚拟dom的属性进行整合
            Object.assign(node.style, attrs[key]);
        }
        //如果是属性字符串既不为style属性也不为事件属性
        else {
            //那就直接将vdom属性字符串赋予节点对应的属性
            node[key] = attrs[key];
        }
    }
}
function renderComponent(component)
{
    let vdom = component.render();
    let node = createDomfromVdom(vdom);
    if(component.$root) {
      component.$root.parentNode.replaceChild(node, component.$root);
    }

}
function createComponent(constructor, attrs) {
    return new constructor(attrs);
}
const ReactDOM = {
    render(vdom, container) {
        //清空容器原本内容
        container.innerHTML = '';
        //将虚拟dom字符串vdom转换为html节点，并设置父容器为container
        render(vdom, container);
    }
};
export{
    render,
    renderComponent
};
export default{
    render,
    renderComponent
}