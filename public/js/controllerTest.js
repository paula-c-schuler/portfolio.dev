"use strict";

(function() {                                  
    var app = angular.module("controllerTest", []);
    
    app.controller("CartController", function() {

        // initialize items array and newItem JSON
        this.items = [];
        this.newItem = {
            "quantity": 1,
        };

    // Saves item inputs by user onto items array
    // and then resets initial array. 
    this.saveItems=function() {
    	this.items.push(this.newItem);
        
    	this.newItem = {
    		"quantity": 1
    	};
        console.log(this.items);
    }

    });
})();
