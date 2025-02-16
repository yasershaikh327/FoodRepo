# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port on which the app runs
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
