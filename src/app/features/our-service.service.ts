import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  query,
  limit
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class OurServiceService {
  constructor(private firestore: Firestore) {}

  read(limitNumber: number) {
    const collectionInstance = collection(this.firestore, "services");
    const queryInstance = query(collectionInstance, limit(limitNumber));
    return collectionData(queryInstance, { idField: "id" });
  }
}
