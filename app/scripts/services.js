'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")

        .service('menuFactory',['$resource','baseURL', function($resource,baseURL) {
    
           
                this.getDishes = function(){
                    
                    return $resource(baseURL+"dishes/:id",null,{'update':{method:'PUT'}});
                    
                };
    
                this.getPromotion=function(index)
                {
                 return $resource(baseURL+"promotions/:id",null,{'update':{method:'PUT'}}).get({id:0});  
                };
                        
        }])
    .service('feedbackFactory',['$resource','baseURL', function($resource,baseURL) {

        this.getFeedback = function(){
                    
                    return $resource(baseURL+"feedback/:id",null,{'save':{method:'POST'}});
                    
                };
     
    
    }])

        .factory('corporateFactory',['$resource','baseURL', function($resource,baseURL) {
    
            var corpfac = {};
    
           
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
            
           // var leaderfac={};
            
            corpfac.getLeaders= function (){
                return $resource(baseURL+"leadership/:id",null,{'update':{method:'PUT'}});
            };
            
            corpfac.getLeader= function(index){
                return $resource(baseURL+"leadership/:id",null,{'update':{method:'PUT'}}).get({id:0});  
                };
    return corpfac;
    
        }]) 

;
