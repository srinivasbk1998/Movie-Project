import { Component, OnInit } from '@angular/core';
import { MovieApiserviceService } from 'src/app/service/movie-apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(private service:MovieApiserviceService) {}


    bannerResult:any=[];
    trendingMovieResult:any=[];
    actionMovieResult:any=[];
    adventureMovieresult:any=[];
    animationMovieResult:any=[];
    comedyMovieResult:any=[];
    documentaryMovieResult:any=[];
    sciencefictionMovieResult:any=[];
    thrillerMovieResult:any=[];


    ngOnInit(): void {
      this.bannerData();
      this.trendingData();
      this.actionMovie();
      this.adventureMovie();
      this.comedyMovie();
      this.animationMovie();
      this.documentyMovie();
      this.sciencefiction();
      this.thrillerMovie();
    }


    //bannerdata
    bannerData(){
      this.service.bannerApiData().subscribe((result)=>{
        console.log(result,'bannerresult#');
        this.bannerResult = result.results;
      });
    }

    trendingData()
    {
      this.service.trendingMovieApiData().subscribe((result)=>{
        console.log(result, 'trendingresult#');
        this.trendingMovieResult = result.results;
      });
    }

    actionMovie()
    {
      this.service.fetchActionMovie().subscribe((result)=>{ 
        this.actionMovieResult = result.results;
      });
    }

    adventureMovie()
    {
     this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieresult=result.results;
     });
    }

    animationMovie()
     {
      this.service.fetchAnimationMovies().subscribe((result)=>{
        this.animationMovieResult=result.results;
      });
     }

     comedyMovie()
     {
      this.service.fetchComedyMovies().subscribe((result)=>{
        this.comedyMovieResult=result.results;
      });
     }

     documentyMovie()
     {
      this.service.fetchdocumentaryMovies().subscribe((result)=>{
        this.documentaryMovieResult=result.results;
      });
     }

     sciencefiction()
      {
        this.service.fetchSciencefictionMovies().subscribe((result)=>{
          this.sciencefictionMovieResult=result.results;
        });
      }

      thrillerMovie()
      {
        this.service.fetchthrillerMovies().subscribe((result)=>{
          this.thrillerMovieResult=result.results;
        });
      }

    }

