const CryptoBlock = require("./CryptoBlock");

const INITIAL_INDEX = 0;
const PRECEDING_HASH = 0;
const GENERATION_DATE = '01/01/2020';

class CryptoBlockChain {
  constructor() {
    this.blockchain = [ this.startGenesisBlock() ];
  }

  startGenesisBlock() {
    return new CryptoBlock(
      INITIAL_INDEX,
      GENERATION_DATE,
      'Initial block',
      PRECEDING_HASH
    );
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();

    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for ( let i = 1; i < this.blockchain.length; i++ ) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if ( currentBlock.hash !== currentBlock.computeHash() ) {
        return false;
      }
      if ( currentBlock.precedingHash !== precedingBlock.hash )
        return false;
    }
    return true;
  }
}

module.exports = CryptoBlockChain;
