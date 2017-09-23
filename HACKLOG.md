# Hacklog - Actualizaciones de proyectos y grupos de trabajo

## Standup 2017-09-21 22:00

### Grupos de trabajo

* Sitio web (`#sismomx-website`)
   * Próximos objetivos
      * Cerrando issues del website.
      * Implementar mockup.
   * Necesito ayuda con…
      * Gente que sepa Jekyll
* Project managers (`#sismomx-pm`)
   * Logros
      * Crear documentos
      * Levantando boards

### Proyectos

* SMS Alerts (`#sismomx-sms`)
   * Próximos objetivos
      * Integrando front-end
      * Diseño de bases de datos
#RevisaMiGrieta (sin canal aún)
   * Descripción
      * Usuarios puede ingresar grietas y hacerles revisión.
   * Logros
      * Ya hay un repositorio
      * Ya un API
   * Próximos objetivos
      * Compartir repo
   * Necesito ayuda con..
      * Hay muchos sistemas similares, ¿qué hacer? 
* Ban Fake News (`#sismomx-fakenews`)
   * Descripción
      * Base de datos con noticias falsas. Un bot envía información a usuarios que están compartiendo esas noticias falsas.
      * Python / Flask
   * Próximos objetivos
      * Terminando el API (backend)
      * Conectar la API con el bot.
      * Extender el API.
      * Hacer un target para saber qué personas están tuiteando qué cosas.
      * Ayuda de gente para marcar las noticias falsas.
   * Necesito ayuda con...
      * Python developers
* Fuerza México (`#sismomx-app`)
   * Descripción
      * Aplicación Android para extraer los datos de #validando19s y ver cómo nos sincranizamos con Mapas Sismo México.
   * Logros
      * Mañana se libera la nueva versión.
* Acopio API y UI (`#sismomx-acopio-api` y `#sismomx-acopio-ui`)
   * Logros
      * Tenemos el endpoint que te da la lista de centros de acopio (http://bit.ly/RescateMX)
      * Tenemos 300 centros de acopio (a partir de la hoja colaborativa)
      * Listos los endpoints y estructura de datos listas.
      * Lista de contactos responsables de cada centro de acopio y qué productos necesitan
   * Próximos objetivos
      * Terminar el API (apróximadamente una hora)
      * Liberar el front-end del app.
   * Necesito ayuda con...
      * Consolidar y limpiar bases de datos - Tenemos muchas listas de centros de acopio
      * Necesitamos un owner de datos, está fuera de nuestro alcance mantener esa base de datos.
* \#Verificado19s (`#sismomx-verificado19s`)
   * Descricpión
      * Recibe información a partir de Google Forms y generan CSVs.
      * Están haciendo monitoreo de redes sociales.
      * Tienen una fuente grande de fact-checking.
      * Son muchos medios independientes, no es sólo de un medio y un sólo lugar.
   * Próximos objetivos
      * Construir un API sobre los CSVs
* ¿Qué ayuda necesita México? (`#sismomx-realtime`)
   * Funcionalidad: Filtrado de necesidades por colonia (alimentado de los tweets de cada 2 horas)
   * Staging: https://quake-relief-cdmx.civicadesarrolla.me/
   * Roadmap: https://github.com/civica-digital/quake-relief-cdmx/projects/1
   * Instrucciones de instalación: https://github.com/civica-digital/quake-relief-cdmx#cómo-instalar

Las personas que quieran colaborar, por favor, me pasan su cuenta de github, para que asignemos los issues y puedan enviar sus contribuciones

### Notas generales
* @manu mencionó que tiene contacto con Elastic y tiene licencias para ELK. Podemos apoyarnos en Elastic para hacer búsquedas más complejas.
* Se organizarán pruebas funcionales en `#sismomx-frontend`.
* Necesitamos mejorar la documentación para que se puedan integrar personas rápidamente.
* Se creará el canal de `#sismomx-devops` para ayudar en tareas de DevOps, infraestructura y servidores.
* Hay puertas abiertas en las oficinas de Horizontal.mx, para quien guste ir a trabajar desde ahí.
* @saiph comentó que es conveniente tener bots especializados para diferentes tareas.
* Se creará un documento con un rol de disponibilidad (horarios), especialmente para trabajos nocturnos.
* Enfocarnos más en automatizaciones de conversaciones existentes en redes, no hay tiempo ni capacidad de bajar y alimentar apps. 





## Standup 2017-09-20 12:30

* Seguiremos utilizando Jekyll como plataforma para el sitio.
* Equipos de trabajo para el sitio web
   * Contenido
   * Diseño
   * Desarrollo
* Responsabilidades de equipos
   * Contenido
      * Mantener actualizado el [documento de referencia](https://docs.google.com/document/d/1QVBq6UZ4JA24HceiTwUWfbcz3ZA3SxueOymXsnp43Ug/edit#)
      * Priorizar la información que deba integrarse al sitio web.
      * Redactar los copies que deben publicarse en el sitio web.
      * Mantener y actualizar el documento de preguntas frecuentes.
      * Definir accionables para cada perfil (Quiero Ayudar, Necesito Ayuda).
      * Output: Documento para el equipo de diseño con la información (copies) del sitio web.
   * Diseño
      * Elaborar la arquitectura de información del sitio web (a partir del documento de output del equipo de Contenido).
      * Elaborar una propuesta de mejor para el diseño (interfaz) del sitio web (mockups).
      * Output: Issues detallados en el repositorio de GitHub.
   * Desarrollo
      * Implementar mockups en el sitio web.
      * Publicar contenido el sitio web a partir de los issues en el repositorio.
      * Mantener el README del repositorio.
      * Onboarding a desarrolladores que se quieran sumar al desarrollo del sitio web.
* Accionables adicionales:
   * Responsable de coordinación con equipo de `#sismomx-realtime`
   * Responsable de vinculación con CENASEP
   * Agregar información para Chiapas y Oaxaca
   * Elaborar directorio con tareas y responsables.
   * Agregar descripción en el canal de Slack y README.md
* Notas completas:
   * https://www.evernote.com/shard/s52/sh/2dbd7ee3-8e14-4bd3-9fb0-690264a91798/828d9f42721eab54 (@fmicalizzi)
   * https://www.evernote.com/l/ADQtvX7jjhRL05-waQJkqReYgo2fQnIeq1Q (@chubas)
