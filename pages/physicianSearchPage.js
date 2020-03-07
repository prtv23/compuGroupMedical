let physician_searchPage = function(){
    
    let suchseite_link = element(by.css("#menu-item-10>a"))
    let name_input = element(by.css("input[name='query']"))
    let location_input = element(by.css("input[name='location']"))
    let onlineBooking_input = element(by.css("label[for='onlineBooking']"))
    let videoCall_input = element(by.css("label[for='videoCall']"))
    let accessibility_input = element(by.css("label[for='accessibility']"))
    let search_btn = element(by.css(".btn.btn-primary.btn-block"))
    let bestResults_chkbx = element(by.css("label[for='bestHit']"))
    let sortAlphabetically_chkbx = element(by.css("label[for='sortAlphabetically']"))
    let location_chkbx = element(by.css("label[for='noLocation']"))
    let radius_slider = element(by.css(".ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min"))
    let suggestion_dropDown = element(by.css(".dropdown.open.dropdown-menu>h6"))
    let loadMore_link = element(by.css(".load-more-link"))
    let locationValue_dropDown = element(by.cssContainingText('span', '5657'))
    let noResults_card = element(by.css(".card-image"))
    let acceptTracking_btn = element(by.css(".accept-tracking-button"))


    this.get = function(url){
        browser.get(url);
    };

    this.clickSuchseiteLink = function(){
        suchseite_link.click();
    };

    this.validatePresenceOfElements_SearchSection = function(){
        expect(name_input.isPresent()).toBe(true);
        expect(location_input.isPresent()).toBe(true);
        expect(onlineBooking_input.isPresent()).toBe(true);
        expect(videoCall_input.isPresent()).toBe(true);
        expect(accessibility_input.isPresent()).toBe(true);
        expect(search_btn.isPresent()).toBe(true);
    };

    this.validatePresenceOfElements_SortSection = function(){
        expect(bestResults_chkbx.isPresent()).toBe(true);
        expect(sortAlphabetically_chkbx.isPresent()).toBe(true);
        expect(location_chkbx.isPresent()).toBe(true);
        expect(radius_slider.isPresent()).toBe(true);
    };

    this.validateResultsSection = function(){
        expect(noResults_card.isPresent()).toBe(true);
    };

    this.validateNameSearch = function(validNameInput, invalidNameInput) {
        // enter data into the Name field
        name_input.sendKeys(validNameInput);
        // wait for the element to load
        browser.sleep(2000)
        // verify if suggestion drop down is present
        expect(name_input.isPresent()).toBe(true);
        // enter data into the Name field
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
        // wait for  seconds
        browser.sleep(3000)
    };

    this.clickShowMoreLink = function(){
        // scroll to the bottom of the page
        browser.executeScript('window.scrollTo(0,10000);');
        // wait for 3 seconds
        browser.sleep(3000)
        // click the Show More link
        loadMore_link.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // scroll to the top of the page
        browser.executeScript('window.scrollTo(0,-10000);');
        // wait for 3 seconds
        browser.sleep(3000)
        // enter data into the location field
        location_input.sendKeys("5657");
        // wait for 3 seconds
        browser.sleep(3000)
        // click drop down value
        locationValue_dropDown.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
    };

    this.performAllSearchActions = function(){
        // check the Online Bookable checkbox
        onlineBooking_input.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // uncheck the Online Bookable checkbox
        onlineBooking_input.click();
        // check the video conference checkbox
        videoCall_input.click();
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // uncheck the video conference checkbox
        videoCall_input.click();
        // chceck the Barrier Free checkbox
        accessibility_input.click();
        // click on the search button
        search_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // click on the Data Collection popup banner as it would interupt element click
        acceptTracking_btn.click();
        // wait for 3 seconds
        browser.sleep(3000)
        // check the Alphabetical Sort checkbox
        sortAlphabetically_chkbx.click();
        // wait for 3 seconds : Should use browser.sleep as the lement is already loaded
        browser.sleep(3000)
        // check the Distance Sort checkbox
        location_chkbx.click();
        // wait for 3 seconds
        browser.sleep(3000)  
        // drag slider
        var slider = radius_slider
        browser.actions().dragAndDrop(slider,{x:90,y:0}).perform();
        browser.sleep(5000)
    };

};

module.exports = new physician_searchPage();
