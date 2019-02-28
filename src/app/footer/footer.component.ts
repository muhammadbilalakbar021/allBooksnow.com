import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { ModalComponent } from './modal/modal.component';




export interface dialogData
{
  email:String;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit 
{

  eMail:string;

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  modal(): void 
  {
    const dialogRef =this.dialog.open(ModalComponent, {
      data: {email: this.eMail}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.eMail = result;
      console.log(result);
    });
  }
    
}
