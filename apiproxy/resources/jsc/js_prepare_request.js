 try{
     
        var request = context.getVariable("request.content");
        var objRequest = JSON.parse(request);
        var vFolioMatch = objRequest.folioMatch;
        
        context.setVariable('contextFolioMatch',vFolioMatch);

        delete objRequest.folioMatch;

    //var claveOtorgante = context.getVariable('info.otorgante');

    

    print (vFolioMatch);
    context.setVariable('request.content',JSON.stringify(objRequest));
     
 }catch(e){
    print("***errors: RefactorResponse  ***");
    print(e);
    print("***end******");
    context.setVariable("response.status.code", 500);
    context.setVariable("response.reason.phrase", "INTERNAL SERVER ERROR");    

 }