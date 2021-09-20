create database swi;
create table users(
    correo text PRIMARY KEY,
    pass text
);
insert into usuarios values('jorge','Unminuto.123');

CREATE TABLE PRODUCCION_INICIAL(
    modulo_id serial PRIMARY KEY,
    "desc" varchar(40),
	meta_hr integer,
	pza_arranque integer,
	"real" integer,
	produccion integer,
	eficiencia integer,
	primer_pieza date,
	ultima_pieza date,
	anio integer,
	mes integer,
	dia integer,
	hora time,
	semana integer,
	planta varchar,
	negocio varchar
)
