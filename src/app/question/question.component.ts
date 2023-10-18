import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuestionComponent),
    multi: true
  }]
})
export class QuestionComponent implements ControlValueAccessor {
  @Input() title!: string;
  @Input() answers!: { label: string, value: string | number }[];
  @Input() answer!: string | number;
  @Input() name!: string;
  @Input() id!: number;
  @Output() selectedChange = new EventEmitter<string | number>();

  selected: string | number = ''
  startDate: number = new Date().getTime()
  answerDate: any = undefined

  writeValue(value: any) {
    if (value !== undefined) {
      this.selected = value
    }
  }

  propagateChange = (_: any) => {}

  registerOnChange(fn: any) {
    this.propagateChange = fn
  }

  registerOnTouched() {}

  setTimer () {
    if (!this.answerDate) {
      this.answerDate = Math.abs(new Date().getTime() - this.startDate) / 1000
    }
  }
}
