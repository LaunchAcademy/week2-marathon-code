const createNewCrewMember = (strName) => {
    let jsonNewMember = {
        name: strName,
        trained: false
    }
    return jsonNewMember;
}
// export our function so it can be imported in other files
export default createNewCrewMember
