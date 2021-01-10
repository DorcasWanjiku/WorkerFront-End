import { Injectable } from "@angular/core";
import { Application } from "./application";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class ApplicationService {
    application: Application;

    constructor(public http:HttpClient) {
        this.application = new Application(1,"st",new Date(),1,1);
    }

    easyApply() {
        interface ApiResponse {
            id: number;
            documents: string;
            timestamp: Date;
            user: number;
            job: number;
        }
        let searchPoint = "https://findjobo254.herokuapp.com/applications"

        console.log("Should populate applications available")
        let promise = new Promise<void>((resolve, reject) => {
            this.http.get<ApiResponse>(searchPoint).toPromise().then(
                (results) => {
                    console.log("This is a job application")
                    console.log(results);
                    console.log("You should apply")
                    this.application = results;

                    resolve();
                },
                (error) => {
                    console.log(error);
                    reject();
                }
            );
        });
        return promise;
    }
}
