import { Banniere } from "./../../features/shape/banniere";
import { Observable } from "rxjs";
import { BanniereService } from "./../../features/banniere.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  slides: Observable<Array<any>>;

  constructor(private banniereSvce: BanniereService) {}

  ngOnInit() {
    this.slides = this.banniereSvce.read();
  }
}
