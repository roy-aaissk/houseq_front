FROM node:16-alpine

RUN apk update && \
    yarn global add create-nuxt-app

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH
ENV HOST 0.0.0.0
EXPOSE 3000

WORKDIR /app

CMD ["/bin/ash"]