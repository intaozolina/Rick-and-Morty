import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Characters, CharactersResult} from "../models/character.model";

@Injectable ({
  providedIn: 'root'
})

export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  getCharacters(searchName: string, searchGender: string, page: number): Observable<CharactersResult[]> {
    return this.http.get<Characters>(`${this.baseUrl}/character/?page=${page}&name=${searchName}&gender=${searchGender}`).pipe(
      map((response)=> {
        return response.results
      }),
    );
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }

}
