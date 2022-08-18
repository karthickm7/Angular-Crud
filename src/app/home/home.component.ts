import { Component, OnInit, TemplateRef } from '@angular/core'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // userDatas: any=[];
  // currentUser: any;
  tableDatas:any;
  bsModalRef:BsModalRef;

  constructor(private service:CommonService , private toast:ToastrService ,private modalservice:BsModalService) { }

  ngOnInit(): void {
    // this.userDatas = localStorage.getItem('form-data');
    // this.currentUser=JSON.parse(this.userDatas)
   // console.log(typeof this.currentUser,"udatas")

    this.service.getData().subscribe((data)=>{
      this.tableDatas = data;
      console.log(this.tableDatas);
    })
  }

  onDelete(datas:number){
    this.service.DeleteDatas(datas).subscribe((data)=>{
    console.log(data ,'deleted data')

     this.toast.success('Successfully Deleted!');
  })}

  onEdit(template:TemplateRef<any>,datas:any){
    console.log(datas,"inside popup")
    this.bsModalRef = this.modalservice.show(template, {
      ignoreBackdropClick: false,
      class: 'modal-md custom-modal-content',

    })}

  CloseExitModal(){
    this.bsModalRef.hide();
  }

  saveChanges(data:any,title:any,des:any){
    this.service.EditDatas(data ,title,des).subscribe((data)=>{
        console.log(data)
    })
    this.bsModalRef.hide();
    this.toast.success("updated",title,des);

  }


}
