const assert = require("chai").assert;

// different way of require 
const addNumbers = require("../app2").addNumbers; 

// when you have many function the good idea is to have like this 
const app2 = require("../app2");
const app = require("../app");

// we can even have nested describe 
describe("App Testing", function(){
    describe("Testing nested descript, for hi and hello ", function (){
        it("Testing hello world, return value ", function (){
            assert.equal(app.sayHello(), "hello" );
        })
    
        it("testing function hi from app1 ", ()=>{
            // console.log("app called... -> "+ app1.sayHi());
            assert.equal(app.sayHi(), "hi");
        })
    
    })
    describe("testing nested describe for number", function(){
        it("adding number with differnet require ", ()=>{
            let result = addNumbers(3,4);
    
            assert.isAbove(10, result);
        })
    
        it("test to check the return type as number after adding ", (done) =>{
            let result = addNumbers(3,4);
            assert.typeOf(result, "number");
            done();
            console.log("After done ");
        })
                    
    })

})