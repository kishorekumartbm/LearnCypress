const  userData  = require ('../../fixtures/user.json')

        const currentDate = new Date();

        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();
        // cy.log(Date().getDate())
        
        const dateString = currentDayOfMonth.toString() + (currentMonth + 1).toString() +currentYear.toString();
        // cy.log( dateString )
        var d = new Date(); // for now
        //  d.getHours(); // => 9
        // d.getMinutes(); // =>  30
        // d.getSeconds(); // => 51
        const timetring = '_'+d.getHours().toString()+d.getMinutes()+d.getSeconds()
        // cy.log(timetring)
        // cy.log(dateString.concat(timetring))
        console.log(dateString.concat(timetring))
        userData['cypress-cucumber-preprocessor'].cucumberJson.outputFolder="output/cucumber-json/".concat(dateString.concat(timetring))
        console.log(userData['cypress-cucumber-preprocessor'].cucumberJson.outputFolder)

         const fs = require('fs');
        // const fileName = "C:\\Manju\\cypressworkspace\\LearnCypress\\cypress\\fixtures\\user.json"
        // const file = require(fileName);
    
        //file.outputFolder='output/cucumber-json/'.concat(dateString.concat(timetring))
    
        // fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        // if (err) return console.log(err);
        // console.log(JSON.stringify(file));
        // console.log('writing to ' + fileName);
        // });
        
        let content = JSON.parse(fs.readFileSync('C:\\Manju\\cypressworkspace\\LearnCypress\\cypress\\fixtures\\user.json', 'utf8'));
        // edit or add property
        content='output/cucumber-json/'.concat(dateString.concat(timetring))
        //write file
        fs.writeFileSync('C:\\Manju\\cypressworkspace\\LearnCypress\\cypress\\fixtures\\user.json', JSON.stringify(content))
        

        

