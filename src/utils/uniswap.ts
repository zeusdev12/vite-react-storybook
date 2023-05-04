import { AlphaRouter, RouteWithValidQuote, V3Route, V2Route, MixedRoute, SwapType, SwapOptionsSwapRouter02 } from "@uniswap/smart-order-router";
import { CurrencyAmount, Percent, TradeType, Token } from "@uniswap/sdk-core";
import _ from 'lodash';
import { Protocol } from "@uniswap/router-sdk";
import { JsonRpcProvider as Provider } from "@ethersproject/providers";
import { Pool } from "@uniswap/v3-sdk";

const provider = new Provider(`https://eth-mainnet.alchemyapi.io/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`, 1);
const user = '0x661fB502E24Deb30e927E39A38Bd2CC44D67339F';
const router = new AlphaRouter({
  chainId: 1,
  provider: provider
})

export const findUniswapBestRoute = async (
  amountOut: string, 
  tokenIn: string,
  tokenInDecimal: number,
  tokenInSymbol: string,
  tokenOut: string,
  tokenOutDecimal: number,
  tokenOutSymbol: string
) => {
  const options: SwapOptionsSwapRouter02 = {
    recipient: user,
    slippageTolerance: new Percent(50, 10_000),
    deadline: Math.floor(Date.now() / 1000 + 1800),
    type: SwapType.SWAP_ROUTER_02,
  }

  const tokenAmountOut = CurrencyAmount.fromRawAmount(
    new Token(1, tokenOut, tokenOutDecimal, tokenOutSymbol),
    amountOut
  );

  const route = await router.route(
    tokenAmountOut,
    new Token(1, tokenIn, tokenInDecimal, tokenInSymbol),
    TradeType.EXACT_OUTPUT,     // promise the amountOut
    options
  )
  
  return route ? parseRoute(route.route) : null;
}

const parseRoute = (
  routeAmounts: RouteWithValidQuote[]
) => {
  const total = _.reduce(
    routeAmounts,
    (total: CurrencyAmount<any>, cur: RouteWithValidQuote) => {
      return total.add(cur.amount);
    },
    CurrencyAmount.fromRawAmount(routeAmounts[0]!.amount.currency, 0)
  );

  const bestRoute: V3Route | V2Route | MixedRoute | undefined = _.maxBy(routeAmounts, ({ amount }) => {
    const portion = amount.divide(total);
    const percent = new Percent(portion.numerator, portion.denominator);
    console.log('Best Route Percents: ', Number(percent.toFixed(2)));
    return Number(percent.toFixed(2));
  })?.route;

  const tokens =
  bestRoute?.protocol === Protocol.V3
      ? bestRoute.tokenPath
      : // MixedRoute and V2Route have path
      bestRoute?.path;
  const tokenPath = _.map(tokens, (token) => `${token.symbol}`);
  const poolFees =
  bestRoute?.protocol === Protocol.V3 || bestRoute?.protocol === Protocol.MIXED
      ? bestRoute.pools.map((pool) => (pool as Pool).fee)
      : bestRoute?.pairs.map((pair) => 3000);

  return { tokenPath, poolFees }
};