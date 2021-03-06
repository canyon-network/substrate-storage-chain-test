# Test Substrate Storage Chain

## Running a dev chain

Note: use a custom spec and enable `--storage-chain`.

```bash
$ cargo run --release -- build-spec --chain=dev > sc_dev_init.json
$ cargo run --release build-spec --chain=sc_dev_init.json --raw > sc_dev.json

$ rm -rf tmp && cargo run --release -- --chain=sc_dev.json -d tmp --storage-chain --keep-blocks=100800 --ipfs-server --validator --alice
```

## Send `store` transaction

```bash
$ yarn
$ node index.js
cid: bagqoiava4qbcbkxkd5cfkz24f54ae2elk4osabg4h5nuyyy7otjh6mfl5rl5ql5y
txHash: 0xf651bf6e2c1064e6757b5966cdbf0b0dd49aa8559081c8c3bef82bc9a435db3d
```

## Try the IPFS feature

```bash
# Fetch the substrate peer address from `system_localListenAddresses`
$ ipfs swarm connect /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWN7VgASM7jBa3wB9JLZnxUuK9S9vayWSAcsCVHGmA5wBC

# Try to get the data via ipfs.
$ ipfs block get /ipfs/bagqoiava4qbcbkxkd5cfkz24f54ae2elk4osabg4h5nuyyy7otjh6mfl5rl5ql5y
```
