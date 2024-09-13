import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class TeamService {
  constructor(private firestore: Firestore) {}

  read() {
    const collectionInstance = collection(this.firestore, "team");
    return collectionData(collectionInstance, { idField: "id" });
  }
}
