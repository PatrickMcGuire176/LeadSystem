# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:19-alpine as build
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json package-lock.json ./
RUN npm install

# Copy the main application
COPY . ./

# Arguments
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

# Build the application
RUN npm run build

#### Stage 2: Serve the React application from Nginx 
FROM nginx:1.22.1-alpine
#
## Copy the react build from Stage 1
COPY --from=build /app/build /var/www

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker host, so we can access it 
# from the outside.
EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]