import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataModelList } from '../dataModelList'
import { CrudManipulationService } from '../crud-manipulation.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.scss']
})
export class InformationViewComponent implements OnInit {

  public statusCode: number;

  public apiURL = 'http://jsonplaceholder.typicode.com/users'
  public apiDataList: DataModelList[];

  @Input() parentDataList: DataModelList[];
  @Output() toEditData = new EventEmitter();

  constructor(private serveData: CrudManipulationService, private http: HttpClient) { }

  ngOnInit() {
  }

  edit(data : DataModelList) {
    Swal.fire({
      title: 'Edit data',
      icon: 'info',
      confirmButtonText: 'ok'
    })
      this.toEditData.emit(data)
  }


  onDelete(dataID : any){
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: `Are you sure you want to delete this data ?`,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    reverseButtons: false
  }).then((result) => {
    if (result.value) {
      
    this.serveData.deleteData(dataID)
    .subscribe(data => {
      this.parentDataList.splice(this.parentDataList.indexOf(dataID),1);
      // console.log(this.parentDataList.indexOf(dataID));
      // console.log(dataID)
    });
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your data has been deleted.',
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
  }

}


