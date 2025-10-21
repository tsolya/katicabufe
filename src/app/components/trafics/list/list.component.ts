import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Traffic } from '../../../interfaces/traffic';
import { apires } from '../../../interfaces/response';
import { APIService } from '../../../services/api.service';
 


@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListTrafComponent implements OnInit {
  traffics: Traffic[] = []

  constructor(private api:APIService){}
  
  async ngOnInit() {
    this.api.SelectAll("traffics").then((res:apires) => {
      if(res.status == 200){
        this.traffics = res.data
        console.log(this.traffics)
      }
      else{
        alert(res.message)
      }
     
    })
 }
}