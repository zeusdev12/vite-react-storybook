import { BalancerSDK } from '@balancer-labs/sdk';
import { BigNumber } from 'ethers';
import { useCallback, useState } from 'react';

const sdk = new BalancerSDK({
  network: 1,
  rpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.VITE_ALCHEMY_API_KEY}`
});

export const useBalancerInit = () => {
  const [loading, setLoading] = useState(true);
  const balancerInit = useCallback( async () => {
    setLoading(true);
    console.log("Balancer init start")
    
    await sdk.swaps.fetchPools();

    setLoading(false);

    console.log("Balancer init finished")
  }, []);

  return { balancerInit, loading };
}

export const findBalancerBestRoute = async (
  amountIn: string, 
  tokenIn: string,
  tokenOut: string,
  maxPool: number
) => {
  const route = await sdk.swaps.findRouteGivenIn({
    tokenIn,
    tokenOut,
    amount: BigNumber.from(amountIn),
    gasPrice: BigNumber.from(0),
    maxPools: maxPool
  });

  return route;
}
