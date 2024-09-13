import { Observable } from "rxjs";
import { LogoService } from "./features/logo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  favicon: Array<any>;

  constructor(private logoSvce: LogoService) {}

  ngOnInit(): void {
    this.logoSvce.read().subscribe((logos: any) => {
      this.favicon = logos;
      this.changeFavicon(logos?.favIconUrl);
    });
  }

  changeFavicon(url: string) {
    const favicon = document.getElementById(
      "dynamic-favicon"
    ) as HTMLLinkElement;
    return (favicon.href = url);
  }
}
