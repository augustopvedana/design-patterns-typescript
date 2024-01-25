import { deliveryContext } from './delivery-context';
import { DeliveryFactory } from './delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Maico', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Maico', '102', 'Rua Amazonas', 'SC');

console.log();
console.log(factory.getLocations());
