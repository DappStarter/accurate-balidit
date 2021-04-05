require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain equip hockey enroll bottom trial'; 
let testAccounts = [
"0xe2416239fb596efbdce6997c2b52b1415490ffa0b904357e4d655b3aab3ab8e1",
"0xe0a2102be895fe2d1dec18fa9a2b4cbbd14f07f53db8fb4b5678d18ff83f4b5c",
"0xb0ff0bceb5f3382c4bd79f636b3eb26279b1c4f6420e4e2cd1857f3f9ccded75",
"0xefb8c87a7d97800dfb33d1c49d85bd7339f060cef634db12073c56894ac1817a",
"0xeb4995aaa3d7195267867414d2dcede13cde2500cfae4c43aa748a8eaaa7964f",
"0x7954fe9ed523d6afbb7f395faba47c2803834f1b07e84163e7b32c00f52f91b1",
"0x6733ed9c9587d4d9bb71ae7f0a6aa2e614c96fe9080d7b387f91ab505ddcd183",
"0xba8f0dd49a4a95f42627ad3fb91dde70487c7e4e09e117d42974d32622619f66",
"0xfd100bb954c9ffd24227d1a49056812514e1c76e28957f7681e34dcf9446fe29",
"0x56bcc20a4c4d312433cdac092fae6327fb100ee91b6a3a54c9b2462373b3018b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
