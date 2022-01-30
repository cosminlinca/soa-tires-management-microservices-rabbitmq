import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-tires-list',
  templateUrl: './tires-list.component.html'
})
export class TiresListComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);
    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer.createComponent(factory, null, this.injector);
  }
}
