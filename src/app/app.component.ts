import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websiteClone';

  constructor(){
  }


  ngOnInit():void {
    $(function(){
      $(function(){
        $('.input_box').mouseover(function(){
          $(this).attr('placeholder', 'Try "Business" | Jaipur Location');
        });
        $('.input_box').mouseout(function(){
          var holder = $(this).data('ph');
          $(this).attr('placeholder', holder);
        });
      })
    })
  }
}
