import { Injectable } from '@angular/core';
import { WorkExperience } from './models/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceListService {

  private workExperiences: WorkExperience[] = [
    {
      employerImageUrl: './assets/merchants-insurance-group.png',
      employer: 'Merchants Insurance Group',
      employerAddress: '250 Main St, Buffalo, NY 14202',
      timePeriod: 'May 2023 - Present',
      jobTitle: 'Full-Stack Developer',
      responsibilities: [
        'TODO'
      ],
      skills: [
        'Angular', 'TypeScript', '.NET', 'C#', 'Python', "Microsoft SQL Server", 'Ocelot', 'RabbitMQ', 'Windows Tasks', 'Windows Service Jobs', 'Technical Writing', 'Teamwork', 'Mentoring'
      ]
    },
    {
      employerImageUrl: './assets/cybra-corporation.png',
      employer: 'CYBRA Corporation',
      employerAddress: '954 Union Rd, West Seneca, NY 14224',
      timePeriod: 'July 2022 - March 2023',
      jobTitle: 'Junior Software Engineer',
      responsibilities: [
        'Participated as an active component of an Agile development team, often collaborating with other developers',
        'Debugged current and legacy software, sometimes on client-specific copies of the application',
        'Contributed to the development of an upcoming web-based product using the Angular / Spring Boot stack',
        'Instrumental in designing and implementing a new UI scheme in the company\'s MarkMagic Lite application',
        'Skilled enough to earn responsibility over critical components of the company\'s new product three weeks into employment'
      ],
      skills: [
        'Angular', 'TypeScript', 'Spring Boot', 'Java', 'Teamwork'
      ]
    },
    {
      employerImageUrl: './assets/canisius-university.png',
      employer: 'Canisius University; QSD',
      employerAddress: '2001 Main St, Buffalo, NY 14208',
      timePeriod: 'February 2021 - May 2022',
      jobTitle: 'Tutor and Teacher\'s Assistant',
      responsibilities: [
        'Assisted students with understanding class materials in face-to-face and online mediums',
        'Managed the Computer Science department’s tutoring program by creating the tutoring schedule and operating as a source of support and assistance for emerging issues',
        'Represented the Computer Science department as a student panelist during Accepted Students Day',
        'Cybersecurity Principles (CYB 500)',
        'Information Organization and PRocessing (CSC 310)',
        'Distributed Computing and Operating System Design (CSC 330)'
      ],
      skills: [
        'Teaching', 'Leadership', 'Test Creation', 'Public Speaking'
      ]
    },
    {
      employerImageUrl: './assets/buffalo-computer-graphics.png',
      employer: 'Buffalo Computer Graphics',
      employerAddress: '4185 Bayview Rd, Blasdell, NY 14219',
      timePeriod: 'May 2021 - August 2021',
      jobTitle: 'Automated Testing Intern',
      responsibilities: [
        'Created and executed automated tests for the DisasterLAN program using Robot Framework',
        'Modified existing documents in Microsoft Word to conform to and meet ISO requirements',
        'Wrote technical documentation for an in-house browser extension tool',
        'Developed a tool in Robot Framework to generalize the company\'s testing object library'
      ],
      skills: [
        'Python', 'Robot Framework', 'pandas', 'Technical Writing'
      ]
    },
    {
      employerImageUrl: './assets/canisius-university.png',
      employer: 'Canisius University, NGO',
      employerAddress: '2001 Main St, Buffalo, NY 14208',
      timePeriod: 'June 2020 - August 2020',
      jobTitle: 'Lead Orientation Leader',
      responsibilities: [
        'Served as a leader of academic and campus information for incoming first - year students and orientation leaders',
        'Conducted meetings and presentations for transfer students and Computer Science major students',
        'Created content weekly for the New Student Orientation Instagram account',
        'Composed sections for the Orientation Leader Manual, including a guide on how to operate classroom computer equipment, NSO contact sheets, and campus resources',
        'Directed two New Student Orientation videos, including a welcome video for the organization\'s Instagram page and a tutorial video for online resources',
        'Designed and executed a campus scavenger hunt that operated beyond expectations',
        'Assisted a local party event company in cleaning up the campus'
      ],
      skills: [
        'Leadership', 'Teamwork', 'Public Speaking', 'Microsoft Office', 'Social Media', 'Canva'
      ]
    },
    {
      employerImageUrl: './assets/canisius-university.png',
      employer: 'Canisius University, NGO',
      employerAddress: '2001 Main St, Buffalo, NY 14208',
      timePeriod: 'August 2019',
      jobTitle: 'Orientation Leader',
      responsibilities: [
        'Assisted New Griff Orientation in welcoming Canisius University\'s class of 2023',
        'Collaborated with a partner to direct a group of 30 students through social and learning opportunities'
      ],
      skills: [
        'Teamwork', 'Leadership', 'Public Speaking'
      ]
    },
    {
      employerImageUrl: './assets/consumers-beverages.png',
      employer: 'Consumer\'s Beverages',
      employerAddress: '6161 West Quaker St., Orchard Park, NY 14127',
      timePeriod: 'May 2019 - July 2019',
      jobTitle: 'Store Clerk',
      responsibilities: [
        'Processed cash and credit transactions, tendering correct change to patrons',
        'Stocked shelves and ice bins, calculated returnable containers, and tapped kegs to the satisfaction of customers and at the standards set by Consumer\'s Beverages',
        'Resolved customer concerns positively and professionally to ensure recurring business',
        'Maintained a clean environment for patrons and fellow employees',
      ],
      skills: [
        'Teamwork', 'Customer Service'
      ]
    }
  ];

  constructor() { }

  public getWorkExperiences(): WorkExperience[] {
    return this.workExperiences;
  }
}
