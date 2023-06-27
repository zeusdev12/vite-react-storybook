import curve from "@curvefi/api";
import { useCallback, useState } from "react";

enum SLIPPAGE_TYPE {
  DEPOSIT_BONUS,
  WITHDRAW_IMBALANCE_BONUS,
  WITHDRAW_ONECOIN_BONUS,
  SWAP_PRICE_IMPACT,
}

export const useCurveInit = () => {
  const [loading, setLoading] = useState(true);
  const curveInit = useCallback( async () => {
    setLoading(true);
    console.log("Curve init start");
    
    await curve.init(
      "Infura",
      { network: "homestead", apiKey: `${process.env.VITE_INFURA_API_KEY}` },
      { chainId: 1 }
    );
    await curve.factory.fetchPools();
    await curve.cryptoFactory.fetchPools();

    setLoading(false);
    console.log("Curve init finished");
  }, []);

  return { curveInit, loading };
}

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