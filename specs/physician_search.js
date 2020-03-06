describe('invalid login functionality tests', function(){

    var originalTimeout;

    // increase the default wait time of jasmine framework to synchronize with the speed of the app
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('invalid login check', function(){

        // not to wait for Angular $http and $timeout
        browser.waitForAngularEnabled(false);

        // loading the browser url
        browser.get('https://demo.clickdoc.de/cms-de/');
        
        // maximize browser window
        browser.driver.manage().window().maximize();
        
        // wait for the profile icon to load into DOM
        browser.sleep(5000);

        // click on the Suchseite icon
        element(by.css("#menu-item-10>a")).click();

        // wait for the element to load
        browser.sleep(5000)

        // verify if specialisation/name input field is present
        expect(element(by.css("input[name='query']")).isPresent()).toBe(true);

        // verify if location input field is present
        expect(element(by.css("input[name='location']")).isPresent()).toBe(true);

        // verify if onlineBooking checkbox is present
        expect(element(by.css("label[for='onlineBooking']")).isPresent()).toBe(true);

        // verify if videoCall checkbox is present
        expect(element(by.css("label[for='videoCall']")).isPresent()).toBe(true);

        // verify if accessibility checkbox is present
        expect(element(by.css("label[for='accessibility']")).isPresent()).toBe(true);

        // verify if search button is present
        expect(element(by.css(".btn.btn-primary.btn-block")).isPresent()).toBe(true);

        // verify if Best Results check box is present
        expect(element(by.css("label[for='bestHit']")).isPresent()).toBe(true);

        // verify if Sort Alphabetically check box is present
        expect(element(by.css("label[for='sortAlphabetically']")).isPresent()).toBe(true);

        // verify if distance check box is present
        expect(element(by.css("label[for='noLocation']")).isPresent()).toBe(true);

        // verify if distance check box is present
        expect(element(by.css("span[role='slider']")).isPresent()).toBe(true);

        // verify if distance check box is present
        expect(element(by.css(".card-image")).isPresent()).toBe(true);

        // wait for the element to load
        browser.sleep(2000)

        // enter data into the Name field
        element(by.css("input[name='query']")).sendKeys("Hani Ba Fadhl");

        // wait for the element to load
        browser.sleep(2000)

        // verify if suggestion drop down is present
        expect(element(by.css(".dropdown.open.dropdown-menu>h6")).isPresent()).toBe(true);

        // enter data into the Name field
        element(by.css("input[name='query']")).sendKeys("Hani Ba Fadhl!!!!!!!!!!");

        // wait for the element to load
        browser.sleep(2000)

        // verify if suggestion drop down is present
        expect(element(by.css(".dropdown.open.dropdown-menu>h6")).isPresent()).toBe(false);

        // enter data into the Name field
        element(by.css("input[name='query']")).clear();
        element(by.css("input[name='query']")).sendKeys("Hani Ba Fadhl");

        // click on the search button
        element(by.css(".btn.btn-primary.btn-block")).click();

        // wait for  seconds
        browser.sleep(3000)

        // scroll to the bottom of the page
        browser.executeScript('window.scrollTo(0,10000);');
        
        // wait for 3 seconds
        browser.sleep(3000)

        // click the Show More link
        element(by.css(".load-more-link")).click();

        // wait for 3 seconds
        browser.sleep(3000)

        // scroll to the top of the page
        browser.executeScript('window.scrollTo(0,-10000);');

        // wait for 3 seconds
        browser.sleep(3000)

        // enter data into the location field
        element(by.css("input[name='location']")).sendKeys("5657");

        // wait for 3 seconds
        browser.sleep(3000)

        // click drop down value
        element(by.cssContainingText('span', '5657')).click();

        // wait for 3 seconds
        browser.sleep(3000)
        
        // click on the search button
        element(by.css(".btn.btn-primary.btn-block")).click();

        // wait for 3 seconds
        browser.sleep(3000)
        
        // check the Online Bookable checkbox
        element(by.css("label[for='onlineBooking']")).click();

        // wait for 3 seconds
        browser.sleep(3000)

        // click on the search button
        element(by.css(".btn.btn-primary.btn-block")).click();

        // wait for 3 seconds
        browser.sleep(3000)
        
        // uncheck the Online Bookable checkbox
        element(by.css("label[for='onlineBooking']")).click();

        // check the video conference checkbox
        element(by.css("label[for='videoCall']")).click();

        // click on the search button
        element(by.css(".btn.btn-primary.btn-block")).click();

        // wait for 3 seconds
        browser.sleep(3000)

        // uncheck the video conference checkbox
        element(by.css("label[for='videoCall']")).click();

        // chceck the Barrier Free checkbox
        element(by.css("label[for='accessibility']")).click();

        // click on the search button
        element(by.css(".btn.btn-primary.btn-block")).click();

        // wait for 3 seconds
        browser.sleep(3000)

        // click on the Data Collection popup banner as it would interupt element click
        element(by.css(".accept-tracking-button")).click();

        // wait for 3 seconds
        browser.sleep(3000)

        // check the Alphabetical Sort checkbox
        element(by.css("label[for='sortAlphabetically']")).click();

        // wait for 3 seconds : Should use browser.sleep as the lement is already loaded
        browser.sleep(3000)

        // check the Distance Sort checkbox
        element(by.css("label[for='noLocation']")).click();

        // wait for 3 seconds
        browser.sleep(3000)
        
        // scroll down to the bottom of the page
        //browser.executeScript('window.scrollTo(0,10000);');
        
        // drag slider
        var slider = element(by.css(".ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min"))
        browser.actions().dragAndDrop(slider,{x:90,y:0}).perform();
        browser.sleep(5000)
        
        browser.close();
    });
});