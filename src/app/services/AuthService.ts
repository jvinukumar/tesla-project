import { Injectable } from "@angular/core";
import { Console } from "@angular/core/src/console";

@Injectable()
export class AuthService {
    verify(data: string): boolean {
        console.log(data);
        if(data === 'texas'){
            return true;
        }
        else{
            return false;
        }
    }
}