import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() delay: string = '0s'; // 👈 ESTA línea es la clave
  @HostBinding('class.animate') isVisible = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.transition = `opacity 0.6s ease-out ${this.delay}, transform 0.6s ease-out ${this.delay}`;
    this.el.nativeElement.style.opacity = 0;
    this.el.nativeElement.style.transform = 'translateY(30px)';

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.el.nativeElement.style.opacity = 1;
          this.el.nativeElement.style.transform = 'translateY(0)';
          this.observer.disconnect();
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
