
var fs = require('fs')


class AddressBook {

  constructor(){
    this.entries = []
  }

  add(person){
    this.entries.push(person)
  }

  findByFirstName(string){
    var result = []
    for(var i = 0; i < this.entries.length; i++){
        var firstNameLower = this.entries[i].firstName.toLowerCase()

      if(firstNameLower.includes(string.toLowerCase())){
        result.push(this.entries[i])
      }
    }
    return result
  }

  findByLastName(name){
    var result = []
    for(var i = 0; i < this.entries.length; i++){
      var lastNameLower = this.entries[i].lastName.toLowerCase()

      if(lastNameLower.includes(name.toLowerCase())){
        result.push(this.entries[i])
      }
    }
    return result
  }
  save(){
    var data = JSON.stringify(this.entries)
    fs.writeFileSync('addressbook.JSON', data)
    return 'save file was created'
  }

}


module.exports = AddressBook
