# Food-Delivery Website
## This is a static food delivery website using HTML, CSS, JavaScript

1. I deploy this project through docker and EC2 instance.

### 1. Launch EC2 Instance
Create an EC2 instance and connect using SSH.
```bash
sudo git clone https://github.com/Siddik2202/Food-Delivery.git
```

### 2. Then create a Dockerfile in your root folder, here I expose port 80 and copy files in Official Docker Nginx image
   
   Run this command for build images
   
 ```bash
docker build -t my-static-website .
```

#### 3. After creating images run this to containerzing 
```bash
docker run -d -p 8080:80 my-static-website
```

* Here will store our files in this location "usr/share/nginx/html"(Official Docker Nginx image) default root directory where Nginx looks for static files (like .html, .css, .js) to serve when it starts up.

#### 4. Befor browser it, Add inbound rule 8080 tcp port.

Then run http://< your ip >:8080 according to my project.

Thank you 
