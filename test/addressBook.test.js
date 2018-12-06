const chai = require('chai')
const expect = chai.expect
const AddressBook = require('../models/addressBook.js')
const Person = require('../models/person.js')

describe('AddressBook', function() {

  it('initialise properly', function(){
    book = new AddressBook
    expect(book.entries).to.deep.equal([])
  })

  it('can add people to the book', function(){
    book = new AddressBook
    person = new Person ('joe', 'Bloggs', '1 Jan 1990')
    book.add(person)

    expect(book.entries.length).to.equal(1)
    expect(book.entries[0].firstName).to.equal('Joe')
    expect(book.entries[0].dob).to.equal('1 Jan 1990')

  })

  it('can search by first name and return an array of relevent people', function(){
    book = new AddressBook
    person1 = new Person('Amie', 'Dooley', '1 oct 1994')
    person2 = new Person('Alex', 'Jones', '1 dec 1995')
    person3 = new Person('joe', 'Bloggs', '1 jan 1994')
    person4 = new Person('Jamie', 'Priest', '1 jan 1997')
    book.add(person1)
    book.add(person2)
    book.add(person3)
    book.add(person4)
    expect(book.findByFirstName('amie')).to.deep.equal([person1, person4])
  })

  it('can search by last name and return an array of relevent people', function(){
    book = new AddressBook
    person1 = new Person('Amie', 'Dooley', '1 oct 1994')
    person2 = new Person('Alex', 'Leyland', '1 dec 1995')
    person3 = new Person('joe', 'Bloggs', '1 jan 1994')
    person4 = new Person('Amie', 'Jones', '1 jan 1997')
    book.add(person1)
    book.add(person2)
    book.add(person3)
    book.add(person4)
    expect(book.findByLastName('ley')).to.deep.equal([person1, person2])
  })


  it('should save all entries data to a JSON file', function(){
    book = new AddressBook
    person1 = new Person('Amie', 'Dooley', '1 oct 1994')
    person2 = new Person('Alex', 'Jones', '1 dec 1995')
    person3 = new Person('joe', 'Bloggs', '1 jan 1994')
    person4 = new Person('Amie', 'Jones', '1 jan 1997')
    book.add(person1)
    book.add(person2)
    book.add(person3)
    book.add(person4)
    expect(book.save()).to.equal('save file was created')
  })

})
