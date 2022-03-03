browser.waitForAngularEnabled(false)

describe('Kayak Airlines', () => {
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
            console.log('error1 = '+err);
          });
        var e1a = element(by.buttonText('Allow all'));
        browser.wait(EC.visibilityOf(e1a), 2000,'Allow All Cookies Button Not Found 2').then(() => {                
        e1a.click();
        }).catch((err) => {
                console.log('error2 = '+err);
        });
        
        
        
    //    if(expect(e1.isPresent()).toBe(true)){
    //     console.log("Accept ALL Clicked");
    //     e1.click();
    //     }
    //    /html/body/div[6]/div/div[3]/div/div/div[2]/div/div/div[1]/button/div[1]/div
    //    else if(expect(e1a.isPresent()).toBe(true))
    //    {
    //     var e1a = element(by.buttonText('Allow all'));
    //     browser.sleep(10000)
    //     console.log("Inside Allow All");
        
        // browser.wait(EC.visibilityOf(e1a), 10000);
        // if(expect(e1a.isPresent()).toBe(true)){
        //     console.log("Allow ALL Clicked");
        //     e1a.click();
        // }
    //    }
        // clicking on Origin textbox
        var e2a = element.all(by.className('zEiP-formField zEiP-origin')).first(); 
        browser.wait(EC.visibilityOf(e2a), 10000);
        e2a.click();

        // //Entering Origin as Dublin
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

        // //Entering Destination as Amsterdam
        var e3b = element(by.css('.k_my-input'));
        browser.wait(EC.visibilityOf(e3b), 10000);
        e3b.sendKeys('Amsterdam').then (() => {
            var e31 = element.all(by.className('JyN0-item JyN0-pres-item-horizon')).first();
            browser.wait(EC.visibilityOf(e31),10000);
            e31.click();
        }).catch((err) => {
            console.log('error1 = '+err);
          });
       
        // clicking on calender and comparing months
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
                        var today = new Date();
                        var fromDate = ((today.getDate())+1).toString();
                        console.log("From Date == "+fromDate);
                        var e4c = element(by.xpath('/html/body/div[46]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div['+fromDate+']'));
                        browser.wait(EC.visibilityOf(e4c), 5000);
                        e4c.click().then(()=> {
                        var toDate = ((today.getDate())+4).toString();
                        var dt = new Date();
                        var month = parseInt(dt.getMonth())+1;
                        console.log("Month = "+month);
                        var year = dt.getFullYear();
                        var daysInMonth = new Date(year, month, 0).getDate();
                        console.log("Days in Month = "+daysInMonth);
                        if(toDate>daysInMonth){
                            console.log("FLAGG 2");
                            toDate = toDate - daysInMonth;
                            var e4d = element.all(by.xpath('/html/body/div[46]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div['+toDate+']')).get(1);
                            browser.wait(EC.visibilityOf(e4d), 5000);
                            e4d.click();
                        }
                        else{
                            console.log("FLAGG 3");

                            var e4d = element(by.xpath('/html/body/div[46]/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div[1]/div[2]/div['+toDate+']'));
                            browser.wait(EC.visibilityOf(e4d), 5000);
                            e4d.click();
                        }
                        }).catch((err) => {
                            console.log('error1 = '+err);
                          });
                    }).catch((err) => {
                        console.log('error1 = '+err);
                      });
                }
            });
        }).catch((err) => {
            console.log('error1 = '+err);
          });
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
      //  var e8 = element(by.id('KkFiVqgawg-1'))
            var e8 = element.all(by.className('price-text')).reduce(function(elem) {
                return elem.getText().then(function(text) {
                    console.log (text + " ");
                });
            });
    })
})
