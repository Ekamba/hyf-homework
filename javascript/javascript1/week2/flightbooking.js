function getFullname(firstname, surname, useFormalName) {
    if (firstname === ' ' || surname === ' ') {
      return 'Add name';
  }
  else if (useFormalName) {
      return `Lord ${firstname} ${surname}`;
  }else {
      return `${firstname} ${surname}`;
  }
}

   const fullname1 = getFullname('Benjamin', 'Hughes', true)
   const fullname2 = getFullname('Benjamin', 'Hughes', false)

console.log(fullname1)
console.log(fullname2)
/*console.log(getFullname('Benjamin', 'Hughes', true))*/ 
