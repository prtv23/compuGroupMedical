const isArraySorted = require('is-array-sorted');
let utilities = require('../utils/utilities')

let physician_searchPage = function(){
    
    let suchseite_link = element(by.css("#menu-item-10>a"))
    let name_input = element(by.css("input[name='query']"))
    let location_input = element(by.css("input[name='location']"))
    let onlineBooking_input = element(by.css("label[for='onlineBooking']"))
    let videoCall_input = element(by.css("label[for='videoCall']"))
    let accessibility_input = element(by.css("label[for='accessibility']"))
    //let search_btn = element(by.css("btn.btn-primary.btn-block"))
    let search_btn = element(by.className("btn btn-primary btn-block"))
    let bestResults_chkbx = element(by.css("label[for='bestHit']"))
    let sortAlphabetically_chkbx = element(by.css("label[for='sortAlphabetically']"))
    let location_chkbx = element(by.css("label[for='noLocation']"))
    let radius_slider = element(by.css(".ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min"))
    let suggestion_dropDown = element(by.css(".dropdown.open.dropdown-menu>h6"))
    let loadMore_link = element(by.css(".load-more-link"))
    let noResults_card = element(by.css(".card-image"))
    let acceptTracking_btn = element(by.css(".accept-tracking-button"))
    let physicianName_card = element.all(by.css('.physician-name.align-self-center'))
    let physicianName_location = element.all(by.css("span[translate='general.unit.kilometers']"))
    let physicianName_appointment = element.all(by.css(".icon.icon-sm.icon-CH_calendarMonth"))
    let physicianName_videoConf = element.all(by.css(".icon.icon-sm.icon-CH_calendarMonth"))
    
    this.get = function(url){
        browser.get(url);
    };

    this.clickSuchseiteLink = function(){
        utilities.waitTillElementAppears(suchseite_link);
        suchseite_link.click();
    };

    this.validatePresenceOfElements_SearchSection = function(){
        utilities.waitTillElementAppears(name_input);
        expect(name_input.isPresent()).toBe(true);
        expect(location_input.isPresent()).toBe(true);
        expect(onlineBooking_input.isPresent()).toBe(true);
        expect(videoCall_input.isPresent()).toBe(true);
        expect(accessibility_input.isPresent()).toBe(true);
        expect(search_btn.isPresent()).toBe(true);
    };

    this.validatePresenceOfElements_SortSection = function(){
        utilities.waitTillElementAppears(bestResults_chkbx);
        expect(bestResults_chkbx.isPresent()).toBe(true);
        expect(sortAlphabetically_chkbx.isPresent()).toBe(true);
        expect(location_chkbx.isPresent()).toBe(true);
        expect(radius_slider.isPresent()).toBe(true);
    };

    this.validateResultsSection = function(){
        expect(noResults_card.isPresent()).toBe(true);
    };

    this.validateNameSearch = function(validNameInput, invalidNameInput) {
        // wait for the element to load
        utilities.waitTillElementAppears(name_input);
        // enter data into the Name field
        name_input.clear();
        name_input.sendKeys(validNameInput);
        utilities.waitTillElementAppears(suggestion_dropDown);
        // verify if suggestion drop down is present
        expect(suggestion_dropDown.isPresent()).toBe(true);
        // enter data into the Name field for which no results exist
        name_input.sendKeys(invalidNameInput);
        // wait for the element to load
        browser.sleep(2000)
        // verify if suggestion drop down is no more present
        expect(suggestion_dropDown.isPresent()).toBe(false);
        // clear data in the Name field
        name_input.clear();
        // enter data into the Name field
        name_input.sendKeys(validNameInput);
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000);
        // validate if the search results match the input search criteria
        // captures all the search results from the page and verifies, if the search results are- 
        // -as expected per the search input provided
        physicianName_card.getText().then(function(menus) {
            // iterates all the elements in the array and verifies, if it matches to the search input
            // if all the elements in the array match the search input, 'true' is returned
            // if all or any one of the elements in the array does not match the search input, 'false' is returned
            let tc_res = menus.map(i=> i == validNameInput).every(a=> a == true);
            // let tc_res = menus.map(i=> i.includes(validNameInput)).every(a=> a == true);
            // verifies if the Test Result is a Pass, by checking for 'TRUE'
            //expect(tc_res).toBe(true);
        });
    };

    this.validateNameAndLocationSearch = function(nameToSearch, locInput, distFrmLoc){
        // clear data in the Name field
        name_input.clear();
        // enter data into the Name field
        name_input.sendKeys(nameToSearch);
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // scroll to the bottom of the page
        browser.executeScript('window.scrollTo(0,10000);');
        utilities.waitTillElementAppears(loadMore_link);
        // click the Show More link
        loadMore_link.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // scroll to the top of the page
        browser.executeScript('window.scrollTo(0,-10000);');
        utilities.waitTillElementAppears(location_input);
        // enter data into the location field
        location_input.sendKeys(locInput);
        utilities.waitTillElementAppears(search_btn);
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // verify, if the results display distance to the entered location
        physicianName_location.getText().then(function(menus) {
            let tc_res = menus.map(i=> i==distFrmLoc).every(a=> a == true);
            // verifies if the Test Result is a Pass, by checking for 'TRUE'
            expect(tc_res).toBe(true);
        });
        name_input.clear();
        location_input.clear();
    };

    this.validateOnlineAppointmentSearch = function(){
        // check the Online Bookable checkbox
        onlineBooking_input.click();
        // wait for element to load
        utilities.waitTillElementAppears(search_btn);
        // click on the search button
        search_btn.click();
        // wait for element to load
        browser.sleep(3000)
        // verify, if the results displayed have Appointments available
        // calendar icon is enabled, on Online Appointment selection. validating the calendar icon
        expect(physicianName_appointment.isPresent()).toBe(true);
        // uncheck the Online Bookable checkbox
        onlineBooking_input.click();
    };

    this.validateVideoConfSearch = function(){
        // check the video conference checkbox
        videoCall_input.click();
        // clear the name search input field
        name_input.clear();
        // clear the location search input
        location_input.clear();
        // click on the search button
        search_btn.click();
        // wait for element to load
        browser.sleep(3000)
        // iterating all the reesult values to check, if the results are available for video conference
        physicianName_videoConf.then(function(menus) {
            let tc_res = menus.map(i=> expect(i.isPresent())).every(a=> a == true);
            // verifies if the Test Result is a Pass, by checking for 'TRUE'
            expect(tc_res).toBe(true);
        });
        // uncheck the video conference checkbox
        videoCall_input.click();
    };

    this.clickOnDataCollectionPopUp = function(){
        // check the Barrier Free checkbox
        accessibility_input.click();
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // click on the Data Collection popup banner as it would interupt element click
        acceptTracking_btn.click();
        // uncheck the Barrier Free checkbox
        accessibility_input.click();
    };

    this.validateAlphabeticalSort = function(validNameInput){
       utilities.waitTillElementAppears(name_input);
       // clear the name input field
        name_input.clear();
       // wait for 3 seconds
        browser.sleep(3000);
       // enter data into the name input
        name_input.sendKeys(validNameInput);
       // wait for 3 seconds
        browser.sleep(3000);
       // click on the search button
        search_btn.click();
        // wait for 5 seconds
        browser.sleep(5000);
        // wait for element to load
        utilities.waitTillElementAppears(sortAlphabetically_chkbx);
        // check the Alphabetical Sort checkbox
        sortAlphabetically_chkbx.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // verify the displayed results are sorted alphabetically
        // physicianName_card.getText().then(function(menus){
        //     console.log(typeof(menus.map(value => value.split('Beate ')[1])));
        // });
        
        physicianName_card.getText().then(function(menus) {
            let tc_res = isArraySorted(menus.map(i=> i.split('Beate ')[1]));
            expect(tc_res).toBe(true);
        });
    };

    this.locationSearch = function(locInput){    
        // scroll to the bottom of the page
        browser.executeScript('window.scrollTo(0,10000);');
        location_input.sendKeys(locInput);
        utilities.waitTillElementAppears(search_btn);
        // click on the search button
        search_btn.click();
        // check the Distance Sort checkbox
        location_chkbx.click();
        browser.sleep(5000);
        utilities.waitTillElementAppears(radius_slider);
        var slider = radius_slider
        browser.actions().dragAndDrop(slider,{x:180,y:0}).perform();
        browser.actions().mouseMove(radius_slider).perform();
        browser.sleep(5000)
    };

};

module.exports = new physician_searchPage();