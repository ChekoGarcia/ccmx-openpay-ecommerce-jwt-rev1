 const ErrorCodes = {
    INVALID_TYPE: '400.0',
    ENUM_MISMATCH: '400.1',
    STRING_LENGTH_SHORT: '400.2',
    STRING_LENGTH_LONG: '400.2',
    STRING_PATTERN: '400.2',
    OBJECT_REQUIRED: '400.3',
    DEFAULT: '400.4',
    SCHEMA_INVALID: '400.5'
};

const content = context.getVariable('OASValidation.OAS-ValidateContract.fault.cause');
const errorsPayload = [];

if (content !== null) {
    var errorMessage = content.match(/failed with reason: "\[(.*?)]"/);
    
    if (errorMessage && errorMessage.length > 1) {
        errorMessage = errorMessage[1].replace(new RegExp('\"', 'g'), "'");
        
        const errors = errorMessage.split('ERROR - ');
        errors.shift();

        errors.forEach(error => {
            const errorObj = {};
            var property = null;
            
            if (error.includes("['") && error.includes("']")) {
                const indexOfFirst = error.indexOf("['");
                const indexOfEnd = error.lastIndexOf("']") + 2;
                property = error.substring(indexOfFirst, indexOfEnd);
            }
            
            if (error.includes('Instance type') || error.includes('is not a valid') || error.includes('is invalid') || error.includes('Numeric instance is') || error.includes('Value for int32 leads to overflow')) {
                errorObj.code = ErrorCodes.INVALID_TYPE;
                errorObj.message = 'Tipo de dato no valido: ' + error;
            } else if (error.includes('not found in enum')) {
                errorObj.code = ErrorCodes.ENUM_MISMATCH;
            } else if (error.includes('is too short')) {
                errorObj.code = ErrorCodes.STRING_LENGTH_SHORT;
            } else if (error.includes('is too long')) {
                errorObj.code = ErrorCodes.STRING_LENGTH_LONG;
            } else if (error.includes('ECMA 262 regex')) {
                errorObj.code = ErrorCodes.STRING_PATTERN;
            } else if (error.includes('has missing required properties') || error.includes('is required')) {
                errorObj.code = ErrorCodes.OBJECT_REQUIRED;
            } else if (error.includes('properties which are not allowed by the schema')) {
                errorObj.code = ErrorCodes.SCHEMA_INVALID;
                errorObj.message = 'Objeto request tiene una propiedad no permitida: ' + property || error;
            } else {
                errorObj.code = ErrorCodes.DEFAULT;
                errorObj.message = 'Petición no procesada, ' + context.getVariable('request.path');
                errorObj.source = error;
            }

            errorObj.message = errorObj.message || error;
            errorsPayload.push(errorObj);
        });

        context.setVariable("errorMessage", JSON.stringify({ errors: errorsPayload.sort(function (a, b) { return a.code - b.code }) }));
    }
} else {
    // Manejar el caso en que no se encontraron errores OAS
    context.setVariable("errorMessage", JSON.stringify({ errors: [] }));
}

