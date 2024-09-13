import { Observable } from "rxjs";
import { TestimoniesService } from "./../../features/testimonies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"]
})
export class TestimonialsComponent implements OnInit {
  testimonies: Observable<Array<any>>;
  constructor(private testiSvce: TestimoniesService) {}

  ngOnInit() {
    this.testimonies = this.testiSvce.read();
  }

  list() {
    const tabs = [
      {
        name: "William Smith",
        role: `Co-Founder`,
        description: `In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus.
        Aliquam ipsum urna, semper quis.`,
        imgUrl: "assets/assets/images/team_01.jpg",
        created: new Date()
      },
      {
        name: "William Smith",
        role: `string`,
        description: `string`,
        imgUrl: "assets/assets/images/team_02.jpg",
        created: new Date()
      },
      {
        name: "William Smith",
        role: `string`,
        description: `string`,
        imgUrl: "assets/assets/images/team_03.jpg",
        created: new Date()
      }
    ];

    return tabs;
  }
}
