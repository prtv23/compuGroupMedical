let utils = function(){


    this.waitTillElementAppears = function(elem){
        
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(elem), 30000);
        return elem;
    
    };
};

module.exports = new utils();