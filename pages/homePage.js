let utilities = require('../utils/utilities')

let homepage = function(){
    
    let profileIcon_link = element(by.css('#menu-item-2004>a'))
    let emailAddress_input = element(by.css('#mat-input-0'))
    let password_input = element(by.css('#mat-input-1'))
    let login_btn = element(by.css('.life-btn.life-primary-btn.colored'))
    let signInError_msg = element(by.css('.d-flex.justify-content-center.flex-column>p')) 
    let avatarIcon = element(by.css('.avatar-pointer'))
    let logOut_btn = element(by.xpath("//div[@class='dropdown-container']//span[contains(text(),'Logout')]"));

    this.get = function(url){
        browser.get(url);
    };

    this.clickProfileLink = function(){
        utilities.waitTillElementAppears(profileIcon_link);
        profileIcon_link.click();
    };

    this.enterEmailAddress = function(email){
        utilities.waitTillElementAppears(emailAddress_input);
        emailAddress_input.clear();
        emailAddress_input.sendKeys(email);
    };

    this.enterPassword = function(password){
        utilities.waitTillElementAppears(password_input);
        password_input.clear();
        password_input.sendKeys(password);
    };

    this.clickLogin = function(){
        login_btn.click();
    };

    this.verifySignInError = function(){
        utilities.waitTillElementAppears(signInError_msg);
        let output = signInError_msg
        expect(output.isPresent()).toBe(true);
    };

    this.verifyLoginSuccess = function(pageTitle){
        let landing_PageTitle = browser.getTitle()
        expect(landing_PageTitle).toEqual(pageTitle);
    };

    this.logOutFromApp = function(){
        avatarIcon.click();
        logOut_btn.click();
        utilities.waitTillElementAppears(profileIcon_link);
        expect(profileIcon_link.isPresent()).toBe(true);
    }
};

module.exports = new homepage();
