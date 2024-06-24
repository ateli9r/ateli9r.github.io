import { describe, expect, test } from '@jest/globals'
import HelloModel from '../model/hello_model'

describe('HelloModel 테스트', () => {
    test('hello', () => {
        const model = new HelloModel()
        expect(model.hello()).toBe('Hello')
        expect(model.hello('')).toBe('Hello')
        expect(model.hello('World')).toBe('Hello, World')

        model.setPrefix('Bonjour')
        expect(model.hello('Mademoiselle')).toBe('Bonjour, Mademoiselle')
    })
})
