// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, query){
  return collection.filter(element => {return element.toLowerCase() === query.toLowerCase()});
};

function fuzzyMatch(collection, query){
  return collection.filter(element => {
    if(element.substring(0, query.length).match(query)){
      return element;
    };
  });
};

function matchName(driverCollection, query){
  return driverCollection.filter(driver =>  {return driver.name === query})
}