import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  pdfSrc = "/assets/docs/NickResumeSept20.pdf";

  constructor() { }

  ngOnInit() {
  }

}
