# Model Gateway Admin Console

Admin Console for [Model Gateway](https://github.com/modelgw/modelgw). Uses Model Gateway Management API to manage it. Built with Next.js and Tailwind.

## [Documentation ➡️ https://modelgw.com/docs](https://modelgw.com/docs)

##  Development

### Configuration

Create `.env.local` or use environment variables to run in dev mode:

```sh
NEXT_PUBLIC_GATEWAY_URL=http://localhost:4001
GRAPHQL_URL=http://localhost:4000/graphql
```

### Starting in dev mode

Install dependencies and start dev mode:

```sh
npm ci
npm run dev
```

## Build

### Build Docker image

```sh
docker build -t modelgw/modelgw-admin:latest --progress=plain .
```
