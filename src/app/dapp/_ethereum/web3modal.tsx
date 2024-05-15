"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import { siweConfig } from "./siweConfig";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not set");
}

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "Blockchain Raffle",
  description: "Blockchain Raffle",
  url: "http://localhost:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
});

// 5. Create a Web3Modal instance

createWeb3Modal({
  siweConfig,
  ethersConfig, // or ethersConfig
  projectId,
  chains: [mainnet],
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return children;
}
