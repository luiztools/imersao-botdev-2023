# pancakeswap

Projeto de bot para dex PancakeSwap (dia 3)

## Como executar?

1. Crie um arquivo .env, copie o conteúdo do .env.example nele e preencha as variáveis;
2. Revise o index.js e implemente a sua lógica de compra e venda de um par de moedas;
3. Navegue via terminal até a pasta do projeto;
4. Instale as dependências com npm install;
5. Execute o projeto com node index.js;

## Recursos de Aula

As URLs de teste e produção estão no .env.example

URL da API para cotação de CAKE em USDT: https://bsc.api.0x.org/swap/v1/price/?sellToken=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&sellAmount=1000000000000000000&buyToken=0x55d398326f99059fF775485246999027B3197955

URL da documentação da API da 0x.org: https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-price

Contratos de alguns tokens (pode pegar no site da PancakeSwap):

USDC = 0x64544969ed7EBf5f083679233325356EbE738930
WBNB Testnet = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd
CAKE Testnet = 0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e
CAKE Mainnet = 0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
USDT Testnet = 0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684
USDT Mainnet = 0x55d398326f99059fF775485246999027B3197955
BUSD = 0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee ou 0x78867bbeef44f2326bf8ddd1941a4439382ef2a7
ETH = 0x8babbb98678facc7342735486c851abd7a0d17ca
DAI = 0x8a9424745056Eb399FD19a0EC26A14316684e274
SAFEMOON = 0xDAcbdeCc2992a63390d108e8507B98c7E2B5584a

ABI para swap: "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)"

ABI para approve: "function approve(address _spender, uint256 _value) public returns (bool success)"

## Recursos Extras

Aprenda a configurar o ambiente de desenvolvimento: https://www.youtube.com/watch?v=iJ-BUhcZOSY

Aprenda a criar a carteira MetaMask e configurar para teste: https://www.youtube.com/watch?v=7Nc9AvxI4-I

Site para receber tokens de teste: https://testnet.binance.org/faucet-smart

Faça swaps manuais em https://pancakeswap.ibhagwan.workers.dev/#/swap ou https://pancakeswap.finance/info?chain=bscTestnet (ambos testnet) ou ainda https://pancakeswap.finance (produção)

Confira suas transações em https://testnet.bscscan.com (testnet) ou https://www.bscscan.com (produção)

Inscreva-se para receber as lições e ter suporte: https://www.luiztools.com.br/bot-dev

Me siga nas redes sociais: https://about.me/luiztools

Receba as novidades no Telegram: https://t.me/luiznews