### CI/CD Pipeline for a Node.js Web Application Architecture:
Developer
    |
    |  git push
    |
GitHub Repository
    |
    |--- npm ci
    |--- ESLint
    |--- jest Tests
    |
Automatic Deployment
    |
    |  SSH
    |
DigitalOcean Droplet
    |
    |---- Docker
    |        |
    |        |
    |   Node.js Container :3000
    |
    |----- PM2
    |       |
    |       |
    |   Node.js App :3000 
    |       |
    |       |
Nginx :80___|
    |       
    | 
    |
  User



### Step 1 — Create a GitHub Repository
- I created a GitHub repository for the project.


### Step 2 — Create the Node.js Application
- I created a Node.js application for the project.


### Step 3 — Configure ESLint
- I configured ESLint to detect problems in the JavaScript code, such as:
    * Syntax errors
    * Incorrectly written functions
    * Unnecessary variables
    * Incorrect usage of Jest functions in test code

- If ESLint detects any of these problems, the pipeline will fail and show exactly where the error occurs.


### Step 4 — Add Jest Tests
- I added Jest tests for testing the Node.js application. This allows us to verify whether the application code is working correctly or not.


### Step 5 — Create GitHub Actions CI
- I created a GitHub Actions CI workflow inside the project by creating the following file:

    " .github/workflows/ci.yaml "

- The GitHub Actions workflow performs the following steps:

    " Git Push --> GitHub Actions --> npm ci --> ESLint --> Jest --> Pass/Fail "

    * npm ci installs the project dependencies.
    * ESLint checks the JavaScript code for coding errors and other issues.
    * Jest runs the application tests.
    * If either ESLint or Jest fails, the CI pipeline also fails.

### Step 6 — Create a DigitalOcean Droplet
- I created a DigitalOcean Droplet. After creating the Droplet, I obtained its public IP address and used SSH to connect to the server.


### Step 7 — Set Up the Node.js Application on the Droplet
- After connecting to the Droplet, I installed Node.js on the server.
- Then I:
    * Cloned the GitHub repository.
    * Installed and checked the project dependencies.
    * Tested the application.
    * Checked the /health endpoint locally to verify that the application was working correctly.

### Step 8 — Install and Configure PM2
- I installed PM2 on the Droplet and used it to start the Node.js application.
- Then I checked the PM2 status to verify that the application was running successfully and showing an online status.


### Step 9 — Install and Configure Nginx
- I installed Nginx and created the required Nginx configuration file.
- After that, I:
    * Tested the Nginx configuration.
    * Restarted Nginx.
    * Opened a browser and accessed the Node.js application using the Droplet's public IP address.

- This allowed the Node.js application to be accessed through the server's public IP.


### Step 10 — Install and Configure Docker
- I installed and configured Docker on the server.
- Docker is used to containerize the Node.js application.
- I built the Docker image using:

    " docker build -t node-cicd-app . "

- Then I ran the Docker container using:
    " docker run -d \
        --name node-cicd-app-docker \
        -p 3001:3000 \
        --restart unless-stopped \
        node-cicd-app "

    * The application running inside the container on port 3000 is exposed through port 3001 on the server.

Node.js Application
       |
       |
   Dockerfile
       |
       |
docker build
       |
       |
Docker Image
       |
       |
Docker Container
       |
       |
Node.js App :3000


### Step 11 — Configure the Firewall
- I enabled the firewall and allowed the required ports:
    * SSH
    * HTTP
    * HTTPS
- After configuring the firewall, I checked its status to verify that the required rules were active.


### Step 12 — Configure GitHub Secrets
- I generated the required SSH credentials and stored the deployment information securely in GitHub Secrets.
- I configured the following secrets:
    * DO_HOST — DigitalOcean Droplet public IP address
    * DO_USER — Server username, such as root
    * DO_SSH_KEY — Private SSH key used to securely connect to the Droplet

- These secrets are used by GitHub Actions during the deployment process, so sensitive credentials are not stored directly in the repository.


### Step 13 — Set Up Continuous Deployment (CD)
- Finally, I configured the Continuous Deployment workflow.

git push origin main
    |
    |
GitHub Actions
    |
    |
   SSH
    |
    |
DigitalOcean
    |
    |
git pull
    |
    |
npm ci
    |
    |
PM2 reload
    |
    |
/health
    |
    |
Success

1. Code is pushed to the main branch.
2. GitHub Actions starts the deployment workflow.
3. GitHub Actions connects to the DigitalOcean Droplet through SSH.
4. The latest code is pulled from the GitHub repository using git pull.
5. Project dependencies are installed using npm ci.
6. PM2 reloads the Node.js application.
7. The /health endpoint is checked to verify that the application is running correctly.
8. If the health check succeeds, the deployment is considered successful.

