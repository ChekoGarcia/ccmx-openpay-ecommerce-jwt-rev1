 var accentedCharacters = "àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
 var specialCharacters = "/:-";
 
 
var schema = {
    type:"object", 
    required: ["order_id"],
    properties:{
        
        "id": {type: 'string',"pattern": "[A-Za-z0-9]+", minLength:3, maxLength:30},
        "method": {type: 'string',"pattern": "[A-Za-z]+", maxLength:10},
        "description": {type: 'string',"pattern": "^[A-Za-z " + accentedCharacters +"\s]+$", minLength:2, maxLength:250},
        "amount": {type: 'number', minLength:2, maxLength:5},
        "order_id": {type: 'number', minLength:5, maxLength:250},
        "email": {type: 'string',"pattern": "[a-z0-9]+@[a-z]+\.[a-z]{2,3}", minLength:5, maxLength:150},
        "redirect_url":{type: 'string'},
        "card": {
            type : "object",
            properties:{
                "card_number": {type: 'string',"pattern": "^[0-9]+$", minLength:16, maxLength:16},
                "holder_name": {type: 'string',"pattern": "^[A-Za-z " + accentedCharacters +"\s]+$", minLength:4, maxLength:250},
                "expiration_year": {type: 'string',"pattern": "^[0-9]+$", minLength:2, maxLength:2},
                "expiration_month":{type: 'string',"pattern": "^[0-9]+$", minLength:2, maxLength:2},
                "cvv2": {type: 'string',"pattern": "^[0-9]+$", minLength:3, maxLength:3},
            }
            
        }

    }
    
};
