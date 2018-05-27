import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form Ng5';

  reactiveForm:FormGroup;
  description:string='';
  name:string='';
  post:any;

  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  createForm(){
    console.log('this is createForm');
    this.reactiveForm=this.formBuilder.group({
      'name': [null, Validators.required],
      'description':[null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate':''
    });
  }

  addPost(post){
    this.description=post.description;
    this.name=post.name;
  }
}
