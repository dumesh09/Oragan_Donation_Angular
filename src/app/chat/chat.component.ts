import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  req: string = "";
  msg: string = "";
  constructor() { 
  }

  ngOnInit(): void {
  }
  getresponse(){
    console.log(this.req);
    if(this.req == "hi"){
      this.msg = "How are you?";
    }
  }

}
