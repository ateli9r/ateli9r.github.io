import { describe, expect, test } from '@jest/globals'
import CommonUtil from '../util/common'

describe('CommonUtil 테스트', () => {
    test('templateHTML', async () => {
        const html = await CommonUtil.templateHTML('hello', true)
        expect(html != null).toBe(true)
        expect(html!.length > 0).toBe(true)
        expect(html!.indexOf('</div>') > 0).toBe(true)
        expect(html!.indexOf('nameInput') > 0).toBe(true)
    })

    test('readData', async () => {
        const resp1 = await CommonUtil.readData('/data/dummy.yml', true)
        expect(resp1).toBe(null)

        const resp2 = await CommonUtil.readData('/data/config.yml', true)
        expect(resp2 != null).toBe(true)
        expect(resp2!.length > 0).toBe(true)
    })

    test('parseYAML', async () => {
        const path = '/data/config.yml'
        const data = await CommonUtil.readData(path, true)
        expect(data != null).toBe(true)

        const doc = CommonUtil.parseYAML(data!) as any
        expect(doc.text).toBe('text')
        expect(doc.number).toBe(1234)
        expect(doc.items.length > 0).toBe(true)
    })

    test('readYAML', async () => {
        const path = '/data/config.yml'
        const doc = await CommonUtil.readYAML(path, true) as any
        expect(doc.text).toBe('text')
        expect(doc.number).toBe(1234)
        expect(doc.items.length > 0).toBe(true)
    })
})
