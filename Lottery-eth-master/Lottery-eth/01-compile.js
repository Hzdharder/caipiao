// 导出solc编译器
let solc = require('solc')

let fs = require('fs')

// 读取合约
let sourceCode = fs.readFileSync('./contracts/Lottery.sol','utf-8')
let output = solc.compile(sourceCode,1)

console.log(output)
console.log('abi:',output['contracts'][':Lottery']['interface'])
module.exports = output['contracts'][':Lottery']


