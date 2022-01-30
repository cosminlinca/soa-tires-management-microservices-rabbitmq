import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Tire } from '../../../tire';

@Component({
  selector: 'app-tires',
  templateUrl: './tires.component.html',
  styleUrls: ['./tires.component.css']
})
export class TiresComponent implements OnInit {

  tires = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik96UzY2WW9GLVBkbEhWYXU3eG05ZSJ9.eyJpc3MiOiJodHRwczovL2Rldi1hYzRhdDcwcS51cy5hdXRoMC5jb20vIiwic3ViIjoiaVpSSjJHc3MzRzRDUlVuMlNjM21Ud20ySGZ3VjFqcjFAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdGlyZXMtc29hLWFwaSIsImlhdCI6MTY0MzQ4MTUwOSwiZXhwIjoxNjQzNTY3OTA5LCJhenAiOiJpWlJKMkdzczNHNENSVW4yU2MzbVR3bTJIZndWMWpyMSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.IDZdJcoDWnSITx4CNqyGYX1MtSJOHFfCnsHzZiWxGQiN0WOSgsAlTq7fJofzNcWE5MUoeSWe98Dcg8gev4jKA1mSYtMb5AIKMUj1GFVXm0s5XrPExBNRz-kuOL2KhJt_WWz68YVvk09EkHvjYvpfrA8KAnGY_-b-oJTVNmJUfomMetuAUc4MSU7bHAAxaFIZK9HUPcQsceRTOqM1FlU-qP-nVQ300Yk_aB10uNy8qNBF_jv2eXLqHQuVHHTBA-syBJYFcLKBu2oV5bZQny5l4AmJsR1JBw3Dj7kuBVxbScwSwRxwBQxitTE7iGLOeBstEPF6vNIevelVOROTHDhyhQ' })
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/tires', this.httpOptions).subscribe(
      (tires: Tire[]) => {
        this.tires = tires;
      }
    )
  }

  delete(id: number): void {
    if (confirm("Are you sure you want to delete this tire?")) {
      this.httpClient.delete(`http://localhost:8000/api/tires/${id}`, this.httpOptions).subscribe(
        () => {
          this.tires = this.tires.filter(tire => tire.id !== id);
        }
      )
    }
  }
}
