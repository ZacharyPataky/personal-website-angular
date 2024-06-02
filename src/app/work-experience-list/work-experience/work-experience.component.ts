import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../models/work-experience.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [MatExpansionModule, MatChipsModule, MatListModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnInit {

  // The <WorkExperience> that's passed in via <app-work-experience-list>
  @Input() workExperience!: WorkExperience;

  // Expansion Panel toggler
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
