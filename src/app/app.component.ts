import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  application = [{title:'test',}];
  selectedApplication: any;
  searchTerm: string | undefined;
  title = 'WorkerFront-End';

  constructor(private api: ApiService) {
    this.getApplications();
    this.selectedApplication = {id: -1, documents: '', timestamp: 1,user: 1, job: 1}
  }

  getApplications = () => {
    this.api.getAllJobs().subscribe(
      data => {
        this.application = data;
      },
      error => {
        console.log(error)
      }
    );
  }
}
