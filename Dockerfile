# Dockerfile

# Stage 1: Install dependencies and compile TypeScript
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Install Prisma CLI for migration and generating Prisma Client
RUN npm install prisma -g

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Compile TypeScript to JavaScript
RUN npm run build

# Stage 2: Use a smaller image for running the app
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the compiled app from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma
COPY .env .

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["node", "dist/app.js"]


#   docker-compose run app npx prisma migrate dev --name init

#   docker-compose up -d

#   docker-compose logs -f app

#   docker-compose down