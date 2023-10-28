import { Body, Controller, Delete,Param, Get, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'




 
@Controller('tasks')
export class TasksController {
 
    constructor(private tasksService: TasksService) {}
    @Get()

       getAllTasks() { 
            return this.tasksService.getAllTask();
        }

    @Post()
        createTask(@Body() newTask: CreateTaskDto) {
            //@Body es la forma que el cliente nos puede mandar un dato, json, etc
          return this.tasksService.createTask(newTask.title, newTask.description);
        
        }
    @Delete(':id')   
    deleteTask(@Param('id') id: string){
        this.tasksService.deleteTask(id)
    }

    @Patch(":id") //patch actualiza de manera parcial algo
    updateTask(@Param("id") id: string, @Body() updatedFields:UpdateTaskDto) {  //utilizamos el servicio que ya habiamos creado
        return 
        
        this.tasksService.updateTask(id, updatedFields)
    }
}


