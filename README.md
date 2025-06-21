# Food-Delivery
This is a static food delivery website
<br>
Using HTML, CSS and JavaScript.

I also run this project through docker and EC2 instance.

First host a instance server then clone your file.

Then create a Dockerfile in your root folder

docker build -t my-static-website . Run this command for build images

After creating images run this to containerzing docker run -d -p 8080:80 my-static-website

Here will store out files in this location "usr/share/nginx/html" default root directory where Nginx looks for static files (like .html, .css, .js) to serve when it starts up.

Then run http://<your public id>:8080 according to my project. Thank you 
