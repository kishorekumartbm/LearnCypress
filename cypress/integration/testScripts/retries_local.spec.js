/// <reference types="cypress"/>


describe('retries',{
        "retries":{
              "openMode":1,
              "runMode":1
        }
        },()=>{
    it('sample1Fail',()=>{
        expect(2).equals(4)
    })

    it('sample1Pass',()=>{
        expect(2).equals(2)
    })
})
