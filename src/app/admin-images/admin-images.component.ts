import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';


@Component({
  selector: 'app-admin-images',
  templateUrl: './admin-images.component.html',
  styleUrls: ['./admin-images.component.css']
})

export class AdminImagesComponent implements OnInit {

  constructor( private http: HttpClient){}
 
  //variable declarations
  selectedFile: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  urls = new Array<string>();

  //Get access to the file
  fileChange(fileInput: any) {
    this.urls = [];
    console.log(fileInput);
    let files= fileInput.target.files;
    //this.preview(this.selectedFile);
    if(files){
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  onUpload(){
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    this.http.post('C:\Users\DOMINIQUEOREJEL\Desktop\AppImages', uploadData).subscribe(res => {
      console.log(res);
      //this.uploadedFilePath = res.data.filePath;
      alert('Success!');
    })

  }
 ngOnInit() {
  }

}
