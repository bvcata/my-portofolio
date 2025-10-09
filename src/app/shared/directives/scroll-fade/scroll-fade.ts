import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollFade]',
})
export class ScrollFade {
  private _parentElement!: HTMLElement;
  private _scrollElement!: HTMLElement;
  private _resizeObserver?: ResizeObserver;

  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);


  ngOnInit() {
    this._scrollElement = this.elementRef.nativeElement;
    this._parentElement = this.renderer.parentNode(this._scrollElement);
    this.renderer.addClass(this._parentElement, 'faded-scroll');
  }

  public ngAfterViewInit() {
    this.observeResize();
    this.updateGradientVisibility();
  }

  public ngOnDestroy() {
    this._resizeObserver?.disconnect();
  }

  private observeResize() {
    this._resizeObserver = new ResizeObserver(() => this.updateGradientVisibility());
    this._resizeObserver.observe(this._scrollElement);
  }

  private updateGradientVisibility() {
    const scrollTop = this._scrollElement.scrollTop;
    const maxScrollTop = this._scrollElement.scrollHeight - this._scrollElement.clientHeight;

    if (scrollTop > 0) {
      this.renderer.addClass(this._parentElement, 'has-top');
    } else {
      this.renderer.removeClass(this._parentElement, 'has-top');
    }

    if (maxScrollTop - scrollTop <= 1) {
      this.renderer.removeClass(this._parentElement, 'has-bottom');
    } else {
      this.renderer.addClass(this._parentElement, 'has-bottom');
    }
  }

  @HostListener('scroll')
  onScroll() {
    this.updateGradientVisibility();
  }
}
