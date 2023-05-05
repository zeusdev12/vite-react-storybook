import curve from "@curvefi/api";

enum SLIPPAGE_TYPE {
  DEPOSIT_BONUS,
  WITHDRAW_IMBALANCE_BONUS,
  WITHDRAW_ONECOIN_BONUS,
  SWAP_PRICE_IMPACT,
}

export const curveInit = async () => {
  await curve.init(
    "Infura",
    { network: "homestead", apiKey: `${import.meta.env.VITE_INFURA_API_KEY}` },
    { chainId: 1 }
  );
  await curve.factory.fetchPools();
  await curve.cryptoFactory.fetchPools();
};

export const findCurveBestRoute = async (
  amountOut: string, 
  tokenIn: string,
  tokenInDecimal: number,
  tokenInSymbol: string,
  tokenOut: string,
  tokenOutDecimal: number,
  tokenOutSymbol: string
) => {
  const pools = [
    ...curve.getPoolList(),
    ...curve.factory.getPoolList(),
    ...curve.cryptoFactory.getPoolList(),
  ];

  // const poolName = pools.find(
  //   (name) =>
  //     curve.getPool(name).address.toLowerCase() === poolAddress.toLowerCase()
  // );
  // const pool = curve.getPool(poolName || "");
  // const amounts = new Array<string>(pool.underlyingCoins.length).fill("0");
  // console.log(pool.underlyingCoins);

  // if (type === SLIPPAGE_TYPE.DEPOSIT_BONUS) {
  //   amounts[fromIndex] = amount.toString();
  //   return await pool.depositBonus(amounts);
  // }

  // if (type === SLIPPAGE_TYPE.WITHDRAW_IMBALANCE_BONUS) {
  //   amounts[fromIndex] = amount.toString();
  //   return await pool.withdrawImbalanceBonus(amounts);
  // }

  // if (type === SLIPPAGE_TYPE.WITHDRAW_ONECOIN_BONUS) {
  //   return await pool.withdrawOneCoinBonus(amount.toString(), toIndex);
  // }

  // if (type === SLIPPAGE_TYPE.SWAP_PRICE_IMPACT) {
  //   return await pool.swapPriceImpact(fromIndex, toIndex, amount.toString());
  // }

  return 0;
}