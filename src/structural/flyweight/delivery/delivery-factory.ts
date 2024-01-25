import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import {
  DeliverLocationDictionary,
  DeliveryLocationData,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliverLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrinsecState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsecState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsecState);
    return this.locations[key];
  }

  getLocations(): DeliverLocationDictionary {
    return this.locations;
  }
}
