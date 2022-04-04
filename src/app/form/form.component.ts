import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Person } from '../classes/person';
import { TableComponent } from '../table/table.component';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private formService: FormService) { }
  @ViewChild(TableComponent) table: TableComponent | undefined;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.isEdit = true;
        this.id = params['id'];
        this.mapPersonById(this.id);
      }
    }
    )
  }
  id!: number;
  isEdit: boolean = false;
  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    surName: ['', Validators.required],
    emailAddress: ['', Validators.email],
    listPhone: this.formBuilder.array([]),
  });
  get listPhone() {
    return this.profileForm.controls["listPhone"] as FormArray
  }
  mapPersonById(id: number) {
    this.formService.getPersonById(id).subscribe((data: any) => {
      let person = data;
      for (let phone in person.result.phones) {
        this.newPhone();
      }
      this.profileForm.patchValue({
        name: person.result.name,
        surName: person.result.surname,
        emailAddress: person.result.emailAddress,
        listPhone: person.result.phones,
      });
    }
    )
  }
  newPhone() {
    const phone = this.formBuilder.group({
      number: ['', Validators.length == 10],
      regionCode: ['', Validators.required]
    });
    this.listPhone.push(phone);
  };
  removePhone(i: number) {
    this.listPhone.removeAt(i);
  }
  onSubmit() {
    let person = new Person(this.profileForm.value["name"],
      this.profileForm.value["surName"],
      this.profileForm.value["emailAddress"],
      this.profileForm.value["listPhone"]);
    if (!this.isEdit) {
      this.formService.addNewPerson(person).subscribe((response: any) => {
        alert(response.result);
      });
    } else {
      this.formService.editPerson(person, this.id).subscribe((response: any) => {
        alert(response.success);
      })
    }
    setTimeout(() => { this.router.navigate(['/first-component']); }, 1000);

  }
}
