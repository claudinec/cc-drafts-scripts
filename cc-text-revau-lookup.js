/**
 * @file Drafts script that searches Reverse Australia for the given phone number.
 * @author 0.1.0 Chionh <info@claudinec.net>
 * @version 0.0.1
 */
const regex = /\+|\s/g;
const revauQuery = 'https://www.reverseaustralia.com/lookup/'
const phone = draft.content
const revauUrl = revauQuery + phone.replace(regex, '')
app.openURL(revauUrl)
