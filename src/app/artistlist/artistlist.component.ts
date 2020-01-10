import { Component, OnInit } from '@angular/core';
import{ArtistlistService}from './artistlist.service';
import{Artistlist} from './artistlist';
//export interface Service {
 // value: string;
 // viewValue: string;
//}

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css'],
 // providers:[ArtistlistService]
})
export class ArtistlistComponent implements OnInit {
  //contacts:Artistlist[];
  //contact:Artistlist;
  constructor(/*private artistlistService:ArtistlistService*/) { }

  ngOnInit() {

   //  this.artistlistService.getContacts()
   // .subscribe(contacts=>
    //  this.contacts=contacts);
  }
  }


