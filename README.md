# Test Substrate Storage Chain

## Running a dev chain

```bash
$ rm -rf tmp && ./target/release/substrate --dev -d tmp --ipfs-server --keep-blocks=100800
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

# Try to get the data via ipfs, but this somehow hungs forever and returns nothing.
$ ipfs block get /ipfs/bagqoiava4qbcbkxkd5cfkz24f54ae2elk4osabg4h5nuyyy7otjh6mfl5rl5ql5y
```
