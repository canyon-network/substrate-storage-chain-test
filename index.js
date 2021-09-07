#!/usr/bin/env node

const util_crypto = require("@polkadot/util-crypto");
const keyring_api = require("@polkadot/keyring");
const polkadot_api = require("@polkadot/api");
const fs = require("fs");
const multihash = require("multihashes");
const CID = require("cids");

async function main() {
	const wsProvider = new polkadot_api.WsProvider();
	const api = await polkadot_api.ApiPromise.create({ provider: wsProvider });

	const keyring = new keyring_api.Keyring({ type: "sr25519" });
	const alice = keyring.addFromUri("//Alice");

	const file = fs.readFileSync("index.js");
	const hash = util_crypto.blake2AsU8a(file);
	const encoded_hash = multihash.encode(hash, "blake2b-256");

	const cid = new CID(1, "blake2b-256", encoded_hash);
	console.log("cid:", cid.toString());

	const txHash = await api.tx.transactionStorage
		.store("0x" + file.toString("hex"))
		.signAndSend(alice);
	console.log("txHash:", txHash.toJSON());
}

main()
	.then(() => process.exit(0))
	.catch(console.error);
