// store user data in object for ease of use and readability...

let PhysicianSearchData = function() {
    
    // data to search physician by name
    this.validName = 'Beate'
    this.invalidName = 'Beate Huffy!!!!!!!'
    
    // data to search physician by name & location
    this.nameToSearch = 'Beate';
    this.locInput = '56567 Neuwied (Feldkirchen)';
    this.distFrmLoc = 'km'
};

module.exports = new PhysicianSearchData();