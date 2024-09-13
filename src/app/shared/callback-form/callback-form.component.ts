import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { ContactService } from "./../../features/contact.service";
import { FormGroup } from "@angular/forms";
import { Contact } from "./../../features/shape/contact";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-callback-form",
  templateUrl: "./callback-form.component.html",
  styleUrls: ["./callback-form.component.css"]
})
export class CallbackFormComponent implements OnInit {
  //EDIT VARIABLE POUR GERER LE FORMULAIRE
  editForm: FormGroup;

  constructor(
    private contactSvce: ContactService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  //validators variable
  pattern: any = "[^ @]*@[^ @]*";
  //initialisation du par cette fonction
  initForm() {
    this.editForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern(this.pattern)]],
      subject: ["", [Validators.required, Validators.maxLength(100)]],
      message: ["", [Validators.required, Validators.maxLength(500)]]
    });
  }

  // Add fonction
  onSubmit() {
    let formObjet: Contact = {
      name: this.editForm.value.name,
      email: this.editForm.value.email,
      subject: this.editForm.value.subject,
      message: this.editForm.value.message,
      created: new Date()
    };

    this.contactSvce
      .creat(formObjet)
      .then(() => {
        this.toastr.success(" Request sent successfully ");
        this.initForm();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
