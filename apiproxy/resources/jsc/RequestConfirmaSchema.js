 var accentedCharacters = "àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
 var specialCharacters = "/:-";

var schema = { type: "object",
    required: ["cveAplicacion","idTransaccion"],
    properties: {
        "cveAplicacion": {type: 'string',"pattern": "[A-Za-z]+", minLength:3, maxLength:10},
        "idTransaccion": {type: 'string',"pattern": "[A-Za-z0-9]+", minLength:3, maxLength:30}
    }
};