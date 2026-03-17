# Food-Delivery Website
## This is a static food delivery website using HTML, CSS, JavaScript

1. I deploy this project through docker and EC2 instance.

### 1. Launch EC2 Instance
Create an EC2 instance and connect using SSH.
```bash
sudo git clone https://github.com/Siddik2202/Food-Delivery.git
```

### 2. Then create a Dockerfile (already in root file) in your root folder, here I expose port 80 and copy files in Official Docker Nginx image
   
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

## Now we will deploy this static food delivery website through Jenkins without help of Docker.

#### 1. First of you Need you understand Jenkins, installation process, master-slave architechture and connect of them. 
### 2. SO 1st create declearative pipeline project with name and select github option with url.
### 3. Make sure you install apached/ nginx server on you ec2 and give rwx permission on var/www/html location then you can process.
```bash
sudo apt update
sudo apt install apache2 -y
# Bydefault static project store here
sudo chmod -R 777 /var/www/html
```
### 4. Make sure you used specific agent where you want to execute or use "agent any" on pipeline for random execute
### 5. Then copy jenkinsfile1 then past on pipeline and execute.
### 6. Now It will work If your setupp is correct.
