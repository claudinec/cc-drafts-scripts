// Search Reverse Australia for phone number.
const regex = /\+|\s/g ;
const revauQuery = 'https://www.reverseaustralia.com/lookup/';
var phone = draft.content;
var revauUrl = revauQuery + phone.replace(regex, '');
app.openURL(revauUrl);
