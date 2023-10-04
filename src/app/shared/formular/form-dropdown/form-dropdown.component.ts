import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-dropdown.component.html',
  styleUrls: ['./form-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDropdownComponent),
      multi: true
    }
  ]
})
export class FormDropdownComponent implements OnInit, ControlValueAccessor {
  @Input() label?: string
  @Input() values!: string[]
  @Input() errorMessage?: string
  @Input({required: true}) formGroup!: FormGroup
  @Input() formControlName!: string
  @Input() defaultValue?: string
  value: string = "";
  disabled: boolean = false;

  ngOnInit() {
    if (this.defaultValue && this.values.includes(this.defaultValue)) {
      this.formGroup.get(this.formControlName)?.patchValue(this.defaultValue)
    }

  }

  showError() {
    let formElement = this.formGroup.get(this.formControlName)!;
    return formElement.invalid && (formElement.dirty || formElement.touched)
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChange: any = (value: any) => {
  }
  onTouch: any = () => {
  }
}
