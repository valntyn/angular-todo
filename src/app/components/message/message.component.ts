import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() title='Error';
  @Input() message='';

  hidden = true;

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.messageService.message$
      .subscribe(text => {
        this.hidden = false;
        this.message = text;
      })
  }
}
