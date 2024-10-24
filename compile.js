const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

// Specify the Solidity version
const solcVersion = "0.8.28"; // Replace with your contract's version

const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": { content: source },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(
  solc.compile(JSON.stringify(input), { version: solcVersion })
);

// Extract the ABI and bytecode
const contract = output.contracts["Inbox.sol"].Inbox;
const contractInterface = contract.abi; // Renamed from 'interface' to 'contractInterface'
const bytecode = contract.evm.bytecode.object;

// Export the ABI and bytecode
module.exports = { contractInterface, bytecode };
