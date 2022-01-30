import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Tire} from './tire.entity';

@Injectable()
export class TireService {
    constructor(
        @InjectRepository(Tire) private readonly tireRepository: Repository<Tire>
    ) {
    }

    async all(): Promise<Tire[]> {
        return this.tireRepository.find();
    }

    async get(id: number): Promise<Tire> {
        return this.tireRepository.findOne({id});
    }

    async create(tire): Promise<Tire> {
        return this.tireRepository.save(tire);
    }

    async update(id: number, tire): Promise<any> {
        return this.tireRepository.update(id, tire);
    }

    async delete(id: number): Promise<any> {
        return this.tireRepository.delete(id);
    }
}
