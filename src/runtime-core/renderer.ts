import { creatComponentInstance, setupComponent } from "./component"

export  function render(vnode,container){
    // 构建patch方法 方便后续的递归
    patch(vnode,container)
}

function patch(vnode,container){

    // 去处理组件

    // 判断 是不是 element类型
    // 是element类型就处理element
    // processElement()
    // 是component就处理component
    console.log(vnode.type,vnode)
    if(typeof vnode.type === 'string'){
        // 当虚拟节点的类型是一个字符串时,就作为一个元素节点
        processElement(vnode,container)
    }
    processComponent(vnode,container)

}
// 作为元素的处理方式
function processElement(vnode:any,container:any){
    // element 主要有初始化init和更新update
}

function processComponent(vnode:any,container:any){  

    mountComponent(vnode,container)

}

function mountComponent(vnode:any,container){
    // throw new Error('Function not implementd')
   const instance =  creatComponentInstance(vnode)

   setupComponent(instance)
    setupRenderEffect(instance,container)
}


function setupRenderEffect(instance:any,container){
    const subTree = instance.render();

    // vndoeTree => patch
    // vnode => element =>mountElement
    patch(subTree,container)
}





