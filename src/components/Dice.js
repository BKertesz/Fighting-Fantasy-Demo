
const rollDice = (times,sides) => {
    let total = 0;

    // for(let i=0; i < times; i++){
    //      total += Math.floor(Math.random() + (sides + 1))
    //     }
    let i = 0;
    while( i < times){
        total += Math.floor(Math.random() * (sides + 1))
        i ++;
    }

    if(total === 0){
        total = 1;
    }

    return total;
}

export default rollDice