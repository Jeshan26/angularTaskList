import { Component, OnInit } from '@angular/core';
// imorting taks
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  tasks:any;
  _id:string;
  name:string;
  complete:boolean;
  priority:string;
  constructor(private taskService :TaskService) { }

  ngOnInit(): void {
    showForm : true
     this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe(res=>{     
      console.log(res);
      this.tasks = res;
      
    })
  }

  // task serive api appe call hojana jado eh initialize hou by angular
addTask(): void{
//create task object
let newTask={
name : this.name,
priority : this.priority,
complete: this.complete
}
// call the service to add task then refresh the task list
this.taskService.addTask(newTask).subscribe(res=>{ 
  this.getTasks();
  this.clearForm();
  
})
}
 
clearForm():void{  
  this.name= null;
  this.priority= null;
  this.complete = null;
  
}

deleteTask(_id:string) : void{
if(confirm('Are you sure you want to delete this?')){
  this.taskService.deleteTask(_id).subscribe((res)=>{
    this.getTasks();
  })
}

}
 
updateTask(): void{
  //create task object
  let task={
    _id: this._id,
  name : this.name,
  priority : this.priority,
  complete: this.complete
  }
  // call the service to add task then refresh the task list
  this.taskService.updateTask(task).subscribe(res=>{
    this.getTasks();
    this.clearForm();
    // this.showForm=false;
  })
  }

  selectTask(task){
   this._id = task._id;
   this.name = task.name;
   this.priority= task.priority;
   this.complete = task.complete;

  }
   


}
