import React, { Component } from './lib/react.js';
import ReactDOM from './lib/react-dom.js';
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

class App extends Component{
    //构造函数
    constructor(props)
    {
        //获取继承类
        super(props);
        this.states={
            title:'jirengu'
        }
        //this.handleClick=this.handleClick.bind(this);
    }
    //点击事件
    handleClick()
    {
      this.setState({
        title:'ruoyu'
      })
    }
    render(){
        console.log('执行渲染');
        return (
            <div>
            <Menu title={this.states.title}/>
            <h1>{ this.states.title }</h1>
            <p>{ this.props.id }</p>
            <span onClick={this.handleClick.bind(this)}>hello</span>
          </div>
        );
    }
}
function Menu(props){
    return <h1>menu {props.title}</h1>
}
//测试点击事件
function ClickMe()
{
  console.log("节点被点击");
}
//测试样式
let styleObj={
    color:'blue',
    fontSize:'20px'
}
//JSX字符串

let div=<App id="app"/>;
 console.log(div);
ReactDOM.render((div),document.body);