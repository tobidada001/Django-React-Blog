# About Keep-It-Simple-React-Django-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I basically created this web app to demonstrate the integration of ReactJS with Django backend.

In this app, I've implemented the Django REST framework to send and receive data between the client and server.

## Note

* After installing from requirements.txt, and you try to run this app, you may see an error from django-taggit-serializer saying cannot find ugettextlazy as _. 

* You need to navigate to that exact file your IDE says the error is coming from in django-taggit-serializer. Then delete the 'u' from ugettextlazy so that you now have "gettextlazy" and save. 

* After that, you can rerun the app.