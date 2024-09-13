import { Observable } from "rxjs";
import { FunFactEndService } from "./../../features/fun-fact-end.service";
import { FunFactOneService } from "./../../features/fun-fact-one.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fun-facts",
  templateUrl: "./fun-facts.component.html",
  styleUrls: ["./fun-facts.component.css"]
})
export class FunFactsComponent implements OnInit {
  funOne: Observable<Array<any>>;
  funEnd: Observable<Array<any>>;
  constructor(
    private funSvceOne: FunFactOneService,
    private funSvceEnd: FunFactEndService
  ) {}

  ngOnInit() {
    this.funOne = this.funSvceOne.read();
    this.funEnd = this.funSvceEnd.read();
  }
}
