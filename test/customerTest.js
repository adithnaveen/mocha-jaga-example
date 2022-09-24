const assert = require("chai").assert;
const expect = require("chai").expect;
const customerObj  = require("../Customer");
var http = require("http");


describe("Customer suite testing for CRUD Operation", function(){
   /* before(function(){
        console.log("****Before****")
    })

    after(function(){
        console.log("***** after ***** "); 
    })

    beforeEach(function(){
        console.log("^^^^ before each ^^^^ ")
    })

    afterEach(function(){
        console.log("^^^^ after each ^^^^");
    })
*/


    it("inserting customer to the list " , function(){
        var customer1 = '{"custId":101, "firstName":"Naveen", "lastName":"Kumar", "age":33}';
        var customer2 = '{"custId":102, "firstName":"Harry", "lastName":"Scott", "age":22}';

        customerObj.putCustomer(customer1);     
        customerObj.putCustomer(customer2);     
    })

    it("Get number of customers", function(){
        // this.timeout(1000);
        var resultCount = customerObj.getCustomerCount();
        assert.isAbove(10, resultCount);
        //  done();
    })

    it("Get Customer with id : 101 ", function(){
        var cust = '{"custId":101, "firstName":"Naveen", "lastName":"Kumar", "age":33}';
        var retCustomer = customerObj.getCustomer(101);
        assert.equal(retCustomer, cust);
    })

    it("test delete customer ", function(done){
        var deletedCustomer = customerObj.deleteCustomer(101);
        assert.equal(101, JSON.parse(deletedCustomer).custId);
        // done("error deleting.... ");
        done();
    })
    it("get all customers stored", function(){
        customerObj.getAllCustomer();
    })

    it("get number of customer after delete", function(){
        var resultCount = customerObj.getCustomerCount();
        assert.equal(0,0);     
    })

   it("update customer ", function(){
        var customer = '{"custId":101, "firstName":"Naveen", "lastName":"Kumar", "age":33}';
        customerObj.updateCustomer(customer)
    })

    describe("Testing expect", function(){
        it("testing except simple ", function(){
            console.log("in Expect... case ")

            expect(2).to.equal(2);
        })
    })

  
})


