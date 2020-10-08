import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../models/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  projects: Project[];

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().then(res => {
      this.projects = res;
    });
  }

}
