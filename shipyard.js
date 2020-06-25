import createNewSpaceship from './createNewSpaceship.js';
import createNewCrewMember from './createNewCrewMember.js';

const crewNames = ["Ashley Kane", "Brendan Montima", "Cherish Kim", "Dan Alberts", "Jeremy Sim", "John Bobst", "J Pinoodle", "Kara Ducasse", "Ria Mahoney", "Russ Moore", "Thomas Murphy"];

let trainCrew = (arrayForCrewNames) => {
    let crewMemberArray;
    crewMemberArray = arrayForCrewNames.map((strCrewName) => {
        let crewObject = createNewCrewMember(strCrewName);
        crewObject.trained = true;
        return crewObject;
    });
    return crewMemberArray;
} 
let ourShip = createNewSpaceship("VMwareLaunch");
let crewMembers = trainCrew(crewNames);// Calling step 3, line 6
ourShip.loadCrew(crewMembers);

let launchpad = (ship) => {
    console.log("Initiating preflight procedures");
    console.log(`Welcome aboard the ${ship.name}, v2! (v1 didn't go so well.)`);
    //Announce the crew by using a for-of loop 
    for (let crewMember of ship.crew) {
      console.log(`${crewMember.name} is now aboard the Waverider.`);
    }

}

launchpad(ourShip);