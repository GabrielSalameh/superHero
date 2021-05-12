import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'SuperHero';
  name: string;
  slides = [];

  constructor(private heroService: AppService) {
  }

  ngOnInit() {
    //throw new Error('Method not implemented.');

  }


  getHeros(search) {

    //quick validation
    if (search == "" || search === undefined || search === null) {
      alert("Please enter a hero name!");
      return false;
    }

    this.heroService.getHeros(search)
      .pipe(first())
      .subscribe(
        data => {
          if (!data.response || data.response == "error") {
            alert(data.error);
            return false;
          }

          this.slides = data.results;

        });

  }


}

