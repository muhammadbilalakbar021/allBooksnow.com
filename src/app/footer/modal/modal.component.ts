import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Inject} from '@angular/core';
import {SubModalComponent} from './sub-modal/sub-modal.component';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit 
{

  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data:MatDialog , public dialog:MatDialog) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  open(){
    const dialogRef = this.dialog.open(SubModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
