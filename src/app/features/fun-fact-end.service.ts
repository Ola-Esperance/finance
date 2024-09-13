import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FunFactEndService {
  constructor(private firestore: Firestore) {}

  read() {
    const collectionInstance = collection(this.firestore, "businessChiffre");
    return collectionData(collectionInstance, { idField: "id" });
  }
}
