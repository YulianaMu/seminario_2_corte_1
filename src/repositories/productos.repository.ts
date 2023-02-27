import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UnibookDataSource} from '../datasources';
import {Productos, ProductosRelations} from '../models';

export class ProductosRepository extends DefaultCrudRepository<
  Productos,
  typeof Productos.prototype.id,
  ProductosRelations
> {
  constructor(
    @inject('datasources.unibook') dataSource: UnibookDataSource,
  ) {
    super(Productos, dataSource);
  }
}
