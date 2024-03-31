import { createClient } from 'redis';

const client = createClient({
    password: '3L1Jj5wdxKihiXcCuPwhLFa74oR3SyEq',
    socket: {
        host: 'redis-13800.c311.eu-central-1-1.ec2.cloud.redislabs.com',
        port: 13800
    }
});

client.on('error', (err) => console.log(err))

if (!client.isOpen) {
    client.connect()
}

export { client }