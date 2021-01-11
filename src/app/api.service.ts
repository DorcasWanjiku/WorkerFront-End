import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    baseurl = "https://findjobo254.herokuapp.com";

    httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private https: HttpClient) { }

    getAllJobs(): Observable<any> {
        return this.https.get(this.baseurl + '/applications',
        { headers: this.httpHeaders })
    }
}
