import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Inmueble, InmuebleRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class InmuebleRepository extends DefaultCrudRepository<
  Inmueble,
  typeof Inmueble.prototype.id,
  InmuebleRelations
> {

  public readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof Inmueble.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Inmueble, dataSource);
    this.solicitudes = this.createHasManyRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
  }
}
