var customers=[];
var count =0;
module.exports = {

    putCustomer : function(customer){
        count ++;
        customers.push(customer);
        return customers; 
    }, 

    getCustomer : function (custId){
        for(i in customers){
            if(JSON.parse(customers[i]).custId == custId){
                return customers[i];
            }
        }
    }, 
    getAllCustomer : function (){
        return customers; 
    }, 
    getCustomerCount : function(){
        return count;
    }, 
    deleteCustomer :  function(custId){
        var deletedCustomer = null;
        for(i in customers){
            if(JSON.parse(customers[i]).custId == custId){
                deletedCustomer = customers[i];
                customers.splice(i, 1);
                return deletedCustomer;
            }
        }
        return null;
    },  
    updateCustomer : function (customer){
        var updateCustomer = JSON.parse(customer).custId;
        var updatedCustomer = null;
        for(i in customers){
            if(JSON.parse(customers[i]).custId == updateCustomer.custId){
                updatedCustomer = customers[i];
                customers.splice(i,1,customer);
                return updatedCustomer;
            }
        }
        return updatedCustomer;
    }
}