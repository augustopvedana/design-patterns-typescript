import { EnterpriseCreateVehicleCustomerFactory } from './enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
