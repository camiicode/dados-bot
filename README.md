# dados-bot

**dados-bot** es una aplicación web que permite simular habilidades y enviar los resultados a un canal de Discord mediante webhooks. Es ideal para juegos de rol y otras actividades que requieran simulaciones rápidas y compartidas.

## Características

- **Simulación de habilidades**: Ejecuta simulaciones basadas en diferentes habilidades y niveles.
- **Configuración personalizada**: Permite la personalización de habilidades mediante archivos JSON.
- **Integración con Discord**: Envía resultados directamente a un canal de Discord utilizando webhooks.

## Uso

1. **Configuración del Webhook de Discord**:
   - Ingresa la URL del webhook de Discord en el campo correspondiente.
   - Haz clic en "Iniciar Sistema" para establecer la conexión.

2. **Simulación de habilidades**:
   - Ingresa el nombre del piloto o tripulante.
   - Selecciona la habilidad a simular (Piloto, Combate, Técnico, Carisma, Supervivencia, Comercio).
   - Define el nivel de habilidad (1-6).
   - Haz clic en "Ejecutar Simulación" para obtener el resultado.

3. **Personalización de habilidades**:
   - Utiliza un archivo JSON con el siguiente formato para definir habilidades personalizadas:

     ```json
     {
       "config": {
         "title": "INFORME DEL SALOON",
         "characterLabel": "Cowboy",
         "defaultAnalysis": "El vaquero reaccionó como pudo",
         "defaultRecommendation": "Más práctica en el saloon"
       },
       "skills": [
         {
           "name": "Tiro rápido",
           "messages": [
             "¡El revólver se encasquilló!",
             "Disparo al aire",
             "Rozó al oponente",
             "Disparo certero",
             "¡Disparo legendario!"
           ],
           "analysis": [
             "Desastre total en el duelo",
             "Necesita practicar más",
             "Casi lo logra",
             "Buen trabajo",
             "¡Leyenda del Oeste!"
           ],
           "recommendations": [
             "Ve a ver al herrero",
             "Entrena con el sheriff",
             "Un poco más de práctica",
             "Sigue así",
             "¡Eres una leyenda!"
           ]
         }
       ]
     }
     ```

   - Carga el archivo JSON en la sección "Custom Upload" para aplicar la configuración personalizada.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor, crea un fork y envía un pull request con tus mejoras.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para más información o consultas, puedes contactarme a través de mi perfil de GitHub: [camiicode](https://github.com/camiicode).

---

*Nota: Este archivo `README.md` proporciona una visión general del proyecto y guía a los usuarios sobre cómo utilizar y personalizar la aplicación. Asegúrate de actualizar los enlaces y la información de contacto según corresponda.*
