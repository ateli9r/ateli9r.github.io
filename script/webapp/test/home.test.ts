import { describe, expect, test } from '@jest/globals'
import HomeModel from '../model/home_model'

describe('HomeModel 테스트', () => {
    const model = new HomeModel()

    test('parse', () => {
        // https://marked.js.org
        expect(model.parse('# title')).toBe('<h1>title</h1>')
        expect(model.parse('*bold text*')).toBe('<p><em>bold text</em></p>')
        expect(model.parse('**bold text**')).toBe('<p><strong>bold text</strong></p>')
        expect(model.parse('- item')).toBe('<ul>\n<li>item</li>\n</ul>')
    })

    // TODO: CommonUtil 테스트 추가
    // test('load', async () => {
    //     model.setDebugMode(true)

    //     const resp1 = await model.load('/contents/home/dummy.md')
    //     expect(resp1).toBe(null)

    //     const resp2 = await model.load('/contents/home/story.md')
    //     expect(resp2 != null).toBe(true)
    //     expect(resp2!.length > 0).toBe(true)
    // })

    test('content', async () => {
        model.setDebugMode(true)

        const resp1 = await model.content('dummy')
        expect(resp1).toBe(null)

        const resp2 = await model.content('_test')
        expect(resp2 != null).toBe(true)
        expect(resp2!.length > 0).toBe(true)
        expect(resp2).toBe('<p><strong>markdown</strong></p>')
    })
})
