import { transform } from "../src/transform"
import { baseParse } from "../src/parse"
import { NodeTypes } from "../src/ast"


describe('transform',()=>{

    it('happy path',()=>{
        const ast = baseParse('<div>hi,{{message}}</div>')
        // 插件体系的思想
        const plugin = (node)=>{
            if(node.type === NodeTypes.TEXT){
                node.content = node.content + ' mini-vue'
            }
        }
        // 传入options
        transform(ast,{
            nodeTransforms:[plugin]
        })

        const nodeText = ast.children[0].children[0]
        expect(nodeText.content).toBe('hi, mini-vue')

    })
})