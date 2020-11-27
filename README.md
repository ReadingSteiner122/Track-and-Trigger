# Track-and-Trigger
 Home Management Application
 # Dependencies
 You'll need to install the following list of packages (using whatever package manager you want) to run this package:
 1. Django (pip install django)
 2. social-auth-app-django (pip install social-auth-app-django)
 3. Some Bootstrap css files
 4. Django Rest Framework (pip install djangorestframework)
 5. Markdown (pip install markdown)
 6. pip install django-cors-headers 
 7. pip install django-rest-knox
 8. pip install py3-validate-email

 python manage.py makemigrations
 python manage.py migrate

 9.  npm install
 10. npm install antd
 11. npm install react-router-dom
 That's about it.
 # How to Run
 If you want to run the app on your localhost server, run the command python manage.py runserver within the TrackTrigger directory.  
 # REST-API Links
  "users": "http://localhost:8000/api/users/",
   "diary": "http://localhost:8000/api/diary/",
   "inventory_object": "http://localhost:8000/api/inventory_object/",
   "todoitem": "http://localhost:8000/api/todoitem/",
   "image_object": "http://localhost:8000/api/image_object/"
   You can test the response using POSTMAN (Download it online). To use POSTMAN simply click on the application, run the backend django server, and then try GET and POST requests to the required API link, you'll be able to see the response for GET requests.
