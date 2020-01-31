import { Component, OnInit } from '@angular/core';
import { DataModelList } from '../dataModelList';
import { CrudManipulationService } from '../crud-manipulation.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information-view-details',
  templateUrl: './information-view-details.component.html',
  styleUrls: ['./information-view-details.component.scss']
})
export class InformationViewDetailsComponent implements OnInit {

  public id : number;
  public userList : Array<DataModelList> = [];

  constructor(private router : ActivatedRoute, private serveData: CrudManipulationService,) { }

  ngOnInit() {
    const id = this.router.snapshot.params['id'];

    this.serveData.viewData(id).subscribe(posts => {
      this.userList.push(posts)
      console.log(posts)
    })
  }



}
