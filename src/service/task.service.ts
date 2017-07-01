import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { Task } from "../model/task.model";

@Injectable()
export class TaskService {
    private tasks:Task[];
    constructor(private storage: Storage) {
    }

    addTask(task: Task) {
        this.tasks.push(task);
        this.storage.set("tasks", this.tasks);
    }

    removeTask(task: Task) {

        let index = -1;
        for (let i = 0; i < this.tasks.length; i++) {
            if ((this.tasks[i].title == task.title) &&
                (this.tasks[i].detail == task.detail)) {
                index = i;
            }
        }

        if (index != -1) {
            this.tasks.splice(index, 1);
            this.storage.set('tasks', this.tasks);
        }

        /*
        this.storage.get('tasks').then(
            (tasks) => {
                tasks=JSON.parse(tasks);
                let tmptasks = tasks == null ? [] : tasks;
                let index = -1;
                for (let i = 0; i < tasks.length; i++) {
                    console.log("tasks[i].title=" +tasks[i].title);
                    console.log("task.title=" +task.title);
                    if (tasks[i].title == task.title) {
                        index = i;
                        break;
                    }
                }
                console.log("index= "+index);
                if (index != -1) {
                    tmptasks.splice(index,1);
                    this.storage.set('tasks', JSON.stringify( tmptasks));
                }
            }
        );
        */
    }

    getTasks() {
        //it will return a Promise - > then will return a promise
        //this.storage.remove("tasks");
        return this.storage.get('tasks').then(
            (tasks) => {
                if (tasks == null) {
                    this.tasks=[];
                    return this.tasks;
                } else {
                    this.tasks = tasks.slice()
                    return this.tasks;
                }
            }
        );
    }
}