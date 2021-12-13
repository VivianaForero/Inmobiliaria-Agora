import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Inmueble extends Entity {
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
  fechaRegistro: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoInmueble: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  municipio: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoInmueble: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  comision: number;

  @hasMany(() => Solicitud)
  solicitudes: Solicitud[];

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
