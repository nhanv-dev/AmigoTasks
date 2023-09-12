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

# Copy the environment file of the application code to the container
COPY .env .env

# Build the Next.js application
RUN yarn build

# Expose the port that your Next.js application will run on (default is 3000)
EXPOSE 3000

# Define the command to start your Next.js application
CMD ["yarn", "start"]
