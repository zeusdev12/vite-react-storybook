import curve from "@curvefi/api";

enum SLIPPAGE_TYPE {
  DEPOSIT_BONUS,
  WITHDRAW_IMBALANCE_BONUS,
  WITHDRAW_ONECOIN_BONUS,
  SWAP_PRICE_IMPACT,
}

export const curveInit = async () => {
  console.log("Curve init start");
  await curve.init(
    "Infura",
    { network: "homestead", apiKey: `${process.env.VITE_INFURA_API_KEY}` },
    { chainId: 1 }
  );
  await curve.factory.fetchPools();
  await curve.cryptoFactory.fetchPools();
  console.log("Curve init finished");
};

export const findCurveBestRoute = async (
  amountIn: string, 
  tokenIn: string,
  tokenOut: string,
) => {
  // const pools = [
  //   ...curve.getPoolList(),
  //   ...curve.factory.getPoolList(),
  //   ...curve.cryptoFactory.getPoolList(),
  // ];

  const { route, output } = await curve.router.getBestRouteAndOutput(tokenIn, tokenOut, amountIn);
  return { route, output }
}