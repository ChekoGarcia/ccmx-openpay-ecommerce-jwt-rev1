  var accentedCharacters = "àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
 var specialCharacters = "/:-";
 
 
var schema = {
    type:"object", 
    required: ["id"],
    properties:{
        
        "id": {type: 'string',"pattern": "[A-Za-z0-9]+", minLength:3, maxLength:30},
       
    }
    
};
