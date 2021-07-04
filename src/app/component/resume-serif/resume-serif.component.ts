import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import { FormControl, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import {fromEvent, Subscription} from "rxjs";
import $ from 'jquery';
import * as html2pdf from 'html2pdf.js'


@Component({
  selector: 'app-resume-serif',
  templateUrl: './resume-serif.component.html',
  styleUrls: ['./resume-serif.component.css']
})
export class ResumeSerifComponent implements OnInit {

  resumeForm: FormGroup
  details: Subscription
  experience_error:any={isError:false,errorMessage:''};
  education_error:any={isError:false,errorMessage:''};
  project_error:any={isError:false,errorMessage:''};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      cod: [''],
      languages: [''],
      skills: [''],
      experience: this.fb.array([]),
      education: this.fb.array([]),
      project: this.fb.array([]),
      awards: this.fb.array([]),
   });
  
  
    this.addExperience()
    this.addEducation()
    this.addProject()
    this.addAwards()
  
  
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, this.option);
    });
  }


  get experienceForm(){
    return this.resumeForm.get('experience') as FormArray
  }
  
  get educationForm(){
    return this.resumeForm.get('education') as FormArray
  }
  
  get projectForm(){
    return this.resumeForm.get('project') as FormArray
  }
  
  get awardsForm(){
    return this.resumeForm.get('awards') as FormArray
  }
  
  addExperience(){
      this.experienceForm.push(this.fb.group({
      company_name: [''],
       company_location: [''],
       company_job_title: [''],
       company_enter: [''],
       company_out: [''],
       company_details: [''],
      }));
  
      document.querySelector('.addex').addEventListener('click', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
    }
  
  addEducation(){
      this.educationForm.push(this.fb.group({
       school_name: '',
       school_location: '',
       school_Degree: '',
       school_enter: '',
       school_out: '',
      }));
  
  
      document.querySelector('.added').addEventListener('click', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  }
  
  addProject(){
      this.projectForm.push(this.fb.group({
      project_name: '',
       project_started: '',
       project_ended: '',
       project_description: '',
      }));
  
  
      document.querySelector('.addp').addEventListener('click', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems);
    });
  }
  
  addAwards(){
      this.awardsForm.push(this.fb.group({
      award_name: '',
       award_description: ''
      }));
  }
  
  
  public onDate(event,i){
    if(event.target.id == "company_enter"){
      this.resumeForm.value.experience[event.target.attributes['formid'].value]['company_enter'] = event.srcElement.value
      console.log("company_enter", event.srcElement.value)
    }
    else if(event.target.id == "company_out"){
      this.resumeForm.value.experience[event.target.attributes['formid'].value]['company_out'] = event.srcElement.value
  
      if(new Date(this.resumeForm.value.experience[event.target.attributes['formid'].value]['company_out'])<new Date(this.resumeForm.value.experience[event.target.attributes['formid'].value]['company_enter'])){
        this.experience_error= {isError:true, errorMessage:"End Date can't before start date"};
     }else{
        this.experience_error= {isError:false, errorMessage:""};
     }
     console.log(this.experience_error)
    }
    else if(event.target.id == "school_enter"){
      this.resumeForm.value.education[event.target.attributes['formid'].value]['school_enter'] = event.srcElement.value
      console.log("school_enter", event.srcElement.value)
    }
  
    else if(event.target.id == "school_out"){
      this.resumeForm.value.education[event.target.attributes['formid'].value]['school_out'] = event.srcElement.value
      console.log("school_out", event.srcElement.value)
  
      if(new Date(this.resumeForm.value.education[event.target.attributes['formid'].value]['school_out'])<new Date(this.resumeForm.value.education[event.target.attributes['formid'].value]['school_enter'])){
        this.education_error= {isError:true, errorMessage:"End Date can't before start date"};
     }else{
        this.education_error= {isError:false, errorMessage:""};
     }
  
    }
    else if(event.target.id == "project_started"){
      this.resumeForm.value.project[event.target.attributes['formid'].value]['project_started'] = event.srcElement.value
      console.log("project_started", event.srcElement.value)
    }
    else if(event.target.id == "project_ended"){
      this.resumeForm.value.project[event.target.attributes['formid'].value]['project_ended'] = event.srcElement.value
      console.log("project_ended", event.srcElement.value)
  
      if(new Date(this.resumeForm.value.project[event.target.attributes['formid'].value]['project_ended'])<new Date(this.resumeForm.value.project[event.target.attributes['formid'].value]['project_started'])){
        this.project_error= {isError:true, errorMessage:"End Date can't before start date"};
     }else{
       this.project_error= {isError:false, errorMessage:""};
     }
  
    }else{
      console.log(event, "-----------------------------------------------------------------------------")
    }
    }
  
  
   Dataform(){
     console.log(this.resumeForm.value)
     console.log(this.resumeForm.status)
    }
  
  
    pdf_file(){
      const options = {
        margin:       [5, 6.5, 5, 6.5],
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { orientation: 'portrait' }
      }
    const constant:Element =  document.getElementById('HeaderFooter');
    html2pdf()
      .from(constant)
      .set(options)
      .save()
  
  
    }

}
