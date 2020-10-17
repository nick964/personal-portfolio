import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project: Project;
  @Output() isSelected = new EventEmitter<Project>();

  ngOnInit() {
  }

  selected() {
    this.isSelected.emit(this.project);
  }

}
