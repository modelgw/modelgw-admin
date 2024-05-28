FROM node:20-alpine AS builder

# Create app directory
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

# Install app dependencies
# RUN apk add --no-cache python3 make g++
COPY package*.json /app/
RUN npm ci --fund=false --audit=false

# Bundle app source
COPY . /app
ENV NODE_ENV=production

RUN npm run build


FROM node:20-alpine AS runner

# Create app directory
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME 0.0.0.0

CMD ["node", "server.js"]
