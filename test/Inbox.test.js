const ganache = require("ganache");
const assert = require("assert");
const { Web3 } = require("web3");

const web3 = new Web3(ganache.provider());

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //  Use one of those accoounts to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
