import { ScopeBase } from '../../../src/scope/ScopeBase';
import { createSerializer } from './baseSerializer';

// hacking around the fact that you can't use abstract classes generically
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ScopeInstance extends ScopeBase<any, any, any> {}
export const serializer = createSerializer(
  ScopeBase,
  [
    //
    'block',
    'isStrict',
    'references',
    'set',
    'type',
    'upper',
    'variables',
  ],
  ScopeInstance,
);
