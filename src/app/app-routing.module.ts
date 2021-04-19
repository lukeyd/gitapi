import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FollowersResolver } from './resolvers/followers.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile/:user', component: ProfileComponent, resolve: {followers: FollowersResolver}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
