import {Injectable, OnInit} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Project} from './models/project';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];
  items: any;

  constructor(public db: AngularFireDatabase) { }


  getProjects(): Promise<Project[]> {
    return new Promise<Project[]>(resolve => {
      this.projects = [];
      this.db.list('/projects').valueChanges().subscribe(res => {
        this.items = res;
        this.items.forEach(item => {
          const project = new Project();
          project.img = item.img;
          project.description = item.description;
          project.name = item.name;
          this.projects.push(project);
        });
        resolve(this.projects);
      });
    });
  }


}
