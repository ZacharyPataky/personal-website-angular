import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../models/education.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatExpansionModule, MatListModule, MatTabsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  // The <Education> that's passed in via <app-education-list>
  @Input() education!: Education;

  // Expansion Panel toggler
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
