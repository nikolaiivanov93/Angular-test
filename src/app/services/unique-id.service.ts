import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  uniqueID() {
    return Math.floor(Math.random() * Date.now());
  };
}
