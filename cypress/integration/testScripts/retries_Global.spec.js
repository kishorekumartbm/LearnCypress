/// <reference types="cypress"/>


describe('retries',()=>{
    it('sample1Fail',()=>{
        expect(2).equals(4)
    })

    it('sample1Pass',()=>{
        expect(2).equals(2)
    })


    //add the below in the cypress.json
    // "retries":{
    //     "runMode":1,
    //     "openMode":1
    // }
})
