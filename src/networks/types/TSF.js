//import tokens from '@/tokens/tokens-tsf.json';
import contracts from '@/contracts/contract-abi-tsf.json';
import etc from '@/assets/images/networks/tsf.svg';
// import { EthAbi } from '../ensAbis';

export default {
  name: 'TSF',
  name_long: 'Teslafunds',
  homePage: 'https://teslafunds.io/',
  blockExplorerTX: 'https://tsfexplorer.xyz/tx/[[txHash]]',
  blockExplorerAddr: 'https://tsfexplorer.xyz/address/[[address]]',
  chainID: 56,
//  tokens: tokens,
  contracts: contracts,
  ensResolver: '',
  ensAbi: '',
  icon: etc
};
