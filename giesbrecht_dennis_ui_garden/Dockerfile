# Use an official Node runtime as a parent image
FROM node:21

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package.json .

# Install dependencies skip the devDependencies
RUN npm install 

# Bundle your app's source code inside the Docker image
COPY . .

# The container will respond to requests on this port
EXPOSE 8083

# Define the command to run Storybook on port 8083
CMD ["npm", "run", "storybook"]
