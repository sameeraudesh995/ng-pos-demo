import {Component, OnInit} from '@angular/core';
import {CustomerToolbarComponent} from "../customer-toolbar/customer-toolbar.component";
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {CustomerService} from '../../services/customer.service';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteModelComponent} from '../customer-delete-model/customer-delete-model.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CustomerToolbarComponent,
    MatPaginator,
    MatButton,
    NgForOf
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{

  page:any=0;
  size:any=10;
  searchText:any='';
  dataArray:any[]=[];
  count:any=0;
  pageEvent:PageEvent | undefined

  constructor(private snackBarServices: MatSnackBar, private customerService: CustomerService, private _matDialog: MatDialog) {
  }

  ngOnInit(): void {
      this.loadAllCustomer();
  }


  private loadAllCustomer() {
    this.customerService.loadAllCustomer(this.searchText,this.page,this.size).subscribe({
      next:response=>{
        this.dataArray=response?.data.dataList;
        this.count=response?.data.count;
        console.log(this.dataArray)
        },
      error:error=>console.log(error),
      complete:()=>{}
    })
  }

  getServerData(pageData: any) {
    this.page=pageData?.pageIndex;
    this.size=pageData?.pageSize;
    this.loadAllCustomer();

  }

  search(text: any) {
    this.searchText=text;
    this.loadAllCustomer();
  }

  deleteRequest(data: any) {
  let dialogRef =  this._matDialog.open(CustomerDeleteModelComponent,{
      width:'500px',
      data:data
    });
  dialogRef.afterClosed().subscribe(resp=>{
    if(resp){
      this.customerService.deleteCustomer(data?.id).subscribe(resp=>{
        this.snackBarServices.open("Deleted", "Close",{
          horizontalPosition:"end",
          verticalPosition:"bottom",
          duration:5000
        });
        this.loadAllCustomer()
      })
    }
  })
  }
}
