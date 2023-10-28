//detallamos lo que puede llegar desde el cliente 

import { TaskStatus } from "../tasks.entity"
import {IsNotEmpty, IsString, MinLength} from 'class-validator'

export class CreateTaskDto {
    @IsString() // valida que el campo sea un string 
    @IsNotEmpty() // este decorador validaque el campo no este vacio
    @MinLength(3) //este decorador valida la cantidad minima de caracteres
    title: string
    description: string
}

export class UpdateTaskDto{
    title?: string                  //agregando el signo de pregunta indicamos que el dato de acceso es opcional
    descirption?: string
    status?: TaskStatus
}