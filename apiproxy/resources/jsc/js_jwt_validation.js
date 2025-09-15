var statusCode = context.getVariable("response.status.code")

if (statusCode !== 200) {
    context.setVariable("jwt-variable","Unauthorized")
}
