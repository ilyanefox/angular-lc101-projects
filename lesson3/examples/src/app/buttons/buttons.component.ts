import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   reactivateButton: boolean = false;
   constructor() { }

   ngOnInit() { }

   reactivate(button: boolean) {
      if (this.inactiveGold === true || this.inactiveSilver === true || this.inactiveCopper === true) {
         return (this.reactivateButton ===  true);
      }
   }

}
