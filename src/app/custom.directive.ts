import { Directive, Input, ViewContainerRef, TemplateRef} from "@angular/core";

@Directive({
    selector:'[appPremium]'
})
export class CustomDirective{

    @Input()set appPremium(condition:boolean){
        if(condition){
            //show that discounted span 
            this.viewContainer.createEmbeddedView(this.ref)
        }else{
            this.viewContainer.clear()
        }
    }

    constructor(private viewContainer:ViewContainerRef, private ref:TemplateRef<Object>){}
}