import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LocationResult, Location} from "../models/location.model";

@Injectable ({
  providedIn: 'root'
})

export class LocationsService {
  baseUrl = 'https://rickandmortyapi.com/api';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  getLocations(searchName: string, searchDimension: string, page: number): Observable<LocationResult[]> {
    return this.http.get<Location>(`${this.baseUrl}/location/?page=${page}&name=${searchName}&dimension=${searchDimension}`).pipe(
      map((response)=> {
        return response.results
      }),
    );
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }

}
