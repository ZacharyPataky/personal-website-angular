import { Component, OnInit } from '@angular/core';
import { WorkExperience } from './models/work-experience.model';
import { WorkExperienceListService } from './work-experience-list.service';
import { WorkExperienceComponent } from "./work-experience/work-experience.component";

@Component({
  selector: 'app-work-experience-list',
  standalone: true,
  templateUrl: './work-experience-list.component.html',
  styleUrl: './work-experience-list.component.scss',
  imports: [WorkExperienceComponent]
})
export class WorkExperienceListComponent implements OnInit {

  workExperiences!: WorkExperience[];

  constructor(
    private workExperienceListService: WorkExperienceListService
  ) { }

  ngOnInit(): void {
    this.workExperiences = this.workExperienceListService.getWorkExperiences();
  }

}
