import { Component, TemplateRef } from '@angular/core';
import { OfficersapiService } from '../../officersapi.service';
import { NgFor, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModalDismissReasons, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-officers',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './all-officers.component.html',
  providers: [OfficersapiService,RouterModule,HttpClientModule,NgbModule]
})
export class AllOfficersComponent {
  officerList: any = [];
  closeResult = '';
  constructor(private api: OfficersapiService,private router: Router,private modalService:NgbModal) {
  }
  
  ngOnInit() {
    this.api.getOfficersList().subscribe(p => {
      this.officerList = p;
    });
  }
  edit(id: number) {
    this.router.navigate(['/edit-officer', id]);
  } 
  posting(id: number) {
    this.router.navigate(['/add-posting', id]);
  }
  view_officer_posting(officer_id: number) {
    this.router.navigate(['/view-officer-posting', officer_id]);
  }
}
