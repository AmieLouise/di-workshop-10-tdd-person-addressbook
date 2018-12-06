const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')
const Pet = require('../models/pet.js')
// Your Person test goes here!
describe('Person', function() {


  it ('should initialise properly', function(){
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    expect(person.firstName).to.equal('Joe')
    expect(person.lastName).to.equal('Bloggs')
    expect(person.dob).to.equal('1 Jan 1990')
    expect(person.emails).to.deep.equal([])
  })

  it('should Capitalize first Name', function(){
    var person = new Person ('joe', 'Bloggs', '1 Jan 1990')

    expect(person.firstName).to.equal('Joe')
  })

  it ('should return first name and last name', function(){
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    expect(person.fullName()).to.equal('Joe Bloggs')
  })

  it ('should accept email and add to array', function(){
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addEmail('joe@example.com')
    person.addEmail('joeblogg@example.com')
    expect(person.emails).to.deep.equal(['joe@example.com', 'joeblogg@example.com'])
  })

  it ('should accept a number and add to an array', function(){
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')

    person.addNumber('07856937163')
    person.addNumber('07784273647')
    expect(person.phoneNumbers).to.deep.equal(['07856937163', '07784273647'])
  })

  it('should return a string conmtaining array elements', function(){
    var person = new Person ('Joe', 'Bloggs', '1 Jan 1990')
    person.addEmail('joe@example.com')
    person.addEmail('joeblogg@example.com')

  expect(person.arrayToString(person.emails)).to.equal('joe@example.com\njoeblogg@example.com\n')
  })

  it('should return a string conmtaining array elements', function(){
    var person = new Person ('Joe', 'Bloggs', '1 Jan 1990')
    person.addNumber('07856937163')
    person.addNumber('07784273647')

  expect(person.arrayToString(person.phoneNumbers)).to.equal('07856937163\n07784273647\n')
  })

  it('should return a well formatted multi-line string', function(){
    var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
    person.addEmail('joe@example.com')
    person.addEmail('joeblogg@example.com')
    person.addNumber('07856937163')
    person.addNumber('07784273647')

    expect(person.retrunFormattedDetails()).equal('Joe Bloggs\n--------------\nDOB: 1 Jan 1990\njoe@example.com\njoeblogg@example.com\n07856937163\n07784273647\n')
  })

  it('should return a well formatted multi-line string', function(){
    var person = new Person('Amy', 'Noth', '2 Jan 1993')
    person.addEmail('amy@example.com')
    person.addEmail('amynoth@example.com')
    person.addNumber('07856937163')

    expect(person.retrunFormattedDetails()).equal('Amy Noth\n--------------\nDOB: 2 Jan 1993\namy@example.com\namynoth@example.com\n07856937163\n')
  })

  it('should add a pet object to the pets array', function(){
    person = new Person('Joe', 'Bloggs', '1 Jan 1990')
    pet1 = new Pet('AdaCat', 'cat')
    pet2 = new Pet('Rover', 'dog')
    pet3 = new Pet('Nemo', 'goldfish')
    person.addPet(pet1)
    person.addPet(pet2)
    person.addPet(pet3)

    expect(person.pets).to.deep.equal([pet1, pet2, pet3])
  })


})
