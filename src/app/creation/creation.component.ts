import {Component, Input, OnInit, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormInputComponent} from "../shared/formular/form-input/form-input.component";
import {FormDropdownComponent} from "../shared/formular/form-dropdown/form-dropdown.component";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputComponent,
    FormDropdownComponent,
  ],
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  @Input()
  public modalView = false

  myForm?: FormGroup;
  status = ["test", "Test2", "test3"]
  occupations: string[] = ["FE", "BE", "OP"];

  constructor(private fb: FormBuilder,
              @Optional() private dialogRef: DialogRef) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      status: ['', Validators.required],
      occupation: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log(form.get('firstName')?.value)
  }

  closeModal() {
    this.dialogRef.close()
  }
}
