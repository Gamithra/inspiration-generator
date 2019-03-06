from api import application

if __name__ == "__main__":
    application.run()

#def application(environ, start_response):
#    start_response('200 OK', [('Content-Type', 'text/html')])
#    #return ["<h1 style='color:blue'>Hello There!</h1>"]
#    return "BOO".encode("utf-8")
