import { isValidEmail } from '../regex'

describe('Regex utilities', () => {
    describe('isValidEmail() function', () => {
        it.each([
            [undefined],
            [null],
            [''],
        ])('returns `false` if provided value is not string', (email) => {
            const result = isValidEmail(email)
            expect(result).toStrictEqual(false)
        })

        it.each([
            ['a'],
            ['abc def'],
            [0],
            [12],
        ])('returns `false` if provided value is not even an email', (email) => {
            const result = isValidEmail(email)
            expect(result).toStrictEqual(false)
        })

        it.each([
            ['a@a'],
            ['abc@def'],
        ])('returns `false` if provided value is not valid email', (email) => {
            const result = isValidEmail(email)
            expect(result).toStrictEqual(false)
        })

        it.each([
            ['a@a.aa'],
            ['abc@def.gh'],
            ['abc.def@gh.ij'],
            ['abc.def@gh-ij.kl'],
            ['Abc.Def@gh.ij'],
            ['abc.def@Gh-Ij.kl'],
            ['abc_def@gh.ij'],
            ['abc%def@gh.ij'],
            ['abc+def@gh.ij'],
            ['abc-def@gh.ij'],
        ])('returns `true` if provided value is valid email', (email) => {
            const result = isValidEmail(email)
            expect(result).toStrictEqual(true)
        })
    })
})
