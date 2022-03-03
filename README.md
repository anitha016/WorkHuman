# WorkHuman
WorkHuman Automation - Kayak 


## Instructions on how to Setup Protractor on Windows:
- Step 1: Download and install node.js. Open console and use the below commands
  -  `node -v`
  -  `npm -v`
- Step 2: Use npm to install Protractor globally with:
  - `npm install -g protractor`
- Step 3: Try running the below command to make sure the protractor working
  - `protractor --version` 
- Step 4: Update webdriver-manager and start the server
  - `webdriver -manager update` 
  - `webdriver-manager start` 
- Step 5: Find conf.js file at
  - `node_modules\protractor\example`
- On command, move to the location of this file and run protractor conf.js.
The default .js file will run.
 
## To run my test case:
- Create a new project in Visual Studio and create a new folder called conf.
- Copy conf.js file from the below location and paste it in your conf folder.
  - `\node_modules\protractor\example`
- Create another folder in Visual Studio for test cases and create two .js files for the two given scenarios.
- Copy and paste the code. And specify the file you want to run in specs[] in conf.js file under conf folder
- Or, Alternatively download the ZIP folder into your local or clone the repository into your local and run the scripts 
- Navigate to conf folder and run “Protractor conf.js”
- The scripts will run in a browser.

## Errors
- If you get an error `Failed: EACCES connect EACCES 127.0.0.1:56068` Please re-run the test cases using `Protractor conf.js`.
- If you get an error `Failed: Wait timed out after 10008ms` Please re-run the test cases using `Protractor conf.js`.
