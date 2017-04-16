import Picto from '../src/app';
import {expect} from 'chai'

describe('testing picto', function() {
  const thingOne = new Picto('test1');

  beforeEach(function() {
    thingOne.Name = "test2";
  });

  it('has a new name', function() {
    expect(thingOne.Name).to.equal('san diego');
  });
})
