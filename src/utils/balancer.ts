import { BalancerSDK } from '@balancer-labs/sdk';

const sdk = new BalancerSDK({
  network: 1,
  rpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`
});

export const findBalancerBestRoute = async (
  amountIn: string, 
  tokenIn: string,
  tokenInDecimal: number,
  tokenInSymbol: string,
  tokenOut: string,
  tokenOutDecimal: number,
  tokenOutSymbol: string
) => {
  const BALANCER_POOLIDS: { [key: string]: string } = {
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d':
      'BAL_BB_A_USD_LP',
    '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080':
      'BAL_WSTETH_WETH_LP',
    '0x1e19cf2d73a72ef1332c882f20534b6519be0276000200000000000000000112':
      'BAL_RETH_WETH_LP',
  };
  
  const pools = await sdk.pools.where((pool) =>
    Object.keys(BALANCER_POOLIDS).includes(pool.id)
  );
  
  const result = await Promise.all(
    pools.map(async (pool) => {
      const ret = await sdk.pools.apr(pool);
      return {
        ...ret,
        symbol: BALANCER_POOLIDS[pool.id],
      };
    })
  );

  console.log(result);
}
