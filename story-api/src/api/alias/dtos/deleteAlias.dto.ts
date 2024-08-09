import { Exclude, Expose, Type } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'

@Exclude()
export class DeleteAliasRequestDTO {
    @Expose()
    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    id: number
}