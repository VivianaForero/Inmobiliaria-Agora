import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  Departamento,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudDepartamentoController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/departamento', {
    responses: {
      '200': {
        description: 'Departamento belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Departamento)},
          },
        },
      },
    },
  })
  async getDepartamento(
    @param.path.string('id') id: typeof Solicitud.prototype.id,
  ): Promise<Departamento> {
    return this.solicitudRepository.departamento(id);
  }
}
