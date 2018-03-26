import { Map } from 'immutable';

type SimpleObject = { id: string; name: string };

const arrayData = [
  ['ghi789', { id: 'ghi789', name: 'ghi789' }],
  ['def456', { id: 'def456', name: 'def456' }],
  ['abc123', { id: 'abc123', name: 'abc123' }]
];

const mapOne = Map<string, SimpleObject>(arrayData);

const objectData = {
  ghi789: { id: 'ghi789', name: 'ghi789' },
  def456: { id: 'def456', name: 'def456' },
  abc123: { id: 'abc123', name: 'abc123' }
};

const mapTwo = Map<string, SimpleObject>(objectData);
