 /************************************************** salida swagger
{
    "folioCDC": 389839933
}
***************************************************/


try {
    var response = context.getVariable("response.content");
    var request = context.getVariable("request.content");
    var path = context.getVariable('proxy.pathsuffix');
    var objResponse = JSON.parse(response);
    var objRequest = JSON.parse(request);
    //var claveOtorgante = context.getVariable('info.otorgante');
    var responseData= {"success": objResponse.success, 
                       "statusCode":objResponse.statusCode}
  
    
    print(response);
    context.setVariable('response.content',JSON.stringify(responseData));
} catch(e){
    print("***errors: RefactorResponse  ***");
    print(e);
    print("***end******");
    context.setVariable("response.status.code", 500);
    context.setVariable("response.reason.phrase", "INTERNAL SERVER ERROR");    
}