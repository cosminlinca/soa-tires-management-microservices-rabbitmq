import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {TireModule} from './tire/tire.module';

@Module({
    imports: [MongooseModule.forRoot("mongodb://mongodb:27017/nest_main", {
        autoCreate: true
    }), TireModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
