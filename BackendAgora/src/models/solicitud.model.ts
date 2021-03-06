import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Departamento} from './departamento.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  asesor: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  @belongsTo(() => Departamento)
  departamentoId: string;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
