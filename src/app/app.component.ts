import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  linkApiWhats: string;
  ddd: number;
  numero: number;
  mensagem: string;
  sendMensagem() {
    this.mensagem.replace(" ", "%20");
    this.mensagem.replace(",", "%2C");
    this.linkApiWhats = `https://api.whatsapp.com/send?phone=55${this.ddd}${
      this.numero
    }&text=${this.mensagem}`;
    window.open(this.linkApiWhats);
  }
}
