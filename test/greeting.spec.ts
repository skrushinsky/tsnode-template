import 'mocha';
import { assert } from 'chai';
import { greeting } from '../src/greeting';

describe('Test example', () => {
  it('Greeting with a given name', () => {
    assert.equal(greeting('Bob'), 'Hello, Bob!');
  });

  it('Greeting without name', () => {
    assert.equal(greeting(), 'Hello, Sir!');
  });
});
