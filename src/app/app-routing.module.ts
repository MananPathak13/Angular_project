import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { MyPlayListPageComponent } from './components/my-play-list-page/my-play-list-page.component';

const routes: Routes = [
  {path:"home",component:HomeScreenComponent},
  {path:"myPlaylist",component:MyPlayListPageComponent},
  {path:"**",component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
