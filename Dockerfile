# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# Enable corepack to use pnpm
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

COPY package.json pnpm-lock.yaml .npmrc* ./*.cjs* ./*.js* ./*.json ./*.ts* ./
COPY tsconfig*.json vite.config.ts ./
COPY src ./src
COPY public ./public
COPY index.html ./

RUN pnpm install --frozen-lockfile
RUN pnpm build

# --- Runtime stage ---
FROM nginx:alpine AS runtime
WORKDIR /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


