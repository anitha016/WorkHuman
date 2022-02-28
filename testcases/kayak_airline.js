browser.waitForAngularEnabled(false)

describe('Kayak Airlines', () => {
    it('Open Kayak Airlines', async() => {
        var EC = protractor.ExpectedConditions;
        browser.get("https://www.kayak.com/");
        browser.driver.manage().window().maximize();

        //Clicking Accept All Cookies
        var e1 = element(by.buttonText('Accept'));
        browser.wait(EC.visibilityOf(e1), 10000);
        // e1.click();
    
       if(expect(e1.isPresent()).toBe(true)){
        e1.click();
        console.log("Click Success");
       }
       else
       {
        console.log("FLAG 111");
        var e1a = element(by.buttonText('Allow all'));
        browser.wait(EC.visibilityOf(e1a), 10000);
        if(expect(e1a.isPresent()).toBe(true)){
            e1a.click();
        }
       }
    //    else if(expect(e1a.isPresent()).toBe(true)){
    //     e1a.click();
    //    }

        //Iqt3-button-content
        //clicking on Destination textbox
        // var e2 = element(by.xpath('/html/body/div[1]/div[1]/main/div[1]/div[1]/div/div[1]/div/div/section[2]/div/div/div/div/div/div[1]/div[2]/div/div[3]/div/div/div[2]')); 
        // browser.wait(EC.visibilityOf(e2), 10000);
        // e2.click();

        // //Entering Destination as Amsterdam
        // var e3 = element(by.css('.k_my-input'))
        // e3.sendKeys('Amsterdam').then (() => {
        //     //var e31 = element(by.xpath('/html/body/div[46]/div/div[2]/div[2]/div/ul/li/div'));
        //     var e31 = element(by.className('JyN0-item JyN0-pres-item-horizon'));
        //     browser.wait(EC.visibilityOf(e31),10000);
        //     e31.click();
        //     // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        //     console.log("Country filter is available");
        // });

        //  //Clicking on calender
        //  browser.sleep(1000);
        var e4 = element(by.className('cQtq-date'));
        // var e4 = element(by.xpath('//*[@id="cjha"]/div/div/div/div[1]/div[2]/div/div[4]/div/div/div/div[1]/span'));
        // var e4 = element(by.className('cQtq-prefixIcon'));
        browser.wait(EC.visibilityOf(e4),10000);
        e4.click();
        browser.sleep(4000);
        console.log("Date filter is available");
        var today = new Date();
        var date = today.getDate();
        browser.executeScript("document.getElementsByClassName('PDPe-from-date').value='03/03/2022'")
        browser.sleep(5000);

        //Set Passenger Details
        // var e5 = element(by.className('S9tW S9tW-pres-default'));
        // browser.wait(EC.visibilityOf(e5), 10000);
        // e5.click().then(() => {
        //     var e5a = element.all(by.className('u9Xa')).first().element(by.className('bCGf')).all(by.tagName('button')).get(1);
        //     browser.wait(EC.visibilityOf(e5a), 10000);
        //     e5a.click();
        // });

    
        // browser.sleep(5000);



        // var e4 = element(by.id("Belgium-cb-label-CountryFilter")); 
        // browser.wait(EC.visibilityOf(e4), 10000);
        // e4.click();

        // XPlb-noThanks
        // JqCQ-noThanks
        // var EC = protractor.ExpectedConditions;
       // var e2 = element(by.id(button["Sh1Q-accept"])); 
    //    var e2 =  element(by.buttonText('Sh1Q-accept'));
    //     browser.wait(EC.visibilityOf(e2), 20000);
    //     e2.click();

        // let text = await element(by.buttonText('Accept'))
        // browser.sleep(10000);
        // console.log(text);
        // text.click();
    })
})
