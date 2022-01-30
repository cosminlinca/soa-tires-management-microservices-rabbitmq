import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Tire {
    @Prop()
    id: number;

    @Prop()
    title: string;

    @Prop()
    image: string;

    @Prop()
    description: string;
}

export const TireSchema = SchemaFactory.createForClass(Tire);