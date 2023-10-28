import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import {v4} from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';
@Injectable()
export class TasksService {

    //simula DB
  private tasks: Task[] = [
    {
        id: '1',
        title: 'first task',
        description: 'some task',
        status: TaskStatus.PENDING,
    }
];
  



getAllTask(){
    return this.tasks;
}


createTask(title: string, description:string, ){
   const task = {
    id: v4(),
    title,
    description,
    status: TaskStatus.PENDING
   } 
    this.tasks.push(task) //añadimos tareas al arreglo
    return task;
}

deleteTask(id:string){
   this.tasks = this.tasks.filter(task => task.id != id)

}

getTaskById(id:string): Task{   //devuelve un objeto de tipo tarea -> busca tarea por ID
return this.tasks.find(task => task.id === id)
}

updateTask(id: string, updateField:UpdateTaskDto): Task {
    const task = this.getTaskById(id) //consideramos que la tarea existe
    const newTask = Object.assign(task,updateField)
    this.tasks =  this.tasks.map(task => task.id === id ? newTask : task) // si la tarea coincide coloca el neuvo dato actualizado si no lo remplaza 
    return newTask; 
}

}