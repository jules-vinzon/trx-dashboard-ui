FROM node:22.9.0

ENV NEXT_PUBLIC_SECRETKEY=TRXDASHBOARD02242025
ENV NEXT_PUBLIC_API_URL=https://trx-dashboard-api-production.up.railway.app
ENV NEXT_PUBLIC_MQTT_HOST=broker.hivemq.com
ENV NEXT_PUBLIC_MQTT_PORT=8884
ENV NEXT_PUBLIC_MQTT_PROTOCOL=wss

WORKDIR /app
ADD ./package*.json /app/
ADD ./yarn.lock /app/
RUN yarn install
ADD . /app/
RUN yarn run build

CMD ["yarn", "start"]
