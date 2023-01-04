function generateRandomNumber(num){
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    signInfo:  ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck','bad luck', 'ok luck', 'good luck', 'great luck'],
    advice:  ['Go out and eat.  Treat yourself!', 'Dont do it!', 'Play the game' ,'Trust no one.', 'Go for broke.']
}

let personalWisdom = [];

for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}."`)
            break
        case 'fortuneOutput':
            personalWisdom.push(`You are having "${collectiveWisdom[prop][optionIdx]}."`)
            break
        case 'advice':
            personalWisdom.push(`You should ${collectiveWisdom[prop][optionIdx]}."`)
            break
        default:
            personalWisdom.push('There is not enough Information.')

    }
}

function formatWisdom(wisdom){
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);