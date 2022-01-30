import { Component, NgZone, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Tire } from 'projects/mfe1/src/app/tire';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-tire-create',
  templateUrl: './tire-create.component.html'
})
export class TireCreatePostComponent {

  alert:boolean = false;
  title = "";
  image = "";
  description = "";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik96UzY2WW9GLVBkbEhWYXU3eG05ZSJ9.eyJpc3MiOiJodHRwczovL2Rldi1hYzRhdDcwcS51cy5hdXRoMC5jb20vIiwic3ViIjoiaVpSSjJHc3MzRzRDUlVuMlNjM21Ud20ySGZ3VjFqcjFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdGlyZXMtc29hLWFwaSIsImlhdCI6MTY0MzQ4MTUwOSwiZXhwIjoxNjQzNTY3OTA5LCJhenAiOiJpWlJKMkdzczNHNENSVW4yU2MzbVR3bTJIZndWMWpyMSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.IDZdJcoDWnSITx4CNqyGYX1MtSJOHFfCnsHzZiWxGQiN0WOSgsAlTq7fJofzNcWE5MUoeSWe98Dcg8gev4jKA1mSYtMb5AIKMUj1GFVXm0s5XrPExBNRz-kuOL2KhJt_WWz68YVvk09EkHvjYvpfrA8KAnGY_-b-oJTVNmJUfomMetuAUc4MSU7bHAAxaFIZK9HUPcQsceRTOqM1FlU-qP-nVQ300Yk_aB10uNy8qNBF_jv2eXLqHQuVHHTBA-syBJYFcLKBu2oV5bZQny5l4AmJsR1JBw3Dj7kuBVxbScwSwRxwBQxitTE7iGLOeBstEPF6vNIevelVOROTHDhyhQ' })
  };
  
  constructor(private httpClient: HttpClient,
    private _ngZone: NgZone) { }

  ngOnInit() {
    this.alert = false;
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('fontSize') fontSize: MatSelect;
 
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    this.fontSize.close();
  }

  submit() {
    const data = {
      title: this.title,
      image: this.image,
      description: this.description
     };

     this.httpClient.post('http://localhost:8000/api/tires', data, this.httpOptions).subscribe(
        (tire: Tire) => {
          if (tire !== null) {
            this.title = "";
            this.image = "";
            this.description = "";
            this.alert = true;
          }
      }
    )
  }

  closeAlert() {
    this.alert = false;
  }
}
