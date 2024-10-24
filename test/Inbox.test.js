const ganache = require("ganache");
const assert = require("assert");
const { Web3 } = require("web3");

const web3 = new Web3(ganache.provider());
const { contractInterface, bytecode } = require("../compile");

let accounts;
let inbox;
const INITIAL_MESSAGE = "Hi there!";

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //  Use one of those accoounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(contractInterface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_MESSAGE],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });
});
