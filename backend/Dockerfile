FROM ubuntu:22.04 as base

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update -y && apt-get install -y \
    software-properties-common \
    apt-transport-https \
    curl 
# nodejs 19x LTS Debian
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash -

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# install depdencies
RUN apt-get update -y && apt-get install -y --allow-unauthenticated \
    nodejs

# Install yarn seperately due to `no-install-recommends` to skip nodejs install 
RUN apt-get install -y --no-install-recommends yarn

FROM base as build

WORKDIR /www
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn install
COPY . .
COPY .env .env

RUN yarn build
RUN rm -rf node_modules && yarn install --production
RUN yarn cache clean
RUN yarn autoclean --force

FROM base as final

WORKDIR /www
COPY --from=build /www/node_modules ./node_modules
COPY --from=build /www/dist ./dist
COPY --from=build /www/package.json ./package.json

ENV RUN_MODE="docker"
ENV NODE_ENV = "production"

CMD [ "yarn", "start:prod" ]
