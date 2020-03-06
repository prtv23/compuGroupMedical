let homepage = function(){
    
    let profileIcon_link = element(by.css('#menu-item-2004>a'))
    let emailAddress_input = element(by.css('#mat-input-0'))
    let password_input = element(by.css('#mat-input-1'))
    let login_btn = element(by.css('.life-btn.life-primary-btn.colored'))
    let signInError_msg = element(by.css('.d-flex.justify-content-center.flex-column>p')) 

    this.get = function(url){
        browser.get(url);
    };

    this.clickProfileLink = function(){
        profileIcon_link.click();
    };

    this.enterEmailAddress = function(email){
        emailAddress_input.sendKeys(email);
    };

    this.enterPassword = function(password){
        password_input.sendKeys(password);
    };

    this.clickLogin = function(){
        login_btn.click();
    };

    this.verifySignInError = function(){
        let output = signInError_msg
        expect(output.isPresent()).toBe(true);
    };

    this.verifyLoginSuccess = function(){
        let landing_PageTitle = browser.getTitle()
        expect(landing_PageTitle).toEqual("Mein Profil | CLICKDOC");
    };
};

module.exports = new homepage();
