FROM node:22.9.0

ENV NEXT_PUBLIC_SECRETKEY="TRXDASHBOARD02242025"
# ENV NEXT_PUBLIC_API_URL="http://52.63.7.154:8080/v1/api/"

WORKDIR /app
ADD ./package*.json /app/
ADD ./yarn.lock /app/
RUN yarn install
ADD . /app/
RUN yarn run build

CMD ["yarn", "start"]
