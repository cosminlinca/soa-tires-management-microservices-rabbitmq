import {Controller, Get} from '@nestjs/common';
import {TireService} from "./tire.service";
import {EventPattern} from "@nestjs/microservices";

@Controller('tires')
export class TireController {
    constructor(private tireService: TireService) {
    }

    @Get()
    async all() {
        return this.tireService.all();
    }

    @EventPattern('tire_created')
    async tireCreated(tire: any) {
        console.log("APP - Create");
        await this.tireService.create({
            id: tire.id,
            title: tire.title,
            image: tire.image,
            description: tire.description
        })
    }

    @EventPattern('tire_updated')
    async tireUpdated(tire: any) {
        console.log("APP - Update");
        await this.tireService.update(tire.id, {
            id: tire.id,
            title: tire.title,
            image: tire.image,
            description: tire.description
        })
    }

    @EventPattern('tire_deleted')
    async tireDeleted(id: number) {
        console.log("APP - Delete");
        await this.tireService.delete(id);
    }
}
