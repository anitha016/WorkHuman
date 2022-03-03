browser.waitForAngularEnabled(false)

describe('Kayak Airlines', () => {
    function datePicker(){
        var EC = protractor.ExpectedConditions;
        var today = new Date();
        var fromDate = ((today.getDate())).toString();
        var toDate  = ((today.getDate())+3).toString();
        console.log("From Date == "+fromDate);
        console.log("To Date == "+toDate);
        var dt = new Date();
        var month = parseInt(dt.getMonth())+1;
        console.log("Month = "+month);
        var year = dt.getFullYear();
        var daysInMonth = new Date(year, month, 0).getDate();
        if(toDate>daysInMonth){
            toDate = daysInMonth-toDate;
        }
        var tempElement = element.all(by.css('.onx_-days')).first();
        browser.wait(EC.visibilityOf(tempElement),5000).then(()=> {
            element.all(by.css('.onx_-days div')).each(function(elem, index) {
                elem.getText().then(function(text) {   
                    if(text === fromDate){
                        elem.click();
                    }
                    if(text === toDate){
                        elem.click();
                    }
                });                        
                });
        })
    };

    it('Open Kayak Airlines', async() => {
        var EC = protractor.ExpectedConditions;
        browser.get("https://www.kayak.com/");
        browser.driver.manage().window().maximize();
        //Clicking Accept All Cookies or Allow All cookies Button
        // browser.sleep(30000);
        var e1 =  element(by.buttonText('Accept'));
        browser.wait(EC.visibilityOf(e1), 2000, 'Accept Cookies Button Not Found 1').then(() => {            
            e1.click();
            }).catch((err) => {
            console.log('Accept Cookies Button Not Found => So "Allow All Cookies" is Clicked');
          });
        var e1a = element(by.buttonText('Allow all'));
        browser.wait(EC.visibilityOf(e1a), 2000,'Allow All Cookies Button Not Found 2').then(() => {                
        e1a.click();
        }).catch((err) => {
                console.log('Allow All Cookies Button Not Found => So "Accept Cookies" is Clicked');
        });

        // clicking on Origin textbox
        var e2a = element.all(by.className('zEiP-formField zEiP-origin')).first(); 
        browser.wait(EC.visibilityOf(e2a), 10000);
        e2a.click();

        //Entering Origin as Dublin
        var e2b = element(by.css('.k_my-input'));
        browser.wait(EC.visibilityOf(e2b), 10000);
        e2b.sendKeys('Dublin').then (() => {
            var e21 = element.all(by.className('JyN0-item JyN0-pres-item-horizon')).first();
            browser.wait(EC.visibilityOf(e21),10000);
            e21.click();
        });

        //clicking on Destination textbox
        var e3a = element.all(by.className('zEiP-formField zEiP-destination')).first(); 
        browser.wait(EC.visibilityOf(e3a), 10000);
        e3a.click();

        //Entering Destination as Amsterdam
        var e3b = element(by.css('.k_my-input'));
        browser.wait(EC.visibilityOf(e3b), 10000);
        e3b.sendKeys('Amsterdam').then (() => {
            var e31 = element.all(by.className('JyN0-item JyN0-pres-item-horizon')).first();
            browser.wait(EC.visibilityOf(e31),10000);
            e31.click();
        }).catch((err) => {
            console.log('error3 = '+err);
          });
       
        //clicking on calender and comparing months
        var e4 = element.all(by.className('cQtq-date')).first();
        browser.wait(EC.visibilityOf(e4),10000);
        e4.click().then(()=> {
            var d = new Date();
            var currentMonth = d.getMonth()+1;
            var e4a = element.all(by.className('onx_ onx_-pres-default onx_-double')).first();
            e4a.getAttribute('data-month').then((text) => {
                let displayMonth = parseInt(text.substring(5));
                console.log("Display Month = = "+ displayMonth);
                console.log("Current Month = = "+ currentMonth);
                if(displayMonth>currentMonth){
                    var e4b = element.all(by.className('Fj7W-arrow')).first();
                    browser.wait(EC.visibilityOf(e4b),5000);
                    e4b.click().then(() => {
                        datePicker();
                    }).catch((err) => {
                        //
                    });
                }
                else{
                    datePicker();
                }
            });
        }).catch((err) => {
            console.log('error6 = '+err);
        });

        //Set Passenger Details
        var e5 = element.all(by.className('S9tW S9tW-pres-default')).first();
        browser.wait(EC.visibilityOf(e5), 10000);
        e5.click().then(() => {
            var e5a = element.all(by.className('u9Xa')).first().element(by.className('bCGf')).all(by.tagName('button')).get(1);
            browser.wait(EC.visibilityOf(e5a), 10000);
            e5a.click();
        }).then(() => {
            //Submit Button
            var e6 = element.all(by.className('zEiP-formField zEiP-submit')).first();
            browser.wait(EC.visibilityOf(e6), 10000);
            e6.click();
            // browser.sleep(5000);
        })

        //Q.No=7 //Finding flight details excluding Advertisement rows
        var e7 = element(by.className('bfLabel bf-best'));
        browser.wait(EC.visibilityOf(e7), 20000);
        expect(e7.isPresent()).toBe(true);

        //Q.No=10 Assert Visible Stops
        // var temp = element.all(by.id('VPWH-stops-options li'));
        // browser.wait(EC.visibilityOf(temp), 20000, 'Noooooooo').then(()=>{
        //     element.all(by.id('VPWH-stops-options li')).each(function(elem, index) {
        //         expect(elem.getAttribute('aria-disabled')).toBe(false);
        //     }) 
        // }).catch((err) => {
        //     console.log('error10= '+err);
        //   });
        
        //Q.No=11 //Gathering first 3 rows into a data object
        // var price1 = element.all(by.className('price-text')).first().getText();
        // var price2 = element.all(by.className('price-text')).get(1).getText();
        // var price3 = element.all(by.className('price-text')).get(2).getText();
        // var time1 =  element.all(by.className('depart-time base-time')).first().getText();
        // var time1 =  element.all(by.className('depart-time base-time')).get(2).getText();
        // var time1 =  element.all(by.className('depart-time base-time')).get(4).getText();


    })
})
