import { Component, OnInit } from '@angular/core';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-easyapply',
  templateUrl: './easyapply.component.html',
  styleUrls: ['./easyapply.component.css'],
  providers: [ApplicationService]
})
export class EasyapplyComponent implements OnInit {
  

  // title = "Easyapply"
  application: Application;

  constructor(private api: ApplicationService) { }

  easyApply() {
    this.api.easyApply().then(
      (success) => {
        this.application = this.api.application;
        console.log(this.application);
      },
      (err) => {
        console.log(err)
      }
    )
  }


  ngOnInit(): void {
    this.easyApply()
  }

}
