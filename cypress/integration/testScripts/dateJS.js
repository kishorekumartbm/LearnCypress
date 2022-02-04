const  userData  = require ('../../fixtures/user.json')
function getDateTS() {
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
        return dateString.concat(timetring)
}