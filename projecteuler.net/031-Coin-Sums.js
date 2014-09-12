// http://repl.it/Ysp

// PROBLEM //

/*
In England the currency is made up of pound, £, and pence, p,
and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

// ANSWER //

function poundCombinations() {
    var self = this;
    self.value = 0;
}

function processCoin(allCoins, currentAmount, maxAmount, combs) {
    var nextCoin = allCoins[0];
    var restCoins = allCoins.slice(1);

    for (var c = 0; c <= maxAmount; c += nextCoin) {
        if (c + currentAmount > maxAmount)
            break;
        else if (restCoins.length)
            processCoin(restCoins, c + currentAmount, maxAmount, combs);
        else if (c + currentAmount === maxAmount)
            combs.value++;
    }
}

function getUKPoundCombinations(amount) {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var combinations = new poundCombinations();

    processCoin(coins, 0, amount, combinations);

    return combinations.value;
}

console.log(getUKPoundCombinations(200));

// 73682
