/**
 * @file Drafts script that searches Reverse Australia for the given phone number.
 * @author Claudine Chionh <info@claudinec.net>
 * @version 0.1.1
 */
const regex = /\+|\s/g
const revauQuery = "https://www.reverseaustralia.com/lookup/"
const selection = editor.getSelectedText()
if (selection == "") {
  var phone = draft.content
} else {
  var phone = selection
}
const revauUrl = revauQuery + phone.replace(regex, "")
app.openURL(revauUrl)
