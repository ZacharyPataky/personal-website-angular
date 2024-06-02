import { Injectable } from '@angular/core';
import { Education } from './models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationListService {

  private educations: Education[] = [
    {
      educationName: 'Canisius University',
      educationAchievement: 'Computer Science BS',
      degreeInformation: {
        educationImage: './assets/canisius-university.png',
        educationName: 'Canisius University',
        educationAddress: '2001 Main St, Buffalo, NY 14208',
        major: 'Computer Science',
        minor: 'Leadership',
        gpa: '3.98/4.00'
      },
      activities: [
        {
          activityTitle: 'FUSION Gaming Society',
          membership: 'Member',
          description: 'A social club that unites members of Canisius University through the mutual enjoyment of multiplayer gaming experiences, including but not limited to video, board, card, and tabletop games.\nWeekly meetings involved students congregating together playing games spanning numerous consoles and tables.'
        },
        {
          activityTitle: 'Anime Club',
          membership: 'Member',
          description: 'A social and cultural club focused on promoting a deeper appreciation for Japanese animation(anime) as an art form.\nWeekly meetings entail students voting on watching the current host\'s chosen shows, as well as voting for the next week\'s lineup.'
        },
        {
          activityTitle: 'Computer Studies Club',
          membership: 'Member',
          description: 'A social and educational club that intends to unite those not only interested in the field of computers, but are also concerned as to where computers stand in our present and future societies.\nCommon events include guest speakers, resume and technical workshops, and more.'
        },
        {
          activityTitle: 'New Griff Orientation',
          membership: '(Lead) Orientation Leader',
          description: 'This organization facilitates the transition of incoming undergraduate students and their family members to Canisius University  by introducing them to the Jesuit values of leadership, inclusion, and social justice by providing shared experiences and information to set the tone for academic success, personal growth, and meaningful connections.'
        }
      ],
      honorsAndAwards: [
        {
          honorName: 'Dean\'s List',
          timePeriod: 'Fall 2018',
          description: 'Awarded to students who have attained a grade point average of at least 3.50 for the semester and have completed at least four courses of three credits or equivalent.'
        },
        {
          honorName: 'Dean\'s List with Distinction',
          timePeriod: 'Spring 2019 - Spring 2022',
          description: 'Awarded to students who have attained a grade point average of 4.00 for the semester and have completed at least four courses of three credits or equivalent.'
        },
        {
          honorName: 'Computer Science Excellence in Academics Award',
          timePeriod: 'May 2022',
          description: 'Presented to graduating computer science majors who have achieved an outstanding academic performance.'
        }
      ],
      courseHighlights: [
        {
          groupTitle: 'Computer Science Highlights',
          courses: [
            'Data Structures', 'Computer Hardware', 'Discrete Mathematics', 'Automata and Algorithms',
            'Software Engineering', 'Operating System Design and Distributed Computing', 'Intelligent Systems',
            'Comparative Programming Languages', 'Information Organization and Processing',
            'The Social Impact of Computing', 'Intro to Web Development', 'Cybersecurity Principles'
          ]
        },
        {
          groupTitle: 'Other Highlights',
          courses: [
            'Intro to Army and Critical Thinking', 'Foundations of Leadership', 'Introduction to Management',
            'Ethics', 'Philosophy of Law', 'Cyber Policies, Ethics, and Law'
          ]
        }
      ],
      majorProjects: [
        {
          projectTitle: 'Distributed Computing Exercise',
          timePeriod: 'Fall 2020',
          description: 'Created a distributed information processing and querying system capable of handling large quantities of data by leveraging the MPI library.\nDeveloped in C++.'
        },
        {
          projectTitle: 'Color-Ona',
          timePeriod: 'Fall 2020',
          description: 'Operated as Project Manager and programmer for a semester-long project creating a video game.\nDeveloped in Java using the LibGDX library.'
        },
        {
          projectTitle: 'Resume Website',
          timePeriod: 'Spring 2022',
          description: 'Produced a personal resume website as the capstone project of my Web Development class.\nDeveloped in HTML, CSS, Javascript, and PHP.'
        }
      ]
    }
  ];

  constructor() { }

  public getEducations(): Education[] {
    return this.educations;
  }
}
