// Functions for Things integration.

function thingsContainer(thingArray) {
    // Example from https://scripting.getdrafts.com/classes/tjscontainer

    // Create a container to handle creation of Things URL
    var container = TJSContainer.create(thingArray);

    // Use CallbackURL object to open URL in Things
    var cb = CallbackURL.create();
    cb.baseURL = container.url;
    var success = cb.open();
    var message = '';
    if (success) {
        message = 'Successfully created in Things';
    } else {
        message = 'Failed';
        context.fail();
    }
    return message;
}