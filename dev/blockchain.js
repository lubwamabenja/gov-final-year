
var sha1 = require('sha1');

function Blockchain(){
    this.chain = [];                //Where all blocks we mine are to go
    this.pendingTransactions = [];      //Where temporary transactions are stored
}


//Blockchain prototype object
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
const newBlock = {
    index: this.chain.length + 1,    //This will show the position of the block in our blockchain
    timestamp: Date.now(),               //when the block was created
    transactions: this.pendingTransactions,          //all new transactions will go to this place
    nonce: nonce,                                // any number to show legitimacy in creating the block using POW
    hash:hash,                                      //information of the transactions but hashed
    previousBlockHash: previousBlockHash            //information from past block but hashed
};

this.pendingTransactions = [];
this.chain.push(newBlock);
return newBlock;
}


module.exports = Blockchain;


//Creating getLastBlock
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length -1];                //defines the position of the block
}

//New transaction method
Blockchain.prototype.createNewTransaction = function(amount, sender,recepient){
//amount for the amount being sent
//sender and recepient
const newTransaction = {
    amount: amount,
    sender: sender,
    recepient: recepient
};

this.pendingTransactions.push(newTransaction);
return this.getLastBlock ['index'] + 1;                        //Enables us to know which block the new transaction is
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) { 
    //nonce = nonce.toString();
    const dataAsString = previousBlockHash + nonce + JSON.stringify(currentBlockData); 
    var hash = sha1(dataAsString); 
    return hash;
} 

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){

    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
     while (hash.substring(0, 4) !== '0000' ){
        nonce++;        
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);  
        console.log(hash);  
    }   
    return nonce;
}












