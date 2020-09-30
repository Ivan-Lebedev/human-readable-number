module.exports = function toReadable(number) {
    let textNum = []
    function tens(someNum) {
        switch (someNum) {
            case 0:
                textNum.push('')
                break
            case 2:
                textNum.push('twenty')
                break
            case 3:
                textNum.push('thirty')
                break
            case 4:
                textNum.push('forty')
                break
            case 5:
                textNum.push('fifty')
                break
            case 6:
                textNum.push('sixty')
                break
            case 7:
                textNum.push('seventy')
                break
            case 8:
                textNum.push('eighty')
                break
            case 9:
                textNum.push('ninety')
                break
        }
    }

    function ones(someNum) {
        switch (someNum) {
            case 0:
                textNum.push('')
                break
            case 1:
                textNum.push('one')
                break
            case 2:
                textNum.push('two')
                break
            case 3:
                textNum.push('three')
                break
            case 4:
                textNum.push('four')
                break
            case 5:
                textNum.push('five')
                break
            case 6:
                textNum.push('six')
                break
            case 7:
                textNum.push('seven')
                break
            case 8:
                textNum.push('eight')
                break
            case 9:
                textNum.push('nine')
                break
            case 10: textNum.push('ten')
                break
            case 11: textNum.push('eleven')
                break
            case 12: textNum.push('twelve')
                break
            case 13: textNum.push('thirteen')
                break
            case 14: textNum.push('fourteen')
                break
            case 15: textNum.push('fifteen')
                break
            case 16: textNum.push('sixteen')
                break
            case 17: textNum.push('seventeen')
                break
            case 18: textNum.push('eighteen')
                break
            case 19: textNum.push('nineteen')
                break
        }
    }

    function hundreds(someNum) {
        switch (someNum) {
            case 1:
                textNum.push('one hundred')
                break
            case 2:
                textNum.push('two hundred')
                break
            case 3:
                textNum.push('three hundred')
                break
            case 4:
                textNum.push('four hundred')
                break
            case 5:
                textNum.push('five hundred')
                break
            case 6:
                textNum.push('six hundred')
                break
            case 7:
                textNum.push('seven hundred')
                break
            case 8:
                textNum.push('eight hundred')
                break
            case 9:
                textNum.push('nine hundred')
                break
        }

    }
    if (number === 0) return 'zero'
    if (number < 20) {
        ones(number)
        return textNum.join('')
    }
    if (number >= 20 && number < 100) {
        tens(+String(number).slice(0, 1))
        ones(+String(number).slice(1))
        return textNum.join(' ').trim()
    }
    if (number >= 100 && number < 1000) {
        hundreds(+String(number).slice(0, 1))

        if (+String(number).slice(1) < 20) {
            ones(+String(number).slice(1))
            return textNum.join(' ').trim()
        } else {
            tens(+String(number).slice(1, 2))
            ones(+String(number).slice(2))
            return textNum.join(' ').trim()
        }

    }
}