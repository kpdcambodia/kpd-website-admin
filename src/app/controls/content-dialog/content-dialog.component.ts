import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.css']
})
export class ContentDialogComponent {

  form: FormGroup | any
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.form  =this.fb.group({
      content: [null, Validators.required]
  })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
