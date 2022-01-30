# Specify node version and choose image
FROM node:14.17 as build

# Set working directory
WORKDIR /app-client-2

# Copy the package.jsons from host to container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ../main-app/package*.json .
COPY ../main-app/tsconfig.build.json .
COPY ../main-app/tsconfig.json .

# Here we install all the deps
RUN npm install

# Bundle app source / copy all other files
COPY ../main-app/ .

# Build the app to the /dist folder
RUN npm run build

# Build another image
FROM node:14.17

# Set Working Directory
WORKDIR /app-client-2
COPY ../main-app/package.json .
RUN npm install --only=production

# Copy all from build
COPY --from=build /app-client-2/dist ./dist

EXPOSE 8081

# Run app
CMD npm run start:prod

# Example Commands to build and run the dockerfile
# docker build -t micro-client-1 .
# docker run micro-client-1




