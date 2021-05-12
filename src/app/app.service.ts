import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, BehaviorSubject, isObservable } from "rxjs";

@Injectable()
export class AppService implements Resolve<any> {

    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise<void>((resolve, reject) => {
            Promise.all([]).then(() => {
                resolve();
            },
                reject
            );
        });
    }

    public getHeros(search) {
        return (this.http.get<any>('https://superheroapi.com/api/10165102932235118/search/'+search, {}))
            .pipe(map((res: any) => {
                if (res) {
                    return res;
                }
            }));



    }
}


