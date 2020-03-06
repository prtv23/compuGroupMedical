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

        // click on the profile icon
        element(by.css('#menu-item-2004>a')).click();
        
        // wait for the Iframe to load
        browser.sleep(15000);

        // switch to the 5th iframe in the page - Login IFrame
        browser.switchTo().frame(5);

        // send keys into the Email Address field
        element(by.css('#mat-input-0')).sendKeys("dirk.nonn@cgm.com#1111");
        
        // send keys into the Password field
        element(by.css('#mat-input-1')).sendKeys("„testmail.com“");
        
        // click the login button
        element(by.css('.life-btn.life-primary-btn.colored')).click();
        
        // wait for the landing page - user profile page
        browser.sleep(10000)

        // verification if the login is successfull - validation done on the page title
        //expect(browser.getTitle()).toEqual("Mein Profil | CLICKDOC");
        expect(element(by.css('.d-flex.justify-content-center.flex-column>p')).isPresent()).toBe(true);
        browser.close();
    });
    
    it('valid login check', function(){

        // not to wait for Angular $http and $timeout
        //browser.waitForAngularEnabled(false);
    
        // loading the browser url
        //browser.get('https://demo.clickdoc.de/cms-de/');
            
        // maximize browser window
        //browser.driver.manage().window().maximize();
            
        // wait for the profile icon to load into DOM
        //browser.sleep(5000);
    
        // click on the profile icon
        //element(by.css('#menu-item-2004>a')).click();
            
        // wait for the Iframe to load
        //browser.sleep(15000);
    
        // switch to the 5th iframe in the page - Login IFrame
        //browser.switchTo().frame(5);
    
        // send keys into the Email Address field
        element(by.css('#mat-input-0')).sendKeys("dirk.nonn@cgm.com#1111");
            
        // send keys into the Password field
        element(by.css('#mat-input-1')).sendKeys("recruitingTest1!");
            
        // click the login button
        element(by.css('.life-btn.life-primary-btn.colored')).click();
            
        // wait for the landing page - user profile page
        browser.sleep(15000)
    
        // verification if the login is successfull - validation done on the page title
        expect(browser.getTitle()).toEqual("Mein Profil | CLICKDOC");
        browser.close();
    
    });
        
});
