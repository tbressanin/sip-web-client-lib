import { Kafka } from 'kafkajs';

export default class Main {
    /**
     *  Start application
     */
    constructor() {
        const kafka = new Kafka({
            clientId: 'MyApplication',
            brokers: ['kafka1:9092', 'kafka2:9092']
        })
    }
}

new Main();