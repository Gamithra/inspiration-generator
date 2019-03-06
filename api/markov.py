#!/usr/bin/python

import markovify, json
from quotes import text

# quotes from: http://wisdomquotes.com/inspirational-quotes/
def getQuote():
    text_model = markovify.NewlineText(text)
    result = text_model.make_sentence(tries=10)
    get_author = result.split(".")
    author = get_author[-1]
    quote = ".".join(get_author[:-1])
    quote += "."
    return json.dumps({"quote": quote, "author": author})

getQuote()
