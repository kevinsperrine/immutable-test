import { Map } from 'immutable';

type SimpleObject = { id: string; name: string };

const arrayData = [
  ['ghi789', { id: 'ghi789', name: 'ghi789' }],
  ['def456', { id: 'def456', name: 'def456' }],
  ['abc123', { id: 'abc123', name: 'abc123' }]
];

/**
 * src/immutable.ts(11,42): error TS2345: Argument of type '(string | { id: string; name: string; })[][]' is not assignable to parameter of type 'Iterable<[string, SimpleObject]>'.
  Types of property '[Symbol.iterator]' are incompatible.
    Type '() => IterableIterator<(string | { id: string; name: string; })[]>' is not assignable to type '() => Iterator<[string, SimpleObject]>'.
      Type 'IterableIterator<(string | { id: string; name: string; })[]>' is not assignable to type 'Iterator<[string, SimpleObject]>'.
        Types of property 'next' are incompatible.
          Type '(value?: any) => IteratorResult<(string | { id: string; name: string; })[]>' is not assignable to type '(value?: any) => IteratorResult<[string, SimpleObject]>'.
            Type 'IteratorResult<(string | { id: string; name: string; })[]>' is not assignable to type 'IteratorResult<[string, SimpleObject]>'.
              Type '(string | { id: string; name: string; })[]' is not assignable to type '[string, SimpleObject]'.
                Property '0' is missing in type '(string | { id: string; name: string; })[]'.
 */
const mapOne = Map<string, SimpleObject>(arrayData);

const objectData = {
  ghi789: { id: 'ghi789', name: 'ghi789' },
  def456: { id: 'def456', name: 'def456' },
  abc123: { id: 'abc123', name: 'abc123' }
};

/**
 * Argument of type '{ ghi789: { id: string; name: string; }; def456: { id: string; name: string; }; abc123: { id: str...' is not assignable to parameter of type 'Iterable<[string, SimpleObject]>'.
  Property '[Symbol.iterator]' is missing in type '{ ghi789: { id: string; name: string; }; def456: { id: string; name: string; }; abc123: { id: str...'.
 */
const mapTwo = Map<string, SimpleObject>(objectData);
