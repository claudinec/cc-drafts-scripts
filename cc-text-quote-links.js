/**
 * @file Drafts script to enclose Markdown links or bare URLs in quotes.
 * @author Claudine Chionh <info@claudinec.net>
 * @version 0.1.0
 * @license GPL-3.0-or-later
 */
const mdRe = /(\[.*\]\(.*\))/
const urlRE = /(https?.*)\s|\n/
const textOld = draft.content
const textNew = textOld.replace(mdRe, '\"$1\"')
draft.content = textNew
