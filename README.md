# CPE-KMUTT-Web

## Getting Started

Preparing the server environment

### Server Setup

Install Docker and Docker-compose follow this link

- [Docker Setup](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
- [Docker-Compose Setup](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)

### Prerequisites

- MongoDB cli 4.x
- Mongo Restore (For Remote/Server)
- Ubuntu 18 (For server)
- mongo-tools

### Project Setup

##### Server Setup

clone project

```sh
git clone https://github.com/yee2542/CPE-KMUTT-Web
cd ./CPE-KMUTT-Web
```

### Docker

run projecy via Docker in dev environment

```console
$ docker-compose -f docker-compose.dev.yml up --build
```

or with monitoring

```console
$ docker-compose -f docker-compose.dev.yml -f docker-compose.monitoring.dev.yml up --build
```

### Production deployment

for production running, please prepare `.env.prod` and

```console
$ docker-compose -f docker-compose.prod.yml --env-file .env.prod up -d --build --scale frontend=3
```

please check the proxy config in [nginx.conf](./proxy/nginx.conf) to match the `--scale` setting

### Issues

#### DB

when db not start cause have no permission to create dir e.g.

`mkdir: cannot create directory`

fix by this command

```console
$ sudo chown -R 1001 ./db
```

#### Strapi

default admin account

| username              | password  |
| --------------------- | --------- |
| admin@cpe.kmutt.ac.th | Admin2021 |

###### Codegen

how to build a new API and generate native code for frontend

- add new `collection/single` type via strapi admin http://localhost:1337/admin
- config permission for `public` user http://localhost:1337/admin/settings/users-permissions/roles
- play query on strapi graphql http://localhost:1337/graphql
- copy your query to `frontend/src` and should be placed in `service` domain
  file name should following this convention `[name-w-action].operation.graphql`
- run `yarn codegen` on frontend project
  then call by graphql client in `next/pages` following these example in _src/pages/index.tsx_

```tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetHomeQuery>({
    query: GetHomeDocument,
    variables: { locale: 'th' },
  });
  return {
    props: { data },
  };
};
```

###### Build Library

since we've a custom library for strapi e.g. WYSIWYG, it needed for external build before starting strapi by following these steps

```console

# point to strapi plugin
$ cd ./strapi/plugins/wysiwyg

# install dependency for plugin
$ yarn

# build on /strapi
cd ../../
$ yarn build

```

##### Common issues

Due to conflicting dependencies, stop the `cpe-kmutt-strapi` container and delete `/strapi/node_modules` before restarting the strapi container to install a correct dependence on its own. Do not use yarn to install dependencies.

##### Restore Strapi data

For testing stage, using mongo-tools for restore a data.

```console
$ cd /qa/strapi

$ mongorestore --host="localhost:27017" --username root --password cpeKMUTT@WebSite --authenticationDatabase admin
```
