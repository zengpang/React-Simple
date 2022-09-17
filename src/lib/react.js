import{renderComponent} from './react-dom'
function createElement(tag,attrs,...children)
{
    //return "123"
    return{
        
        tag,//节点标签名
        attrs,//元素属性
        children//节点的子节点
    }

}
//通用组件类
class Component{
    constructor(props)
    {
        this.props=props;
        this.states={};
    }
    setState(newState)
    {
        Object.assign(this.states,newState);
        console.log('Hello,开始设置');
        renderComponent(this);
    }
}
//重写虚拟DOM接口。在Babel解析JSX字符串的时候，会将JSX字符串编译为React.createElement()并调用
// const React={
//     createElement,
//     Component
// };
export{
    createElement,
    Component
};
export default{
    createElement,
    Component
};