import { Component, Input, Renderer2, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-telegram-widget',
  template: `
  <span #button></span>
  `,
  styles: [
  ]
})
export class NgxTelegramWidgetComponent implements OnInit, AfterViewInit {

  @Input() botName = "SampleBot";

  @Input() buttonSize: string = 'large';
  @Input() showUserPhoto: boolean = false;
  @Input() useCustomCorners: boolean = false;
  @Input() cornerRadius: number = 20;
  @Input() requestMessageAccess: boolean = false;
  @Input() redirectURL: string = '';

  @ViewChild('button', { static: true })
  button!: ElementRef;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://telegram.org/js/telegram-widget.js?19';
    s.setAttribute('data-telegram-login', this.botName);
    s.setAttribute('data-size', this.buttonSize);
    s.setAttribute('data-userpic', this.showUserPhoto);
    s.setAttribute('data-auth-url', this.redirectURL);
    s.setAttribute('data-request-access', this.requestMessageAccess ? "write" : null);
    s.setAttribute('data-radius', this.useCustomCorners ? this.cornerRadius : 20);
    this.button.nativeElement.parentElement.replaceChild(s, this.button.nativeElement);
  }
}
