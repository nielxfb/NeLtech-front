FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development Stage
FROM base AS development
ENV NODE_ENV=development
COPY . .
CMD ["npm", "run", "dev"]

# Production Stage
FROM base AS production
ENV NODE_ENV=production
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
