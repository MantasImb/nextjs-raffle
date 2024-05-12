export async function getCurrencyPriceInDollar(
  currencyAddress: string,
  chainId: number,
) {
  return 3570;
}

export async function getEthPriceInDollar() {
  return 3570;
}

export function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
