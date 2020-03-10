let login_Page = require('../pages/homePage');
let login_data = require('../data/homePageData')

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
        login_Page.get('https://demo.clickdoc.de/cms-de/')

        // maximize browser window
        browser.driver.manage().window().maximize();
        
        // click on the profile icon
        login_Page.clickProfileLink();
        
        // wait for the Iframe to load
        browser.sleep(13000);

        // switch to the 5th iframe in the page - Login IFrame
        browser.switchTo().frame(5);

        // send keys into the Email Address field
        login_Page.enterEmailAddress(login_data.email);

        // send invalid password detail into the Password field
        login_Page.enterPassword(login_data.invalidPassword);

        // click the login button
        login_Page.clickLogin();

        // verify, if the signIn error is displayed for invalid login
        login_Page.verifySignInError();
        
        // enter valid password
        login_Page.enterPassword(login_data.validPassword);

        // click the login button
        login_Page.clickLogin();

         // wait for the landing page - user profile page
         browser.sleep(15000)

        // verification if the login is successfull - validation done on the page title
        login_Page.verifyLoginSuccess(login_data.pageTitle);
    });
});    