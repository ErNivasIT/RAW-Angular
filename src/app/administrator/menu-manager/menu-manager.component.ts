import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-manager',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './menu-manager.component.html',
})
export class MenuManagerComponent implements OnInit {
  menusGroup!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.menusGroup = this.fb.group({
      Added_By: ['Administrator'],
      Menus: this.fb.array([this.addDefaultMenu()])
    });
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.menusGroup.value);
  }
  getAllMenus(): FormArray {
    return this.menusGroup.get('Menus') as FormArray;
  }
  addDefaultMenu(): FormGroup {
    console.log(this.menusGroup?.value);
    return this.fb.group({
      pageTitle: ['Home'],
      link: ['/'],
    });
  }
  addBlankMenu(): FormGroup {
    return this.fb.group({
      pageTitle: [''],
      link: [''],
    });
  }
  addMenu(): void {
    (<FormArray>this.menusGroup.get('Menus')).push(this.addBlankMenu());
    console.log(this.menusGroup?.value);
  }
}
