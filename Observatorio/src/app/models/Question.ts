import { SafeHtml } from "@angular/platform-browser";

export interface Question {
    pregunta: string;
    contenido: string;
    safeHtml: SafeHtml;
}