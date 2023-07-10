import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projectsData = [
    {
      imageUrl:
        'https://cdn.discordapp.com/attachments/798248185155289101/835413211104280576/Screenshot_20210424-124159.png',
      title: 'Recipie App',
    },
    {
      imageUrl:
        'https://cdn.discordapp.com/attachments/773525005580500996/835143325304619018/Screenshot_20210423-184835.png',
      title: 'Book cricket',
    },
    {
      imageUrl:
        'https://cdn.discordapp.com/attachments/798248185155289101/835421870584233994/Screenshot_114.png',
      title: 'Shop-app',
    },
  ];
}
