/**
 * @file Drafts script to enclose Markdown links or bare URLs in quotes.
 * @author Claudine Chionh <info@claudinec.net>
 * @version 0.1.0
 * @license GPL-3.0-or-later
 */
const mdRe = /(\[.*?\]\(https?.*?\))/g
// const urlRe = /\s+(https?.*?)\s*/g
const textOld = draft.content
const textNew = textOld.replaceAll(mdRe, ' \"$1\" ')
draft.content = textNew
