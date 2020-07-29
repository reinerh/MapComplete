import {UIElement} from "../UIElement";
import Translations from "../i18n/Translations";
import Combine from "./Combine";
import {link} from "fs";


export class SubtleButton extends UIElement{
    private imageUrl: string;
    private message: UIElement;
    private linkTo: string = undefined;

    constructor(imageUrl: string, message: string | UIElement, linkTo : string = undefined) {
        super(undefined);
        this.linkTo = linkTo;
        this.message = Translations.W(message);
        this.imageUrl = imageUrl;
        
    }

    InnerRender(): string {

        if(this.linkTo != undefined){
            return new Combine([
                `<a class="subtle-button" href="${this.linkTo}" target="_blank">`,
                this.imageUrl !== undefined ? `<img src='${this.imageUrl}'>` : "",
                this.message,
                '</a>'
            ]).Render();
        }
        
        return new Combine([
            '<span class="subtle-button">',
            this.imageUrl !== undefined ? `<img src='${this.imageUrl}'>` : "",
            this.message,
            '</span>'
        ]).Render();
    }


}