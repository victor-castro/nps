import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[auto-height]',
    host: {
        '(input)': 'setHeight()'
    }
})
export class AutoGrowDirective {

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
      this.adjust();
  }

  constructor(public element: ElementRef) {
  }

  ngAfterContentChecked(): void {
      this.adjust();
  }

  adjust(): void {
      let nativeElement = this.element.nativeElement;
      nativeElement.style.overflow = 'hidden';
      nativeElement.style.height = '20px';
      nativeElement.style.height = nativeElement.scrollHeight + "px";
  }

}
