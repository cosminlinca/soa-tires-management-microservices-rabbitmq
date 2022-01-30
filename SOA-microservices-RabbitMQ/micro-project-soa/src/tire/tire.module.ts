import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TireController} from './tire.controller';
import {Tire} from './tire.entity';
import {TireService} from './tire.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {ConfigModule} from "@nestjs/config";
import {AuthorizationModule} from "../authorization/authorization.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Tire]),
        ClientsModule.register([
            {
                name: 'TIRE_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqps://wwnqcviv:oY9vpFX0FHji8GP8rvj1-LR2G8hIbqUT@cow.rmq2.cloudamqp.com/wwnqcviv'],
                    queue: 'main_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
        AuthorizationModule,
        ConfigModule.forRoot()
    ],
    controllers: [TireController],
    providers: [TireService]
})
export class TireModule {
}
