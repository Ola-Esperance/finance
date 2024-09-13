import { Observable } from "rxjs";
import { AboutService } from "./../../features/about.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
  styleUrls: ["./more-info.component.css"]
})
export class MoreInfoComponent implements OnInit {
  abouts: Observable<Array<any>>;
  constructor(private aboutSvce: AboutService) {}

  ngOnInit(): void {
    this.abouts = this.aboutSvce.read();
  }
}
