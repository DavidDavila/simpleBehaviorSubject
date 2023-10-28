// data.ts

// Importamos la interfaz DataI desde el archivo data.types
import { SimpleBehaviorSubjectI } from "./index.types";

// Definimos una clase genérica llamada Data que implementa la interfaz DataI
export class SimpleBehaviorSubject<T> implements SimpleBehaviorSubject<T> {
  private value: T; // Valor de datos que se almacenará y notificará a los observadores.
  private subscribers: ((value: T) => void)[] = []; // Lista de observadores que reciben notificaciones cuando los datos cambian.

  // Constructor de la clase que toma un valor inicial y lo establece como el valor de datos.
  constructor(initialValue: T) {
    this.value = initialValue;
  }

  /**
   * Registra un observador para recibir actualizaciones cuando los datos cambien.
   *
   * @param {(value: T) => void} observer - La función de observador que recibirá las actualizaciones.
   */
  subscribe(observer: (value: T) => void): void {
    this.subscribers.push(observer); // Agregamos el observador a la lista.
    observer(this.value); // Inmediatamente notificamos al observador con el valor actual.
  }

  /**
   * Actualiza el valor de datos y notifica a todos los observadores.
   *
   * @param {T} newValue - El nuevo valor de datos.
   */
  update(newValue: T): void {
    this.value = newValue; // Actualizamos el valor de datos.
    this.subscribers.forEach((subscriber) => subscriber(this.value)); // Notificamos a todos los observadores con el nuevo valor.
  }

  /**
   * Obtiene el valor actual de datos.
   *
   * @returns {*} {T} - El valor actual de datos.
   */
  getValue(): T {
    return this.value;
  }
}
