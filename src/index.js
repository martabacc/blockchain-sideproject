const CryptoBlock = require("./core/CryptoBlock");
const CryptoBlockChain = require("./core/CryptoBlockChain");

let smashingCoin;
const generateChain = function() {
  delete smashingCoin;
  smashingCoin = new CryptoBlockChain();
  const firstBlock = new CryptoBlock(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  });

  smashingCoin.addNewBlock(firstBlock);

  const secondBlock = new CryptoBlock(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
  });
  smashingCoin.addNewBlock(secondBlock);
}

generateChain();

console.log(JSON.stringify(smashingCoin, null, 4));

console.log('Checking chain validity', smashingCoin.checkChainValidity())

console.log('Trying to change third hash and check validity =>')

smashingCoin.blockchain[1].hash = smashingCoin.blockchain[1].hash + 'AA';

console.log('Rehecking chain validity =>', smashingCoin.checkChainValidity());





