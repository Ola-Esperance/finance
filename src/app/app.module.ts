import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { BannerComponent } from "./shared/banner/banner.component";
import { ServicesComponent } from "./shared/services/services.component";
import { RequestFormComponent } from "./shared/request-form/request-form.component";
import { FunFactsComponent } from "./shared/fun-facts/fun-facts.component";
import { MoreInfoComponent } from "./shared/more-info/more-info.component";
import { TestimonialsComponent } from "./shared/testimonials/testimonials.component";
import { CallbackFormComponent } from "./shared/callback-form/callback-form.component";
import { PartnersComponent } from "./shared/partners/partners.component";
import { SubFooterComponent } from "./shared/sub-footer/sub-footer.component";
import { SubHeaderComponent } from "./shared/sub-header/sub-header.component";
import { TeamComponent } from "./shared/team/team.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServicesComponent,
    RequestFormComponent,
    FunFactsComponent,
    MoreInfoComponent,
    TestimonialsComponent,
    CallbackFormComponent,
    PartnersComponent,
    SubFooterComponent,
    SubHeaderComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
