import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficersapiService } from '../../officersapi.service';

@Component({
  selector: 'app-add-officer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-officer.component.html'
})
export class AddOfficerComponent {
  isModalShowable:boolean=false;
  response:any;
  officerForm = new FormGroup({
    Name: new FormControl('Shree', [Validators.required, Validators.minLength(4)]),
    FatherName: new FormControl('Rambabu Kushwah'),
    Gender: new FormControl('1'),
    MotherName: new FormControl('Badam Bai'),
    NickName: new FormControl('Nivas'),
    Designation: new FormControl('1'),
    DOB: new FormControl('1986/06/02'),
    DOJ: new FormControl('2002/01/12'),
    Address: new FormControl('House No 1,East Nishatpura, Near Railway Crossing Bhopal '),
    Posting: new FormControl('Bhopal'),
    Posting_From: new FormControl('2022/10/10'),
    Posting_Upto: new FormControl('2023/10/10'),
    Added_By:new FormControl('Administrator')

  });
  constructor(private officerApi: OfficersapiService) { }
  onSubmit() {
    this.officerApi.addOfficer(this.officerForm.value)
      .subscribe(p => {
        this.response=p;
        this.isModalShowable=true;
      });

    //console.log(this.officerForm.value);
  }
}
