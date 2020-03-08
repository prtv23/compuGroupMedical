let physician_page = require('../pages/physicianSearchPage');
let physicianSearch_data = require('../data/physicianSearchPageData')

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
        physician_page.clickSuchseiteLink();

        // wait for the element to load
        browser.sleep(5000)

        // verify if all the web elements in the Search Section is present
        physician_page.validatePresenceOfElements_SearchSection();
        
        // verify if all the web elements in the Sort Section is present
        physician_page.validatePresenceOfElements_SortSection();
        
        // verify if the results section is initially empty
        physician_page.validateResultsSection();

        // wait for the element to load
        browser.sleep(2000)

        // enter data into the Name field and verify the search results shown are appropriate
        physician_page.validateNameSearch(physicianSearch_data.validName, physicianSearch_data.invalidName);

        // wait for 3 seconds
        browser.sleep(3000)

        // scroll to the bottom of the page => click on show more link
        // scroll to the top of the page => search based on Location and verify if the results are approrpiate
        physician_page.validateNameAndLocationSearch(physicianSearch_data.nameToSearch, physicianSearch_data.locInput, physicianSearch_data.distFrmLoc);
        
        // perform all the search actions on the page
        physician_page.performAllSearchActions();
        
        // close the browser
        browser.close();
    });
});