import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TireModule} from './tire/tire.module';
import {AuthorizationModule} from './authorization/authorization.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'rootroot',
            database: 'nest_admin',
            autoLoadEntities: true,
            synchronize: true,
        }),
        TireModule,
        AuthorizationModule,
        ConfigModule.forRoot()
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
