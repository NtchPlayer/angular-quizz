import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label!: string;
  @Input() value!: string | number;
  @Input() questionId!: number;
  @Input() id!: number;
  @Input() selected!: number | string;
  @Input() name!: string;

  @Output() selectedChange = new EventEmitter<number | string>();
}
