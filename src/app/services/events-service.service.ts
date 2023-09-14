import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../models/events'; 

@Injectable({
  providedIn: 'root',
})
export class EventsServiceService {
  // API des events
  private _eventsApi: string = 'https://localhost:7245/api/Activity/NextActivities';

  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<Events[]> {
    console.log("ok c'est passé");
    return this.httpClient.get<Events[]>(this._eventsApi);
  }
}
