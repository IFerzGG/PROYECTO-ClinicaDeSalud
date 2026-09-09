## Entidad: Pacientes
| Atributo      | Tipo           | Notas       |
|---------------|----------------|-------------|
| id_paciente   | Serial         | [PK]        |
| nombre        | Texto          | Obligatorio |
| fecha_nacim   | Date           | Obligatorio |
| email         | Texto          | Único       |
| telefono      | Numero Entero  | Único       |

"Un Paciente puede tener muchas Citas, pero una Cita pertenece a un Paciente"

## Enttidad: Citas
| Atributo      | Tipo           | Notas       |
|---------------|----------------|-------------|
| id_citas      | Número Entero  | [PK]        |
| fecha         | Date           | Obligatorio |
| estado        | ENUM           | Obligatorio |
| id_paciente   | Numero Entero  | [FK]        |
| id_medico     | Numero Entero  | [FK]        |

Un medico puede tener muchas Citas, pero una Cita pertenece a un Medico"

## Entidad: Medico
| Atributo      | Tipo           | Notas       |
|---------------|----------------|-------------|
| id_medico     | Número Entero  | [PK]        |
| nombre        | Texto          | Obligatorio |
| email         | Texto          | Único       |
| telefono      | Numero Entero  | Único       |
| id_especial   | Numero Entero  | [FK]        |

"Un Especialidad puede tener muchos Medicos, pero un Medico pertenece a una Especialidad"

## Entidad: Especialidad
| Atributo      | Tipo           | Notas       |
|---------------|----------------|-------------|
| id            | Número Entero  | [PK]        |
| nombre        | Texto          | Obligatorio |


## Especialidad - Medico
"Un Especialidad puede tener muchos Medicos, pero un Medico pertenece a una Especialidad"

## Medico - Citas
"Un medico puede tener muchas Citas, pero una Cita pertenece a un Medico"

## Paciente - Citas
"Un Paciente puede tener muchas Citas, pero una Cita pertenece a un Paciente"
