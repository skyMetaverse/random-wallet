const fs = require('fs');
const xlsx = require('node-xlsx');
const { ethers } = require("ethers");
const logger = require('logger-syskey');

/**
 * Creates a specified number of Ethereum wallets and saves them to an Excel file.
 * 
 * @param {number} num - The number of wallets to create.
 * @param {string} [remark] - Optional remark to add to the filename for identification.
 */
function createWallets(num, remark) {
    // Define the header for the Excel sheet.
    const walletList = [['Address', 'Private Key', 'Mnemonic Phrase']];

    // Generate the specified number of wallets.
    for (let i = 0; i < num; i++) {
        const wallet = ethers.Wallet.createRandom();
        const walletAddress = wallet.address;
        const walletPrivateKey = wallet.privateKey;
        const walletMnemonic = wallet.mnemonic.phrase;
        walletList.push([walletAddress, walletPrivateKey, walletMnemonic]);
    }

    // Format the current time for the filename.
    const currentTime = new Date().toISOString().replace(/[-:.]/g, "").replace("T", "_").slice(0, 15);
    let fileName;

    // Include the remark in the filename, if provided.
    if (remark) {
        fileName = `${currentTime}-${remark}-${num}.xlsx`;
    } else {
        fileName = `${currentTime}-${num}.xlsx`;
    }

    // Convert the wallet list to a binary buffer for Excel file.
    const buffer = xlsx.build([{ name: "Sheet1", data: walletList }]);

    // Write the buffer to a file.
    fs.writeFile(fileName, buffer, function (err) {
        if (err) {
            logger.error(`Error writing Excel file: ${err}`);
            return;
        }
        logger.info(`Wallets created successfully, saved to: ${fileName}`);
    });
}

module.exports = createWallets;