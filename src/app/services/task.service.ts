import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';

// instantiate  headers so that al calls are json formateed
const httpOptions ={ headers:  new HttpHeaders({
  'Content-Type': 'application/json'
})}

// get api server path from config
import globals from "../../../../config/globals.js";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
// injecting http client to load
  constructor(private http:HttpClient) {  
  }
  // get all request from node api format n csll / response as json

  getTasks(){
    return this.http.get(globals.apiRoot+'/tasks',httpOptions)
  }

  // post request to add task
  addTask(newTask){
    let s =this.http.post(globals.apiRoot + "/tasks",newTask,httpOptions);
    console.log(s);
    
  return s
  }

  // delete  task
  deleteTask(_id:string){
   return this.http.delete(globals.apiRoot + "/tasks/" + _id, httpOptions)
  }

   // update  task
   updateTask(task){
    return this.http.put(globals.apiRoot + "/tasks/" + task._id,task,  httpOptions)
   }

}
