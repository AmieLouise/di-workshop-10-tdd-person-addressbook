class Person {

  constructor(firstName, lastName, dob){
    this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    this.lastName = lastName
    this.dob = dob
    this.emails = []
    this.phoneNumbers = []
    this.pets = []
  }

  fullName(){
    return this.firstName + ' ' + this.lastName
  }

  addEmail(email){
    this.emails.push(email)
  }

  addNumber(number){
    this.phoneNumbers.push(number)
  }

  arrayToString(array){
    var output = ''
    for(var i = 0; i< array.length; i++){
      output = output + array[i] + '\n'
    }
    return output
  }

  retrunFormattedDetails(){
    var sectionName = this.firstName + ' ' + this.lastName
    var sectionBreaker = '--------------'
    var sectionDob =  'DOB: ' + this.dob
    var sectionEmails = this.arrayToString(this.emails)
    var sectionNumbers = this. arrayToString(this.phoneNumbers)

    return sectionName + '\n' + sectionBreaker + '\n' + sectionDob + '\n' + sectionEmails  + sectionNumbers
  }

  addPet(pet){
    this.pets.push(pet)
  }

}



module.exports = Person







  }
}
