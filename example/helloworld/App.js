import {h} from '../../lib/guide-mini-vue.esm.js'
import { Foo } from './foo.js'
export const App = {
    name:"App",
    render(){
        // emit
        return h('div',{ 
        },
        [h("div",{},"App"),h(Foo,{
            // emit类似于我们的element设置的on事件
            onAdd(){
                console.log("onAdd")
            }
        })])
    },
    setup(){
        return {
        }
    }
}