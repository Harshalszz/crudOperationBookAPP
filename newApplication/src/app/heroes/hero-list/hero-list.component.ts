import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit{

  heroes$!: Observable<Hero[]>; 

  constructor(private service: HeroService){}

  ngOnInit():void{
    this.heroes$ = this.service.getHeroes()
  }

}
