# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the yarn.lock and package.json to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your NestJS application will run on (change this to your application's port)
EXPOSE 3001

# Define the command to start your NestJS application (adjust this to your application's start script)
CMD ["yarn", "start"]
