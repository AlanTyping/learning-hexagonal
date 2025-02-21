// Qué estamos haciendo?
// Estamos en el trigger del puerto de la API
// Esto quiere decir que el usuario, desde el frontend nos va a hablar directamente a nosotros acá
// Nosotros, desde esta "neurona", nos vamos a encargar de dirigir las acciones al lugar correspondiente.

import { AuthenticatedUser, User } from "../../app/schemas";

// En este caso, el usuario quiere tanto logearse como registrarse.

// the only things that the user actually cares about are the login and the register.
export interface ForAuthenticating {
    login: (email: string, password: string) => Promise<AuthenticatedUser>,
    register: (user: User, password: string) => Promise<AuthenticatedUser>,
}