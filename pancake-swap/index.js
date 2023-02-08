require("dotenv").config();
const axios = require("axios").default;
const { ethers } = require("ethers");

const CAKE_TESTNET = "0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e";
const CAKE_MAINNET = "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82";
const USDT_TESTNET = "0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684";
const USDT_MAINNET = "0x55d398326f99059fF775485246999027B3197955";
const WBNB_TESTNET = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";

function getWallet(){
    const provider = new ethers.JsonRpcProvider(process.env.PROVIDER_URL);
    const wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC);
    return wallet.connect(provider);
}

function approve(wallet, tokenToApprove, value){
    const contract = new ethers.Contract(
        tokenToApprove,
        ["function approve(address _spender, uint256 _value) public returns (bool success)"],
        wallet
    );

    return contract.approve(process.env.ROUTER_CONTRACT, value);
}

async function swapTokens(tokenFrom, quantity, tokenTo) {
    const wallet = getWallet();

    const contract = new ethers.Contract(
        process.env.ROUTER_CONTRACT,
        ["function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)"],
        wallet
    );

    const value = ethers.parseEther(quantity).toString();

    await approve(wallet, tokenFrom, value);

    const result = await contract.swapExactTokensForTokens(
        value,
        0,
        [tokenFrom, WBNB_TESTNET, tokenTo],
        process.env.WALLET,
        Date.now() + 10000,
        {
            gasPrice: 10000000000,
            gasLimit: 250000
        }
    )
    console.log(result);
}

let isOpened = false;

setInterval(async () => {
    const { data } = await axios.get(`https://bsc.api.0x.org/swap/v1/price/?sellToken=${CAKE_MAINNET}&sellAmount=1000000000000000000&buyToken=${USDT_MAINNET}`);
    const price = parseFloat(data.price);
    console.log("Cake Price: " + price);
    if (price < 5 && !isOpened) {
        console.log("Comprar");
        swapTokens(USDT_TESTNET, "10", CAKE_TESTNET);
        isOpened = true;
    }
    else if (price > 6 && isOpened) {
        console.log("Vender");
        swapTokens(CAKE_TESTNET, "10", USDT_TESTNET);
        isOpened = false;
    }
}, 3000)