import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Core/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

ListEmploi:Emploi[]=[];
compteur!: number;
TextSearch!: string;

  constructor() { }

  ngOnInit(): void {
    this.ListEmploi=[
      {reference:"001",titre:"Offre1",entreprise:"Esprit",etat:true},
      {reference:"003",titre:"Offre3",entreprise:"actia",etat:false},
      {reference:"004",titre:"Offre4",entreprise:"sagemcom",etat:true},
      {reference:"005",titre:"Offre5",entreprise:"RGI",etat:true}
    ]

  }
  Bilan(){
    
     this.compteur=0;
      for (let i = 0; i < this.ListEmploi.length; i++) {
        if (this.ListEmploi[i].etat==true) {
          this.compteur++;
        }
      }
    }

    SearchEmploi(){
   let ListFilter: Emploi[]=[];
      this.compteur=0;
       for (let i = 0; i < this.ListEmploi.length; i++) {
         if (this.ListEmploi[i].entreprise==this.TextSearch) {
           ListFilter.push(this.ListEmploi[i]);
         }
       }
       this.ListEmploi=ListFilter;
     }

  }

 
 