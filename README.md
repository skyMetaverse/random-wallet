# Ethereum Wallet Generator

This package provides a simple way to generate a specified number of Ethereum wallets and save them into an Excel file. Every wallet includes an Ethereum address, private key, and a mnemonic phrase.

## Installation

To install this package, use the following command:

```bash
npm i random-wallet
```
## Usage
To use this package, require it in your Node.js project and call the **createWallets** function with the desired number of wallets and an optional remark which will be appended to the filename.

```js
const createWallets = require('random-wallet');

// Generate 10 wallets and save them to an Excel file with a custom remark
createWallets(10, 'myRemark');
```
This will create an Excel file named with the current time, the provided remark, and the number of wallets, containing the addresses, private keys, and mnemonic phrases of the generated wallets.

## Function Signature
The **createWallets** function has the following signature:
```js
createWallets(num: number, remark?: string): void
```
* **num**: The number of Ethereum wallets to generate (required).
* **remark**: An optional string to add to the filename for easy identification (optional).

## Output
The generated Excel file will be named in the format **YYYYMMDD_HHMMSS-remark-num.xlsx** or **YYYYMMDD_HHMMSS-num.xlsx** if no remark is provided. It will contain a worksheet named "Sheet1" with the following columns:
* **Address**: The Ethereum address.
* **Private Key**: The private key associated with the Ethereum address.
* **Mnemonic Phrase**: The mnemonic phrase associated with the wallet.