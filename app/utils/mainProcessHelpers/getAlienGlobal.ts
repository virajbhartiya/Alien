import { AlienGlobal } from './AlienGlobal';

export default () => {
  return (global as unknown) as AlienGlobal;
};
