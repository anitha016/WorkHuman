browser.waitForAngularEnabled(false)

describe('Kayak Airlines', () => {
    it('Open Kayak Airlines', async() => {
        var EC = protractor.ExpectedConditions;
        browser.get("https://www.kayak.com/");
        browser.driver.manage().window().maximize();

        //Clicking Accept All Cookies
        var e1 = element(by.buttonText('Accept'));
        browser.wait(EC.visibilityOf(e1), 10000);
    
       if(expect(e1.isPresent()).toBe(true)){
        e1.click();
       }
       else
       {
        var e1a = element(by.buttonText('Allow all'));
        browser.wait(EC.visibilityOf(e1a), 10000);
        if(expect(e1a.isPresent()).toBe(true)){
            e1a.click();
        }
       }
        //clicking on Destination textbox
        var e2 = element(by.xpath('/html/body/div[1]/div[1]/main/div[1]/div[1]/div/div[1]/div/div/section[2]/div/div/div/div/div/div[1]/div[2]/div/div[3]/div/div/div[2]')); 
        browser.wait(EC.visibilityOf(e2), 10000);
        e2.click();

        // //Entering Destination as Amsterdam
        var e3 = element(by.css('.k_my-input'))
        e3.sendKeys('Amsterdam').then (() => {
            var e31 = element(by.className('JyN0-item JyN0-pres-item-horizon'));
            browser.wait(EC.visibilityOf(e31),10000);
            e31.click();
        });

        //  //Clicking on calender date Departure
        var e4 = element.all(by.className('cQtq-date')).first();
        browser.wait(EC.visibilityOf(e4),10000);
        e4.click().then(()=> {
            var today = new Date();
            var fromDate = ((today.getDate())+1).toString();
            var e4a = element(by.xpath('/html/body/div[46]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div['+fromDate+']'));
            browser.wait(EC.visibilityOf(e4a), 5000);
            e4a.click().then(()=> {
            var toDate = ((today.getDate())+4).toString();
            var e4b = element(by.xpath('/html/body/div[46]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div['+toDate+']'));
            browser.wait(EC.visibilityOf(e4b), 5000);
            e4b.click();
            })
            
        })
        browser.sleep(4000);
        //Set Passenger Details
        var e5 = element(by.className('S9tW S9tW-pres-default'));
        browser.wait(EC.visibilityOf(e5), 10000);
        e5.click().then(() => {
            var e5a = element.all(by.className('u9Xa')).first().element(by.className('bCGf')).all(by.tagName('button')).get(1);
            browser.wait(EC.visibilityOf(e5a), 10000);
            e5a.click();
        }).then(() => {
            //    Submit Button
            var e6 = element(by.className('zEiP-formField zEiP-submit'));
            browser.wait(EC.visibilityOf(e6), 10000);
            e6.click();
            browser.sleep(5000);
        })

        //Q.No=7 //Finding flight details
        var e7 = element(by.className('bfLabel bf-best'));
        browser.wait(EC.visibilityOf(e7), 20000);

        //Q.No=11 //Gathering first 3 rows into a data object
        var e8 = element(by.id('KkFiVqgawg-1'))
    })
})
