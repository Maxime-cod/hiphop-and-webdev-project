# Use official Node.js 18 base image (compatible with hiphop.js)
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy only package files first (to cache Docker layers)
COPY package*.json ./

# Install dependencies (including .tgz packages)
RUN npm install

# Copy the rest of the project files
COPY . .

# Default command (can be changed per use case)
CMD [ "node" ]
