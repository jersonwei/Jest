import { NodeTypes } from '../src/ast'
import {baseParse}  from '../src/parse'
describe('Parse',()=>{

    describe('interpolation',()=>{

        const ast = baseParse("{{message}}")

        // root 
        expect(ast.children[0]).toStrictEqual({
        type:NodeTypes.INTERPOLATION,
            content:{
                type:NodeTypes.SIMPLE_EXPRESSION,
                content:'message'
            }
        })
    })
})
describe('element',()=>{

    describe('simple element div',()=>{

        const ast = baseParse("<div></div>")

        // root 
        expect(ast.children[0]).toStrictEqual({
        type:NodeTypes.ELEMENT,
        tag:'div'
        })

        

    })

})

describe('text',()=>{

    describe('simple text',()=>{

        const ast = baseParse("some text")

        // root 
        expect(ast.children[0]).toStrictEqual({
        type:NodeTypes.TEXT ,
        content:'some text'
        })

        

    })

})