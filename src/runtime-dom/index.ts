import { createRenderer } from "../runtime-core/renderer";

function createElement(type){
    // console.log('createElement------------')
    return document.createElement(type)

}

function patchProp(el,key,prevVal,nextVal){
    // console.log('patchProp---------------')
    const isOn = key=> /^on[A-Z]/.test(key)
        // console.log(key)
        // 如果我们的key是我们的onclick我们就可以给他添加一个点击事件
        if(isOn(key)){
            el.addEventListener(key.slice(2).toLowerCase(),nextVal)
        }else{
            if(nextVal === undefined || nextVal === null){
                el.removeAttribute(key)
            }else{
                el.setAttribute(key,nextVal)
            }
        }
}


function insert(el,parent){
    // console.log('insert',el,parent)
    parent.append(el)
}

const renderer:any = createRenderer({
    createElement,
    patchProp,
    insert
})

export function createApp(...args){
    return renderer.createApp(...args)
}

export * from '../runtime-core'
