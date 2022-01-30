import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://wwnqcviv:oY9vpFX0FHji8GP8rvj1-LR2G8hIbqUT@cow.rmq2.cloudamqp.com/wwnqcviv'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });

    await app.listen().then(() => {
        console.log("Microservice is listening!")
    })
}

bootstrap();
