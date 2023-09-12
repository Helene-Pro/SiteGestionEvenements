import { AbstractControl, ValidatorFn } from "@angular/forms";

export function beforeTodayValidator() : ValidatorFn | null {
    //control : Représente le control sur lequel a été mis le validateur
    return ( control : AbstractControl ) => {
        //Si y'a une valeur dans mon control, on vérif, sinon ça sert à rien, c'est tout vide
        if(control.value) {
            let today = new Date();
            //"1989-10-16" > new Date(2023, 7, 11) -> Pas ok
            //new Date("1989-10-16") > new Date(2023, 7, 11) -> ok
            if(new Date(control.value) > today) {
                return { beforetoday : true }
            }
        }
        return null;
    }
}