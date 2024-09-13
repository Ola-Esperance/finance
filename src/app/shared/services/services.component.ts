import { OurServiceService } from "./../../features/our-service.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
  offres: Observable<Array<any>>;

  constructor(private ourSvce: OurServiceService) {}

  ngOnInit() {
    this.offres = this.ourSvce.read(3);
  }
}
