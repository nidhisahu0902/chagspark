import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
