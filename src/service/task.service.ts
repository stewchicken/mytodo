import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { Task } from "../model/task.model";
import { Video } from "../model/video.model";

@Injectable()
export class TaskService {
    private tasks: Task[];
    private videos: Video[];
    constructor(private storage: Storage) {
    }

    addVideo(video: Video) {
        this.videos.push(video);
        this.storage.set("videos", this.videos);
        return Promise.resolve(this.videos);
    }

    addTask(task: Task) {
        this.tasks.push(task);
        this.storage.set("tasks", this.tasks);
    }

    removeVideo(video: Video) {
        let index = -1;
        for (let i = 0; i < this.videos.length; i++) {
            if (this.videos[i].id == video.id) {
                index = i;
            }
        }
        if (index != -1) {
            this.videos.splice(index, 1);
            this.storage.set('videos', this.videos);
        }

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
            this.storage.set("tasks", this.tasks);
        }

    }

    removeAllViedos() {
        return this.storage.remove("videos").then(
            (videos) => {
                console.log(videos);
                return this.videos = [];
            }
        );
    }

    getTasks() {
        return this.storage.get("tasks").then(
            (tasks) => {
                if (tasks == null) {
                    this.tasks = [];
                    return this.tasks;
                } else {
                    this.tasks = tasks.slice()
                    return this.tasks;
                }
            }
        );
    }

    getVideos() {
        return this.storage.get("videos").then(
            (videos) => {
                if (videos == null) {
                    this.videos = [];
                    return this.videos;
                } else {
                    this.videos = videos.slice()
                    return this.videos;
                }
            }
        );
    }
}