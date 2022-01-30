import {Module} from '@nestjs/common';
import {TireController} from './tire.controller';
import {TireService} from './tire.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Tire, TireSchema} from "./tire.model";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Tire.name, schema: TireSchema}])
    ],
    controllers: [TireController],
    providers: [TireService]
})
export class TireModule {
}
