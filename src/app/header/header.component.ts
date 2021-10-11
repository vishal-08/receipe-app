import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls :  ['./header.component.css']
})

export class headerComponent{
    
    @Output() featureSelected = new EventEmitter<string>()
 
    onSelect(feature : string)
    {
        this.featureSelected.emit(feature)   
    }
}