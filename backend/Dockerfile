# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your NestJS application will run on (change this to your application's port)
EXPOSE 3000

# Define the command to start your NestJS application (adjust this to your application's start script)
CMD ["npm", "start"]
