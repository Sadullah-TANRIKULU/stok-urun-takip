import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { InspectionApiService } from '../inspection-api.service';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent implements OnInit {
  name: string = '';
  birthday: string = '';
  public formObj: any = FormGroup;
  numeroData: any[] = [];
  params: any[] = [];
  formValue: any;
  constructor(
    private service: InspectionApiService,
  ) {
    this.service.inspectVal().subscribe(res => {
      this.params = res.data;
      console.log(this.params);


    })

  }

  inspect(formObj: NgForm) {
    this.formValue = formObj;
    console.log(this.formValue.birthday);

    this.splitName(this.formValue.name?.toString());
    this.splitBirthday(this.formValue.birthday?.toString());
    this.splitBirthdayCal(this.formValue.birthday_cal?.toString());
    this.splitNameCal(this.formValue.name_cal?.toString());
    this.service.inspectGet(formObj).subscribe(res => {
      this.numeroData = res.data;


    })

  }

  splitName(name: any) {
    const nameTmp = name.toUpperCase().split('');
    let total = 0;
    nameTmp.forEach((value: any) => {
      console.log(value);
      const findLetter = this.params.filter((param) => {
        if (param.letter === value) {
          total += Number(param.val);
        }
      })
    })
    console.log(total);
  }

  splitBirthday(birthday: any) {
    const birthdayTmp = birthday.replace('.', '').replace('.', '').split('');
    console.log(birthdayTmp);
    
    let totale = 0;
    birthdayTmp.forEach((value: any) => {
      console.log(value);
      totale += Number(value);
    })
    console.log(totale);
  }

  splitBirthdayCal(birthday_cal: any) {
    console.log(birthday_cal);
  }

  splitNameCal(name_cal: any) {
    console.log(name_cal);
  }

  ngOnInit(): void {
  }

}
