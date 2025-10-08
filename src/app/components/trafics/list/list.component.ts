import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
 
interface Traffic{
    id: number;
    termek:string;
    vevo:string;
    kategoriaId:number;
    egyseg:string;
    nettoar:number;
    mennyiseg:number;
    kiadva:boolean;
}

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListTrafComponent implements OnInit {
  traffics: Traffic[] = []

  async ngOnInit() {
    try{
      const response = await axios.get('http://localhost:3000/traffic');
      this.traffics=response.data;
    }
    catch(error){
      console.log(error);

    }
    
    
  }
}