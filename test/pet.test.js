const chai = require('chai')
const expect = chai.expect
const Pet = require('../models/pet.js')

describe('Pet', function() {

  it('initialise properly', function(){
    pet = new Pet('Andy', 'dog')
    expect(pet.name).to.equal('andy')
    expect(pet.type).to.equal('dog')
  })



})
