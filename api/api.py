#!/usr/bin/python

import bottle
from bottle import request, response, run
from markov import getQuote
import json
app = application = bottle.Bottle()

# quotes from: http://wisdomquotes.com/inspirational-quotes/

@app.hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

@app.route('/fake-quote/api')
def fetch_quote():
    try:
        res = getQuote()
        return res
    except:
        return "something went wrong"


@app.error(404)
def error404(error):
    return "404!!! not found!!!! error! whoops"

#class StripPathMiddleware(object):
#    def __init__(self, a):
#        self.a = a
#    def __call__(self, e, h):
#        e['PATH_INFO'] = e['PATH_INFO'].rstrip('/')
#        return self.a(e, h)

#if __name__ == '__main__':
#    bottle.run(app=StripPathMiddleware(app),
#        host='0.0.0.0',
#        port=8080)
