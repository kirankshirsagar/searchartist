import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchartistComponent } from './searchartist/searchartist.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';

const routes: Routes = [
  {path:'',component:SearchartistComponent},
  {path:'artistlist',component:ArtistlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
