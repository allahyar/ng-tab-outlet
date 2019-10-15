import {
  Injectable,
  Type,
  ComponentFactory,
  ComponentFactoryResolver
} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FactoryService {
  componentFactories = new Map<Type<any>, ComponentFactory<any>>();

  /**
   *
   */
  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.addFactory(componentFactoryResolver);
  }

  addFactory(componentFactoryResolver: ComponentFactoryResolver) {
    const factories = this.tempToArray(componentFactoryResolver["_factories"]);
    for (const factory of factories) {
      this.componentFactories.set(factory.key, factory.value);
    }
  }

  getFactory(type: Type<any>): ComponentFactory<any> {
    return this.componentFactories.get(type);
  }

  private tempToArray(map: Map<Type<any>, ComponentFactory<any>>) {
    return [...map.entries()].map(x => {
      return { key: x[0], value: x[1] };
    });
  }
}
