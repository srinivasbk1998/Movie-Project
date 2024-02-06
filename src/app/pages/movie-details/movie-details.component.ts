import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiserviceService } from 'src/app/service/movie-apiservice.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
            constructor(private service:MovieApiserviceService,private router:ActivatedRoute) {}
            getMoviDetailResult:any;
            getMovieVideoResult:any;
            getMovieCastResult:any;

            ngOnInit(): void {
              let getParamId = this.router.snapshot.paramMap.get('id');
              console.log(getParamId, 'getparamid#');

              this.getMovie(getParamId);
              this.getVideo(getParamId);
              this.getMovieCast(getParamId);
            }

          getMovie(id:any){
            this.service.getMovieDetails(id).subscribe((result)=>{
              console.log(result,'getmoviedetails#');
              this.getMoviDetailResult = result;
            });
          }

          getVideo(id:any)
          {
            this.service.getMovieVideo(id).subscribe((result)=>{
              console.log(result,'getMovieVideo#');
              result.results.forEach((Element:any) =>{
                if (Element.type === "Trailer") 
                {
                  this.getMovieVideoResult = Element.key;
                }
              });


              
            });
          }

          getMovieCast(id:any)
          {
            this.service.getMovieCast(id).subscribe((result)=>{
              console.log(result, 'MovieCast#');
              this.getMovieCastResult = result.cast;
            })
          }
         
}
