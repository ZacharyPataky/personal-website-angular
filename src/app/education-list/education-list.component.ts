import { Component, OnInit } from '@angular/core';
import { Education } from './models/education.model';
import { EducationComponent } from './education/education.component';
import { EducationListService } from './education-list.service';

@Component({
  selector: 'app-education-list',
  standalone: true,
  imports: [EducationComponent],
  templateUrl: './education-list.component.html',
  styleUrl: './education-list.component.scss'
})
export class EducationListComponent implements OnInit {

  educations!: Education[];

  constructor(
    private educationListService: EducationListService
  ) { }

  ngOnInit(): void {
    this.educations = this.educationListService.getEducations();
  }
}
