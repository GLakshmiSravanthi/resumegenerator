import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeCoralComponent } from './component/resume-coral/resume-coral.component';
import { ResumeSerifComponent } from './component/resume-serif/resume-serif.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ModeranWriterComponent } from './component/moderan-writer/moderan-writer.component';
import { SpearmintComponent } from './component/spearmint/spearmint.component';
import { SwissComponent } from './component/swiss/swiss.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'form', component: AppComponent},
  {path: 'coral', component: ResumeCoralComponent},
  {path: 'serif', component: ResumeSerifComponent},
  {path: 'modern-writer', component: ModeranWriterComponent},
  {path: 'spearmint', component: SpearmintComponent},
  {path: 'swiss', component: SwissComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
