import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validator, Validators } from '@angular/forms';

function seatsValidator(control: FormControl): { [key: string]: boolean } | null {
  if (control.value !== null && (isNaN(control.value) || control.value < 0 || control.value > 8)) {
    return { 'invalidSeats': true };
  }
  return null;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'AngFormValidation';
  detailsForm:FormGroup|undefined;
  submittedData:any[]=[];
  constructor(private frm:FormBuilder){

  }
  
  ngOnInit(): void {
    this.detailsForm = this.frm.group({
      InputName:['',Validators.required],
      InputStart:['',Validators.required],
      InputDestination:['',Validators.required],
      InputSeats:['',[Validators.required,seatsValidator]]
    });
  }
  onSubmit(){
    if(this.detailsForm?.valid){
      const formData = this.detailsForm.value;
      this.submittedData.push(formData);
      this.detailsForm.reset();
      alert('Form Submitted');
    }
    else{
      alert('Form is invalid');
    }
  }
}
