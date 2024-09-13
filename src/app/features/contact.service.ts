import { Injectable } from "@angular/core";

import { Firestore, collection, addDoc } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private firestore: Firestore) {}

  creat(data: any) {
    const collectionInstance = collection(this.firestore, "contact");
    return addDoc(collectionInstance, data);
  }
}
