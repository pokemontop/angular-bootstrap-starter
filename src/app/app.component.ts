import { Component,OnInit, } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'ngbd-buttons-radio-reactive',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app works!';

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
