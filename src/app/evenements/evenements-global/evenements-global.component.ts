import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { EventsServiceService } from 'src/app/services/events-service.service';

@Component({
  selector: 'app-evenements-global',
  templateUrl: './evenements-global.component.html',
  styleUrls: ['./evenements-global.component.scss'],
})
export class EvenementsGlobalComponent implements OnInit {
  _tabEvents: Events[] = [];
  constructor(private eventsService: EventsServiceService) {}

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe({
      next: (events) => {
        this._tabEvents = events;
        console.log('Les événements ont été récupérés avec succès :');
        console.log(events);
      },
      error: (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des événements :",
          error
        );
      },
    });
  }

  // sur clique on affiche la description + nombre de participants max
  DescriptionVisible = false;
  afficheDescription() {
    this.DescriptionVisible = !this.DescriptionVisible;
  }
}
