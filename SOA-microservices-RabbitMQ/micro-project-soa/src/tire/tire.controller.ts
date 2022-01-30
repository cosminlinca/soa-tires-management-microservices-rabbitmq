import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {TireService} from './tire.service';
import {ClientProxy} from "@nestjs/microservices";
import {AuthorizationGuard} from "../authorization/authorization.guard";

@Controller('tires')
export class TireController {
    constructor(private tireService: TireService,
                @Inject("TIRE_SERVICE") private readonly client: ClientProxy) {
    }

    @Get()
    all() {
        return this.tireService.all();
    }

    @UseGuards(AuthorizationGuard)
    @Get(':id')
    async get(@Param('id') id: number) {
        return this.tireService.get(id);
    }

    @UseGuards(AuthorizationGuard)
    @Post()
    async create(
        @Body("title") title: string,
        @Body('image') image: string,
        @Body('description') description: string) {
        const tire = await this.tireService.create({
            title, image, description
        });

        this.client.emit('tire_created', tire);
        return tire;
    }

    @UseGuards(AuthorizationGuard)
    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body("title") title: string,
        @Body('image') image: string,
        @Body('description') description: string) {

        await this.tireService.update(id, {
            title, image, description
        });

        const tire = await this.tireService.get(id);
        this.client.emit('tire_updated', tire);
        return tire;
    }

    @UseGuards(AuthorizationGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.tireService.delete(id);
        this.client.emit('tire_deleted', id);
    }
}
