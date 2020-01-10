import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';


import { map } from 'rxjs/operators';
@Injectable()
export class ArtistlistService {

  constructor(private http:Http) { }
  
  //retrivingcontacts
  //getContacts(){
    //return this.http.get('https://itunes.apple.com/search?term=%20%20artistName&limit=1')
   // .pipe(map(res=>res.json()));  

  //}

 


}
