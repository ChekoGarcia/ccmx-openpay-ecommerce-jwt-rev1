  
  var request = JSON.parse(context.getVariable("request.content"));
  var statusCode = 500;
  var response = null;
  
 try{
     print(context.getVariable("request.content"));
     
    var cveAplicacion = request.cveAplicacion;
    print(cveAplicacion);
    
    if( cveAplicacion == "AVI"){
        statusCode = 200;
        response = {"orderID": "AVI0000001681DEVS","idTransaccion": "trnwvb5i7ayomafpgpbp","urlMethodReturn": "https://sandbox-api.openpay.mx/v1/mcjpnafu3ptmdlwgw3oc/charges/trnwvb5i7ayomafpgpbp/card_capture"};
    } else if (cveAplicacion == "MIRCE"){
        statusCode = 200;
        response = {"orderID": "MIRCE0000001682DEVS","idTransaccion": "trmgs0gkc4bv9zhagise","urlMethodReturn": "https://sandbox-api.openpay.mx/v1/mcjpnafu3ptmdlwgw3oc/charges/trmgs0gkc4bv9zhagise/card_capture"};
    } else {
       statusCode = 404;
       response = {"errores":[{"codigo":"404.1","mensaje":"Clave de aplicación no encontrada."}]};
    }
    
 }
 catch(err){
     print("************************");
     print("SelectBody.js" + err);
     print("************************");
 }

print (response.orderID);
context.setVariable('responseData',JSON.stringify(response));

context.setVariable('statusCode',statusCode);
