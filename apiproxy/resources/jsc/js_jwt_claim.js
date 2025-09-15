var response = JSON.parse(context.getVariable("response.content"))
context.setVariable('idcdc', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.idcdc")); 
context.setVariable('email', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.email"));
context.setVariable('primerNombre', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.primerNombre"));
context.setVariable('segundoNombre', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.segundoNombre")); 
context.setVariable('apellidoPaterno', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.apellidoPaterno")); 
context.setVariable('apellidoMaterno', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.apellidoMaterno")); 
context.setVariable('fechaNacimiento', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.fechaNacimiento"));
context.setVariable('idMatch', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.idMatch"));
context.setVariable('gratuidad', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.gratuidad"));
context.setVariable('token', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.token"));
context.setVariable('autorizacionID', response.autorizacionID);
context.setVariable('codigoCupon', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.codigoCupon"));
context.setVariable('porcentajeDescuento', context.getVariable("jwt.JWT-Verify-JWT-1.decoded.claim.porcentajeDescuento"));
