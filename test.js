const challengeFunction = require('./index.js')
const assert = require('assert')

describe('chessKnight', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1: when cell="A1" should return 2', () => {

        let result = challengeFunction("A1")
        let expected = 2

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2: when cell="C2" should return 6', () => {

        let result = challengeFunction("C2")
        let expected = 6

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3: when cell="B1" should return 3', () => {

        let result = challengeFunction("B1")
        let expected = 3

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4: when cell="F1" should return 4', () => {

        let result = challengeFunction("F1")
        let expected = 4

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test5: when cell="H4" should return 4', () => {

        let result = challengeFunction("H4")
        let expected = 4

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test6: when cell="G7" should return 4', () => {

        let result = challengeFunction("G7")
        let expected = 4

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test7: when cell="D5" should return 8', () => {

        let result = challengeFunction("D5")
        let expected = 8

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test8: when cell="E3" should return 8', () => {

        let result = challengeFunction("E3")
        let expected = 8

        assert.strictEqual(result,expected)
    })

})
