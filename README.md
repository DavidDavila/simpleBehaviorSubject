# Clase SimpleBehaviorSubject

La clase `SimpleBehaviorSubject` es una implementación genérica que permite el seguimiento de un valor de datos y notifica a los observadores cuando ese valor cambia. Es útil en situaciones en las que desees mantener un valor y permitir que múltiples partes de tu aplicación se suscriban a cambios en ese valor.

## Uso

Para comenzar a usar la clase `SimpleBehaviorSubject`, sigue estos pasos:

1. Importa la clase `SimpleBehaviorSubject` y la interfaz `SimpleBehaviorSubjectI` desde tus archivos.

   ```   typescript
   import { SimpleBehaviorSubject } from "simple-behavior-subject";

   Crea una instancia de SimpleBehaviorSubject proporcionando un valor inicial.
   
   ```   typescript 
    const SimpleBehaviorSubject = new SimpleBehaviorSubject<number>(42);
    Registra observadores para recibir actualizaciones cuando el valor cambie.


   ```   typescript
 
    SimpleBehaviorSubject.subscribe((newValue) => {
    console.log(`Valor actualizado: ${newValue}`);
    });

2. Actualiza el valor de datos cuando sea necesario.

  
   ```   typescript
    SimpleBehaviorSubject.update(100);
    Los observadores registrados recibirán notificaciones con el nuevo valor.

 
    Valor actualizado: 100

## Métodos

La clase SimpleBehaviorSubject proporciona los siguientes métodos:

subscribe(observer: (value: T) => void): void: Registra un observador para recibir actualizaciones del valor de datos.

update(newValue: T): void: Actualiza el valor de datos y notifica a todos los observadores registrados.

getValue(): T: Obtiene el valor actual de datos.

Ejemplo completo

   ```   typescript
 
    import { SimpleBehaviorSubject } from "./SimpleBehaviorSubject";

    const SimpleBehaviorSubject = new SimpleBehaviorSubject<number>(42);

    SimpleBehaviorSubject.subscribe((newValue) => {
    console.log(`Valor actualizado: ${newValue}`);
    });

    SimpleBehaviorSubject.update(100);

Este es un ejemplo simple de cómo usar la clase SimpleBehaviorSubject para rastrear y notificar cambios en un valor de datos en tu aplicación.
 

Espero que esta información te sea útil para comprender y utilizar la clase `SimpleBehaviorSubject` en tu proyecto. Si tienes alguna pregunta adicional o necesitas más aclaraciones, no dudes en preguntar.



