
const Blockchain = require("./blockchain.js");

/* testing the newBlock method
const hyperledge = new Blockchain();

hyperledge.createNewBlock(2345, "qwretd", "cjfmd");
hyperledge.createNewBlock(128, "tfef", "mirfmef");
hyperledge.createNewBlock(8936, "oldkec", "wodce");

console.log(hyperledge);*/

/* Testing new Transaction
const hyperledge = new Blockchain();

hyperledge.createNewBlock(1346, "yedef", "hwdwwid");
hyperledge.createNewTransaction(20000, "hdued", "neeifwl");
hyperledge.createNewTransaction(23240, "3f3f", "pwepdeedl");
hyperledge.createNewTransaction(13400, "ef4f4ffffffffrf", "pdpwdpw");
hyperledge.createNewBlock(2134, "wetwdw", "ucocele");



console.log(hyperledge.chain[1]); */


//Testing hash block
const hyperledge = new Blockchain();
const previousBlockHash = "nduwdmwodqws";
const currentBlockData = [
    {
    amount: 108, 
    sender: 'B4CEE9C0E3CD571',
    recipient: '3A3F6E462D48E9',
    },

    {
        amount: 101, 
        sender: '82jdkwdijd',
        recipient: '3A3F6Edwwdd',
        },
        {
            amount: 132, 
            sender: ' SCKWODWLDCD571',
            recipient: 'PCEODWDOWDWDWK',
            }
        ]

        //console.log(hyperledge.proofOfWork(previousBlockHash, currentBlockData));

        //hyperledge.hashBlock(previousBlockHash, currentBlockData, nonce ); 
        console.log(hyperledge.hashBlock(previousBlockHash, currentBlockData, nonce)); 
        
        

//hyperledge.hashBlock();*/

