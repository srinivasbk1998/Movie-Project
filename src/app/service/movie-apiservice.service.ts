import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiserviceService {

  constructor(private http:HttpClient) { }


  baseurl = "https://api.themoviedb.org/3";
  apikey =  "a2dd8d3fba06d771e2519e33cc6ac459"

  //bannerapidata

bannerApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
}

 

trendingMovieApiData():Observable<any>
{
  return this.http.get( ` ${this.baseurl}/trending/movie/week?api_key=${this.apikey}&language`);
}
//searchmovie
getSearchMovie(data:any):Observable<any>
{
console.log(data, 'movie#');

 return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
 );
}

//getmoviedatails
getMovieDetails(data:any):Observable<any>
{
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}
// getMovieVideo
getMovieVideo(data:any):Observable<any>
{
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}

//getMovieCast
getMovieCast(data:number):Observable<any>
{
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}

fetchActionMovie():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}


fetchAdventureMovies():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}


fetchAnimationMovies():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
}


fetchComedyMovies():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
}


fetchdocumentaryMovies():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
}


fetchSciencefictionMovies():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
}


fetchthrillerMovies():Observable<any>
{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
}

}
