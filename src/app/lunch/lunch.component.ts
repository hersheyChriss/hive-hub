import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nom } from '../nom';
import { NomService } from '../nom.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  noms: Nom[];
  seconded;

  constructor(private nomService: NomService) {}


  ngOnInit() {
  	this.getNoms();
  }

  public getNoms(): void {
	  this.nomService.getNoms()
	  .subscribe(noms => this.noms = noms);
  }




  /*public postNoms(nomName: string, nomPic_path: string, nomSeconded: boolean, nomVotes: number):void {
  	let nom = {
  		name: nomName,
  		pic_path: nomPic_path,
  		seconded: nomSeconded,
  		votes: nomVotes
  	}

  	let URL = '/api/nominations/';
  	this.http.post(URL, nom);
  }*/

  public add(name: string):void {
	name = name.trim();
	if (!name) {return; }
	this.noms.push({name} as Nom);

  }

  public second():void {
	this.seconded = true;
  }

}
