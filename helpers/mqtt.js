import { useEffect } from 'react';
import mqtt from 'mqtt';
import dashboardAction from '../redux/dashboard/actions';
import { useSelector, useDispatch } from 'react-redux';

const hostMqtt = process.env.NEXT_PUBLIC_MQTT_HOST;
const port = process.env.NEXT_PUBLIC_MQTT_PORT;
const protocol = process.env.NEXT_PUBLIC_MQTT_PROTOCOL;
const secretKey = process.env.NEXT_PUBLIC_SECRETKEY;

const { updateFetchedTrxData } = dashboardAction;

export default function Mqtt() {

    const dispatch = useDispatch();
    const { loginData } = useSelector((state) => state.Auth);

    console.log('CHECK LOGIN DATA', loginData);

    useEffect(() => {

       if (loginData) {
            const computedTopic = `TRXDASHBOARD-${secretKey}-${loginData.username}`;
            console.log('CHECK TOPIC', computedTopic)

            const client = mqtt.connect(`${protocol}://${hostMqtt}:${port}/mqtt`);

            client.on("connect", () => {
                console.log("CONNECTED TO MQTT BROKER");
                client.subscribe(computedTopic, (err) => {
                    if (!err) {
                        console.log(`SUBSCRIBED TO ${computedTopic}`);
                    }
                });
            });

            client.on("message", (topic, payload) => {
                console.log(`RECEIVED MESSAGE: ${payload.toString()}`);
                dispatch(updateFetchedTrxData(JSON.parse(payload.toString())));
            });
       }
    }, [loginData, dispatch]);
}