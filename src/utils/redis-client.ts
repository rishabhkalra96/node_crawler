import * as redis from 'redis';

export default class RedisClient {
    private static privateClient: RedisClient;

    private constructor() {}

    private static createRedisClient() {
        const port = parseInt(process.env.REDIS_PORT, 10);
        const client = redis.createClient( port || 6379, process.env.REDIS_HOST || '127.0.0.1')
        client.on('connect', () => {
            console.log('redis now active');
        })
        client.on('error', (e) => {
            console.log('Error occured while setting up redis --> ', e.message);
        })
        RedisClient.privateClient = client;
        return RedisClient.client;
    }

    static get client() {
        if (!RedisClient.privateClient) {
            RedisClient.privateClient = RedisClient.createRedisClient();
        }
        return RedisClient.privateClient;
    }

    public static setupClient() {
        RedisClient.createRedisClient();
    }
}