import {sum} from './home'
test('ma fonction sum', () => {
    const result = sum(3,7)
    expect(result).toBe(10)
})