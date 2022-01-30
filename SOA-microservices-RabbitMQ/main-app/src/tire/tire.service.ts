import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {Tire} from "./tire.model";

@Injectable()
export class TireService {
    constructor(
        @InjectModel(Tire.name) private readonly tireModel: Model<Tire>
    ) {
    }

    async all(): Promise<Tire[]> {
        return this.tireModel.find().exec();
    }

    async create(data): Promise<Tire> {
        return new this.tireModel(data).save();
    }

    async findOne(id: number): Promise<Tire> {
        return this.tireModel.findOne({id})
    }

    async update(id: number, data): Promise<any> {
        return this.tireModel.findOneAndUpdate({id}, data);
    }

    async delete(id: number): Promise<any> {
        return this.tireModel.deleteOne({id: id});
    }
}
