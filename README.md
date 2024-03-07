# Dockerizing a React App using Vite

Requirements: have Docker and Node.js installed

## Create React app using Vite
    Create a folder for your React app, inside that folder open a terminal and write the command code . to open up vscode
    Inside vscode open a terminal (ctrl j) then type out these commands
        npm create vite@latest giesbrecht_dennis_ui_garden
        Select React and Typescript 
        cd giesbrecht_dennis_ui_garden
        npm install
        npm run dev

## Create the docker file
    Create a docker file named Dockerfile inside the projects directory 
    Add these lines inside 
        FROM node:21
        WORKDIR /app
        COPY package.json .
        RUN npm install
        COPY . .
        EXPOSE 8083
        CMD ["npm", "run", "storybook", "-p", "8083"]

    What this does it sets up a containerized Node.js environment, sets a working directory called app inside the container and copyies the local package.json to the container
    Then it installs the application dependencies, copies remaining files from local to the /app inside the container, sets up that the application inside the container uses port 8083
    Lastly it executes npm run storybook -p 8083 which starts the server on port 8083
    Using Docker makes it easier to deploy consistantly across different environments

    Create a .dockerignore file and write 'node_modules', this will keep the Docker image size smaller and it gets all required dependencies throught the npm install command 
    meaning it only contains files needed to run the application

## Create the docker image and container
    To create a docker image and container you need to have docker running so launch the desktop application 
    Still inside the same Vscode terminal as before write these lines
        docker build -t giesbrecht_dennis_coding_assignment12 .             This builds a Docker image specifying the image name along with a "." indicating that the build context is in the current directory      

        docker run -p 8083:8083 giesbrecht_dennis_coding_assignment12       This runs a Docker container from a specified image. 8083:8083 maps the port inside the container to a port on the host machine

## Access the Web Application
    Input http://localhost:8083 in your browser
