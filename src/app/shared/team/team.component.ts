import { Observable } from "rxjs";
import { TeamService } from "./../../features/team.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  teams: Observable<Array<any>>;
  constructor(private teamSvce: TeamService) {}

  ngOnInit() {
    this.teams = this.teamSvce.read();
  }

  list() {
    const tabs = [
      {
        name: "William Smith",
        role: `Co-Founder`,
        description: `In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus.
        Aliquam ipsum urna, semper quis.`,
        imgUrl: "assets/assets/images/team_01.jpg"
      },
      {
        name: "William Smith",
        role: `string`,
        description: `string`,
        imgUrl: "assets/assets/images/team_02.jpg"
      },
      {
        name: "William Smith",
        role: `string`,
        description: `string`,
        imgUrl: "assets/assets/images/team_03.jpg"
      }
    ];

    return tabs;
  }
}
