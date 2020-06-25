// create a new spaceship with name = newShipName
const createNewSpaceship = (newShipName) => {
  let jsonNewShip = {
    name: newShipName,
    crew: [],
    loadCrew: (alCrewMembers)=> {
        alCrewMembers.forEach(element => {
            jsonNewShip.crew.push(element);
        });
    },
  };
  return jsonNewShip;
}
// export our function so it can be imported in other files
export default createNewSpaceship;
