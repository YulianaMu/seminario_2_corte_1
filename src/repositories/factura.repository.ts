import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UnibookDataSource} from '../datasources';
import {Factura, FacturaRelations} from '../models';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {
  constructor(
    @inject('datasources.unibook') dataSource: UnibookDataSource,
  ) {
    super(Factura, dataSource);
  }
}
