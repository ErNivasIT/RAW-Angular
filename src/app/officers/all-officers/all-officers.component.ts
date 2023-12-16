import { Component } from '@angular/core';
import { OfficersapiService } from '../../officersapi.service';
import { NgFor, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-all-officers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-officers.component.html',
  providers: [OfficersapiService]
})
export class AllOfficersComponent {
  officerList: any = [];
  constructor(private api: OfficersapiService) {
  }
  ngOnInit() {
    this.api.getOfficersList().subscribe(p => {
      this.officerList = p;
      console.log(this.officerList);
    });
    console.log(this.officerList);
  }
}
