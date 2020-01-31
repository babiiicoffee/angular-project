import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModelList } from '../dataModelList'
import { CrudManipulationService } from '../crud-manipulation.service'


import Swal from 'sweetalert2'
import { element } from 'protractor';

@Component({
  selector: 'app-information-add',
  templateUrl: './information-add.component.html',
  styleUrls: ['./information-add.component.scss']
})
export class InformationAddComponent implements OnInit {

  public fname: string;
  public email: string;
  public phone: string;

  public id: number;
  public addDataBtn: boolean = true;
  public updateDataBtn: boolean = false;
  public edit: boolean = false;

  public apiURL = 'http://jsonplaceholder.typicode.com/users'

  public apiDataList: DataModelList[];
  public addData: DataModelList;

  constructor(private serveData: CrudManipulationService, private http: HttpClient) { }



  ngOnInit() {
    this.serveData.getData().subscribe(Data => this.apiDataList = Data);
  }

  //  getData() {
  //   const data = this.http.get<ApiData[]>(this.apiURL).subscribe((Data: any[]) =>
  //     this.apiDataList = Data
  //   )
  //   return data;  
  // }

  onAddCreateData() {
    if (this.edit) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: `Are you sure you want to update this data ?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel',
        reverseButtons: false
      }).then((result) => {
        if (result.value) {

          this.apiDataList.forEach(data => {
            if (data.id == this.id) {
              data.name = this.fname,
                data.email = this.email,
                data.phone = this.phone
            }
          })
          swalWithBootstrapButtons.fire(
            'Updated!',
            'Your data has been updated.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your data is safe :)',
            'error'
          )
        }
      })
    } else {
      this.addData = {
        id: this.apiDataList[this.apiDataList.length - 1].id + 1,
        name: this.fname,
        email: this.email,
        phone: this.phone
      }
      this.serveData.createData(this.addData).subscribe(data => this.apiDataList.push(this.addData))
      Swal.fire({
        title: 'Successully added',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      console.log("on add function : ", this.apiDataList)
    }
  }

  updateData(data) {
    this.addDataBtn = false;
    this.updateDataBtn = true;
    this.edit = true;

    this.id = data.id;
    this.fname = data.name;
    this.email = data.email;
    this.phone = data.phone;
    console.log("on update in parent data from child passed to parent", data)
  }

  onCancel(sampleForm) {
    sampleForm.reset()
    this.updateDataBtn = false;
    this.addDataBtn = true;
  }


}





// }

// updateData(){


//   this.apiDataList.forEach(data => {
//     if(data.id == this.id){
//       data.name = this.fname,
//       data.email = this.email,
//       data.phone = this.phone
//     }
//     this.updateDataBtn = false;
//     this.addDataBtn = true;
//       // console.log("edit = true : ", data)
//     })

//     console.log(data)
// }

