# Model Gateway Admin UI

Admin UI for [Model Gateway](https://github.com/modelgw/modelgw). Uses Model Gateway Management API to manage it. Built with Next.js and Tailwind.

## Run via Docker

Admin UI must be running on the same network as Model Gateway to be able to connect to Model Gateway Management API.

```sh
docker network create modelgw
docker run --detach --restart=always --network modelgw --name modelgw-admin \
-e GRAPHQL_URL=http://modelgw:4000/graphql \
-e NEXT_PUBLIC_GATEWAY_URL=https://gateway.modelgw.example.com \
-p 3000:3000 \
modelgw/modelgw-admin:latest
```

When Admin UI starts you can open [http://localhost:3000](http://localhost:3000). To log in use credentials configured directly in Model Gateway.


## Environment Variables

- `GRAPHQL_URL` - URL of [Model Gateway](https://github.com/modelgw/modelgw)'s GraphQL Management API, e.g. http://modelgw:4000/graphql
- `NEXT_PUBLIC_GATEWAY_URL` - URL of [Model Gateway](https://github.com/modelgw/modelgw)'s gateway. This is where your app will connect. Can be behind some other HTTP server or firewall, e.g. http://modelgw:4001.


## Build

### Build Docker image

```sh
docker build -t modelgw/modelgw-admin:latest --progress=plain .
```