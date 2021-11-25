require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain common grace spring success surge'; 
let testAccounts = [
"0x48c7c87362476120fee1707f8b46cf964ea02d983d3bb6cf71344da8a47b3602",
"0xd5a6254cc5ebbc8dc3ca451f9769ae275378c7ff60a3a83bfd5313f541de7bfa",
"0x8e86c9fc06557580ffd775d47b549f4c19cd947bb793a34266b270564997cb44",
"0xdd5383df38dcb2be570df8b765b3a91b3f685e5b7fd959fb1959d8781988acae",
"0x6a772017938ba4cc033aacfe42a50f73f25948f0e533d927150cea54e42bdf88",
"0x2299e52aec78b3bd84654758106a5a4c5f9394598699a8959c62a9e65b9c62bd",
"0x96cd0702696446e00623c1689a7c0c01801a6a970d17eb33819cc1a3e4300a2e",
"0xb236072b2353a0a189c8fc66ef116a48466d06f1d5aa4df9d610d1c22c806cb6",
"0x1161b1fc010800f306674527c4dffe48522ff9178d67f84380d95ec4d8461a5a",
"0x9815ea227b44a12379a0cc1c6718ab30e0363c841bec17cde46b6712bbc044ad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

