/**
Creé la carpeta Model como vimos en clase y a partir del SCHEMA del JSON, armé la clase Libro
*/
import { randomUUID } from "node:crypto";

export class Libro {
	constructor(id, titulo, autor, año) {
		this.id = id ?? randomUUID();
		this.titulo = titulo;
		this.autor = autor;
		this.año = año;
	}
}
