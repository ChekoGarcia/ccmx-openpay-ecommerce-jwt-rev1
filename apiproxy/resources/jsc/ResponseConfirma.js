   
  var request = JSON.parse(context.getVariable("request.content"));
  var statusCode = 500;
  var response = null;
 
 try{
    
    print(context.getVariable("request.content"));
     
    var cveAplicacion = request.cveAplicacion;
    
    print(cveAplicacion);
    
    if( cveAplicacion == "AVI"){
        statusCode = 200;
        response = {"orderID":"AVI0000001581DEVS","idTransaccion":"tras9fp14a2o7irwrkbn","tarjeta":[{"estatus":"completed","metodo":"card","tipo":"debit","marca":"visa","fechaOperacion":"2022-02-28T16:26:56-06:00","fechaCreacion":"2022-02-28T16:26:56-06:00"}]};
    } else if (cveAplicacion == "MIRCE"){
        statusCode = 200;
        response = {"orderID":"MIRCE0000001581DEVS","idTransaccion":"tras9fp14a2o7irwrkbn","tarjeta":[{"estatus":"completed","metodo":"card","tipo":"debit","marca":"visa","fechaOperacion":"2022-02-28T16:26:56-06:00","fechaCreacion":"2022-02-28T16:26:56-06:00"}]};
    } else {
       statusCode = 404;
       response = {"errores":[{"codigo":"404.1","mensaje":"Clave de aplicación no encontrada."}]};
    }

 }catch(err){
     print("************************");
     print("SelectBody.js" + err);
     print("************************");
 }

print (response.orderID);
context.setVariable('responseData',JSON.stringify(response));

context.setVariable('statusCode',statusCode);
