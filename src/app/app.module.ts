import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeCoralComponent } from './component/resume-coral/resume-coral.component';
import { ResumeSerifComponent } from './component/resume-serif/resume-serif.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ModeranWriterComponent } from './component/moderan-writer/moderan-writer.component';
import { SpearmintComponent } from './component/spearmint/spearmint.component';
import { SwissComponent } from './component/swiss/swiss.component';



@NgModule({
  declarations: [
    AppComponent,
    ResumeCoralComponent,
    ResumeSerifComponent,
    DashboardComponent,
    ModeranWriterComponent,
    SpearmintComponent,
    SwissComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
