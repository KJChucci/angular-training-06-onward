import { AfterViewInit, Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';
  add = output<{title: string, text: string}>();

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }
  
  onSubmit(title: string, ticketText: string): void {
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
