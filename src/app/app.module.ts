import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FooterComponent } from './footer/footer.component';
import { ModelSComponent } from './model-s/model-s.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { AuthService } from './services/AuthService';
import { DataBindingChildComponent } from './data-binding-child/data-binding-child.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ModelXComponent } from './model-x/model-x.component';
import { Model3Component } from './model-3/model-3.component';

const appRoutes: Routes = [
  { path:'', component: CarousalComponent },
  { path: 'models', component: ModelSComponent },
  { path: 'data-binding', component: DataBindingComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'modelx', component: ModelXComponent },
  { path: 'model3', component: Model3Component },
  

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousalComponent,
    FooterComponent,
    ModelSComponent,
    DataBindingComponent,
    DataBindingChildComponent,
    SignUpComponent,
    ModelXComponent,
    Model3Component
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
