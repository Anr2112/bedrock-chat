const translation = {
  translation: {
    signIn: {
      button: {
        login: 'Iniciar sesión',
      },
    },
    app: {
      name: 'PIA',
      name2: 'Pulso Index IA',
      inputMessage: 'Enviar un mensaje',
      myBots: 'Mis Bots',
      discoverBots: 'Descubrir Bots',
      pinnedBots: 'Bots Fijados',
      starredBots: 'Bots Favoritos',
      recentlyUsedBots: 'Bots Usados Recientemente',
      conversationHistory: 'Chats Recientes',
      chatWaitingSymbol: '▍',
      adminConsoles: 'Panel de Administrador',
      backChat: 'Volver al Chat',
      userGroups: 'Grupos de Usuarios',
    },
    model: {
      'claude-v4-opus': {
        label: 'Claude 4 (Opus)',
        description:
          'Potente modelo de razonamiento híbrido para tareas complejas, codificación y agentes de IA con ventana de contexto de 200K tokens.',
      },
      'claude-v4-sonnet': {
        label: 'Claude 4 (Sonnet)',
        description:
          'Modelo de razonamiento híbrido equilibrado optimizado para eficiencia a escala con ventana de contexto de 200K tokens.',
      },
      'claude-v4.5-sonnet': {
        label: 'Claude 4.5 (Sonnet)',
        description:
          'La última versión del modelo Sonnet que logra el más alto nivel de rendimiento en codificación y procesamiento de tareas extendidas',
      },
      'claude-v4.5-haiku': {
        label: 'Claude 4.5 (Haiku)',
        description:
          'El modelo Haiku más rápido e inteligente con rendimiento casi fronterizo y capacidades de pensamiento extendidas',
      },
      'claude-v3-haiku': {
        label: 'Claude 3 (Haiku)',
        description:
          'Versión anterior optimizada para velocidad y compacidad, brindando respuesta casi instantánea.',
      },
      'claude-v3.5-sonnet': {
        label: 'Claude 3.5 (Sonnet) v1',
        description:
          'Versión anterior de Claude 3.5. Soporta una amplia gama de tareas, pero la v2 ofrece mayor precisión.',
      },
      'claude-v3.5-sonnet-v2': {
        label: 'Claude 3.5 (Sonnet) v2',
        description:
          'La última versión de Claude 3.5. Un modelo mejorado que supera a la v1 en precisión y rendimiento.',
      },
      'claude-v3.7-sonnet': {
        label: 'Claude 3.7 Sonnet',
        description:
          'Modelo de razonamiento híbrido que equilibra respuestas rápidas y capacidades analíticas profundas.',
      },
      'claude-v3.5-haiku': {
        label: 'Claude 3.5 (Haiku)',
        description:
          'La última versión, con una capacidad de respuesta aún más rápida y mejor rendimiento respecto a Haiku 3.',
      },
      'claude-v4.1-opus': {
        label: 'Claude 4.1 (Opus)',
        description:
          'La versión más reciente del modelo Claude más potente con capacidades de razonamiento mejoradas.',
      },
      'claude-v4.5-opus': {
        label: 'Claude 4.5 (Opus)',
        description:
          'Nuestro modelo más inteligente que combina capacidad máxima con rendimiento práctico.',
      },
      'claude-v3-opus': {
        label: 'Claude 3 (Opus)',
        description: 'Modelo potente para tareas altamente complejas.',
      },
      'mistral-7b-instruct': {
        label: 'Mistral 7B',
        description:
          'Soporta tareas de generación de texto en inglés con capacidades naturales de codificación',
      },
      'mixtral-8x7b-instruct': {
        label: 'Mistral-8x7B',
        description:
          'Un modelo popular y de alta calidad, Mixture-of-Experts (MoE) disperso, ideal para resumen de texto, preguntas y respuestas, clasificación de texto, completación de texto y generación de código.',
      },
      'mistral-large': {
        label: 'Mistral Large',
        description:
          'Ideal para tareas complejas que requieren capacidades de razonamiento sustanciales, o aquellas altamente especializadas, como Generación de Texto Sintético o Generación de Código.',
      },
      'mistral-large-2': {
        label: 'Mistral Large2',
        description:
          'LLM avanzado que soporta docenas de idiomas y más de 80 lenguajes de codificación, con capacidades agentivas de clase mundial incluyendo llamadas a funciones nativas, salida JSON y razonamiento.',
      },
      'amazon-nova-pro': {
        label: 'Amazon Nova Pro',
        description:
          'Un modelo multimodal altamente capaz con la mejor combinación de precisión, velocidad y costo para una amplia gama de tareas.',
      },
      'amazon-nova-lite': {
        label: 'Amazon Nova Lite',
        description:
          'Un modelo multimodal de muy bajo costo que es extremadamente rápido para procesar entradas de imagen, video y texto.',
      },
      'amazon-nova-micro': {
        label: 'Amazon Nova Micro',
        description:
          'Un modelo solo de texto que ofrece las respuestas de menor latencia en la familia de modelos Amazon Nova a un costo muy bajo.',
      },
      'deepseek-r1': {
        label: 'DeepSeek R1',
        description:
          'Modelo de razonamiento de vanguardia optimizado para razonamiento general, matemáticas, ciencias y generación de código. Soporta idiomas inglés y chino.',
      },
      'llama3-3-70b-instruct': {
        label: 'Meta Llama 3.3 70B Instruct',
        description:
          'Último modelo Llama 3 que ofrece rendimiento a la par del modelo 405B a un menor costo con excelentes capacidades de razonamiento y seguimiento de instrucciones.',
      },
      'llama3-2-1b-instruct': {
        label: 'Meta Llama 3.2 1B Instruct',
        description:
          'Modelo ligero optimizado para dispositivos perimetrales con procesamiento eficiente en el dispositivo para gestión de información personal y recuperación de conocimiento multilingüe.',
      },
      'llama3-2-3b-instruct': {
        label: 'Meta Llama 3.2 3B Instruct',
        description:
          'Modelo compacto que ofrece generación de texto, resumen y análisis de sentimientos con baja latencia, ideal para aplicaciones móviles de IA.',
      },
      'llama3-2-11b-instruct': {
        label: 'Meta Llama 3.2 11B Instruct',
        description:
          'Modelo multimodal que sobresale en comprensión de imágenes y razonamiento visual para subtitulado de imágenes, respuesta a preguntas visuales y procesamiento de documentos.',
      },
      'llama3-2-90b-instruct': {
        label: 'Meta Llama 3.2 90B Instruct',
        description:
          'Modelo multimodal grande con capacidades avanzadas de comprensión de imágenes y razonamiento visual para aplicaciones sofisticadas de inteligencia visual.',
      },
      'gpt-oss-20b': {
        label: 'GPT-OSS 20B',
        description:
          'Modelo de peso abierto de 20B parámetros con ventana de contexto de 128K y capacidades de razonamiento.',
      },
      'gpt-oss-120b': {
        label: 'GPT-OSS 120B',
        description:
          'Modelo de peso abierto de 120B parámetros con ventana de contexto de 128K y capacidades avanzadas de razonamiento.',
      },
    },
    agent: {
      label: 'Agente',
      help: {
        overview:
          'Usando la funcionalidad de Agente, tu chatbot puede manejar automáticamente tareas más complejas.',
      },
      hint: `El agente determina automáticamente qué herramientas usar para responder a las preguntas del usuario. Debido al tiempo necesario para la toma de decisiones, el tiempo de respuesta tiende a ser más largo. Al activar una o más herramientas, se habilita la funcionalidad del agente. Si no se selecciona ninguna herramienta, la funcionalidad del agente no se utiliza. Cuando la funcionalidad del agente está habilitada, el uso de "Conocimiento" también se trata como una de las herramientas. Esto significa que "Conocimiento" puede no usarse en las respuestas.`,
      progress: {
        label: 'Pensando...',
      },
      progressCard: {
        toolInput: 'Entrada: ',
        toolOutput: 'Salida: ',
        status: {
          running: 'Ejecutando...',
          success: 'Éxito',
          error: 'Error',
        },
      },
      tools: {
        get_weather: {
          name: 'Clima Actual',
          description: 'Obtener el pronóstico del clima actual.',
        },
        sql_db_query: {
          name: 'Consulta de Base de Datos',
          description:
            'Ejecuta una consulta SQL detallada y correcta para obtener resultados de la base de datos.',
        },
        sql_db_schema: {
          name: 'Esquema de Base de Datos',
          description:
            'Obtén el esquema y muestras de filas de una lista de tablas.',
        },
        sql_db_list_tables: {
          name: 'Listar Tablas de Base de Datos',
          description:
            'Listar todas las tablas disponibles en la base de datos.',
        },
        sql_db_query_checker: {
          name: 'Verificador de Consultas',
          description:
            'Verifica si tu consulta SQL es correcta antes de ejecutarla.',
        },
        internet_search: {
          name: 'Búsqueda en Internet',
          description: 'Buscar información en internet.',
          settings: 'Configuración de Búsqueda',
          engine: 'Motor de Búsqueda',
          engines: {
            duckduckgo: {
              label: 'DuckDuckGo (Para Prueba)',
              hint: 'Límite de tasa limitado, pero gratuito. Diseñado para uso de prueba.',
            },
            firecrawl: {
              label: 'Firecrawl (Para Negocios)',
              hint: 'Los límites de tasa se pueden expandir. Diseñado para uso empresarial. Se requiere clave API. https://www.firecrawl.dev/',
            },
          },
        },
        knowledge_base_tool: {
          name: 'Recuperar Conocimiento',
          description: 'Recuperar información del conocimiento.',
        },
        bedrock_agent: {
          name: 'Agente Bedrock',
          description: 'Hacer una pregunta al Agente Bedrock configurado',
        },
        firecrawl: {
          apiKey: 'Clave API de Firecrawl',
          maxResults: 'Resultados Máximos',
        },
        bedrockAgent: {
          name: 'Agente Bedrock',
          description: 'Usar Agente Bedrock como herramienta.',
          agentId: {
            label: 'ID del Agente',
            placeholder: 'Ingresar ID del Agente',
          },
          aliasId: {
            label: 'ID del Alias',
            placeholder: 'Ingresar ID del Alias',
          },
        },
      },
    },
    bot: {
      label: {
        myBots: 'Mis Bots',
        recentlyUsedBots: 'Bots Compartidos Usados Recientemente',
        knowledge: 'Conocimiento',
        url: 'URL',
        s3url: 'Fuente de Datos S3',
        sitemap: 'URL del Sitemap',
        file: 'Archivo',
        loadingBot: 'Cargando...',
        normalChat: 'PIA - Pulso Index IA',
        notAvailableBot: '[NO Disponible]',
        notAvailableBotInputMessage: 'Este bot NO está disponible.',
        noDescription: 'Sin Descripción',
        notAvailable: 'Este bot NO está disponible.',
        noBots: 'No hay Bots.',
        noBotsRecentlyUsed: 'No hay Bots Usados Recientemente.',
        noStarredBots: 'No hay Bots Favoritos.',
        retrievingKnowledge: '[Recuperando Conocimiento...]',
        dndFileUpload:
          'Puedes subir archivos arrastrándolos y soltándolos.\nArchivos soportados: {{fileExtensions}}',
        uploadError: 'Mensaje de Error',
        referenceLink: 'Enlace de Referencia',
        syncStatus: {
          queue: 'Esperando Sincronización',
          running: 'Sincronizando',
          success: 'Sincronización Completada',
          fail: 'Sincronización Fallida',
        },
        fileUploadStatus: {
          uploading: 'Subiendo...',
          uploaded: 'Subido',
          error: 'ERROR',
        },
        quickStarter: {
          title: 'Inicio Rápido de Conversación ',
          exampleTitle: 'Título',
          example: 'Ejemplo de Conversación',
        },
        citeRetrievedContexts: 'Cita de Contextos Recuperados',
        unsupported: 'No Compatible, Solo Lectura',
      },
      titleSubmenu: {
        edit: 'Editar',
        copyLink: 'Copiar Enlace',
        copiedLink: 'Copiado',
        markAsEssential: 'Marcar como Esencial',
        removeEssential: 'Eliminar Estado Esencial',
      },
      help: {
        overview:
          'Los bots operan de acuerdo con instrucciones predefinidas. El chat no funciona como se espera a menos que el contexto esté definido en el mensaje, pero con bots, no es necesario definir el contexto.',
        instructions:
          'Define cómo debe comportarse el bot. Dar instrucciones ambiguas puede llevar a comportamientos impredecibles, así que proporciona instrucciones claras y específicas.',
        knowledge: {
          overview:
            'Al proporcionar conocimiento externo al bot, este puede manejar datos sobre los cuales no ha sido preentrenado.',
          url: 'La información de la URL especificada se usará como Conocimiento. Si configuras la URL de un video de YouTube, la transcripción de ese video se usará como Conocimiento.',
          s3url:
            'Ingresando el URI de S3, puedes agregar S3 como fuente de datos. Puedes añadir hasta 4 fuentes. Solo admite buckets que existen en la misma cuenta y región de Bedrock.',
          sitemap:
            'Especificando la URL del sitemap, la información obtenida mediante scraping automático de los sitios web dentro de este se usará como Conocimiento.',
          file: 'Los archivos subidos se usarán como Conocimiento.',
          citeRetrievedContexts:
            'Configura si se debe mostrar el contexto recuperado para responder las consultas de los usuarios como información de citación.\nSi está habilitado, los usuarios pueden acceder a las URLs o archivos originales.',
        },
        quickStarter: {
          overview:
            'Al iniciar una conversación, proporciona ejemplos. Los ejemplos ilustran cómo usar el bot.',
        },
      },
      alert: {
        sync: {
          error: {
            title: 'Error de Sincronización de Conocimiento',
            body: 'Ocurrió un error al sincronizar el Conocimiento. Por favor revisa el siguiente mensaje:',
          },
          incomplete: {
            title: 'NO Listo',
            body: 'Este bot no ha completado la sincronización de conocimiento, por lo que se usa el conocimiento previo a la actualización.',
          },
        },
      },
      samples: {
        title: 'Muestras de Instrucciones',
        anthropicLibrary: {
          title: 'Biblioteca de Prompts de Anthropic',
          sentence: '¿Necesitas más ejemplos? Visita: ',
          url: 'https://docs.anthropic.com/claude/prompt-library',
        },
        pythonCodeAssistant: {
          title: 'Asistente de Código en Python',
          prompt: `Escribe un script corto y de alta calidad en Python para la tarea dada, algo que escribiría un experto en Python. Estás escribiendo código para un desarrollador experimentado, así que solo añade comentarios para cosas que no sean obvias. Asegúrate de incluir cualquier importación necesaria. 
NUNCA escribas nada antes del bloque \`\`\`python\`\`\`. Después de generar el código, revisa cuidadosamente para asegurarte de que no hay errores ni inconsistencias. Si hay errores, enuméralos en etiquetas <error> y luego genera una nueva versión con esos errores corregidos. Si no hay errores, escribe "CHECKED: NO ERRORS" en etiquetas <error>.`,
        },
        mailCategorizer: {
          title: 'Categorizador de Correos',
          prompt: `Eres un agente de servicio al cliente encargado de clasificar correos por tipo. Por favor, proporciona tu respuesta y justifica tu clasificación. 

Las categorías de clasificación son: 
(A) Pregunta antes de la venta 
(B) Artículo roto o defectuoso 
(C) Pregunta de facturación 
(D) Otro (por favor, explica)

¿Cómo clasificarías este correo?`,
        },
        fitnessCoach: {
          title: 'Entrenador Personal de Fitness',
          prompt: `Eres un entrenador personal entusiasta y positivo llamado Sam. Sam es apasionado por ayudar a los clientes a ponerse en forma y llevar estilos de vida más saludables. Escribes en un tono alentador y amigable y siempre intentas guiar a tus clientes hacia mejores metas de fitness. Si el usuario te pregunta algo no relacionado con el fitness, o lleva el tema de vuelta al fitness o dices que no puedes responder.`,
        },
      },
      create: {
        pageTitle: 'Crear Mi Bot',
      },
      edit: {
        pageTitle: 'Editar Mi Bot',
      },
      my: {
        label: {
          pageTitle: 'Mis Bots',
        },
      },

      item: {
        title: 'Nombre',
        description: 'Descripción',
        instruction: 'Instrucciones',
      },
      explore: {
        label: {
          pageTitle: 'Consola de Bots',
        },
      },
      apiSettings: {
        pageTitle: 'Configuración de Publicación de API de Bot Compartido',
        label: {
          endpoint: 'Punto de Acceso de API',
          usagePlan: 'Plan de Uso',
          allowOrigins: 'Orígenes Permitidos',
          apiKeys: 'Claves de API',
          period: {
            day: 'Por DÍA',
            week: 'Por SEMANA',
            month: 'Por MES',
          },
          apiKeyDetail: {
            creationDate: 'Fecha de Creación',
            active: 'Activo',
            inactive: 'Inactivo',
            key: 'Clave de API',
          },
        },
        item: {
          throttling: 'Limitación',
          burstLimit: 'Ráfaga',
          rateLimit: 'Límite de Velocidad',
          quota: 'Cuota',
          requestLimit: 'Límite de Solicitudes',
          offset: 'Desplazamiento',
        },
        help: {
          overview:
            'Crear una API permite que las funciones del Bot sean accesibles para clientes externos; las APIs permiten la integración con aplicaciones externas.',
          endpoint: 'El cliente puede usar el Bot desde este punto de acceso.',
          usagePlan:
            'Los planes de uso especifican la cantidad o la tasa de solicitudes que tu API acepta de un cliente. Asocia una API con un plan de uso para rastrear las solicitudes que recibe tu API.',
          throttling:
            'Limita la velocidad con la que los usuarios pueden llamar a tu API.',
          rateLimit:
            'Introduce la tasa, en solicitudes por segundo, que los clientes pueden llamar a tu API.',
          burstLimit:
            'Introduce el número de solicitudes concurrentes que un cliente puede realizar a tu API.',
          quota:
            'Activa las cuotas para limitar el número de solicitudes que un usuario puede realizar a tu API en un período de tiempo determinado.',
          requestLimit:
            'Introduce el número total de solicitudes que un usuario puede hacer en el período de tiempo que selecciones en la lista desplegable.',
          allowOrigins:
            'Orígenes de clientes permitidos para el acceso. Si el origen no está permitido, el solicitante recibe una respuesta 403 Forbidden y se le niega el acceso a la API. El origen debe seguir el formato: "(http|https)://nombre-del-host" o "(http|https)://nombre-del-host:puerto" y se pueden usar comodines (*).',
          allowOriginsExample:
            'p.ej. https://tu-nombre-host.com, https://*.tu-nombre-host.com, http://localhost:8000',
          apiKeys:
            'Una clave de API es una cadena alfanumérica que se utiliza para identificar un cliente de tu API. De lo contrario, el solicitante recibe una respuesta 403 Forbidden y se le niega el acceso a la API.',
        },
        button: {
          ApiKeyShow: 'Mostrar',
          ApiKeyHide: 'Ocultar',
        },
        alert: {
          botUnshared: {
            title: 'Por favor, Comparte El Bot',
            body: 'No puedes publicar una API para el bot que no está compartido.',
          },
          deploying: {
            title: 'El despliegue de la API está en PROGRESO',
            body: 'Por favor, espera hasta que el despliegue esté completo.',
          },
          deployed: {
            title: 'La API ha sido DESPLEGADA',
            body: 'Puedes acceder a la API desde el Cliente usando el Punto de Acceso de la API y la Clave de API.',
          },
          deployError: {
            title: 'ERROR al desplegar la API',
            body: 'Por favor, elimina la API y vuelve a crearla.',
          },
        },
        deleteApiDaialog: {
          title: '¿Eliminar?',
          content:
            '¿Estás seguro de eliminar la API? El punto de acceso de la API será eliminado y el cliente ya no tendrá acceso a ella.',
        },
        addApiKeyDialog: {
          title: 'Agregar Clave de API',
          content: 'Ingresa un nombre para identificar la Clave de API.',
        },
        deleteApiKeyDialog: {
          title: '¿Eliminar?',
          content:
            '¿Estás seguro de eliminar <Bold>{{title}}</Bold>?\nLos clientes que usen esta Clave de API se les negará el acceso a la API.',
        },
      },
      button: {
        newBot: 'Crear Nuevo Bot',
        create: 'Crear',
        edit: 'Editar',
        save: 'Guardar',
        delete: 'Eliminar',
        share: 'Compartir',
        apiSettings: 'Configuración de Publicación de API',
        copy: 'Copiar',
        copied: 'Copiado',
        instructionsSamples: 'Ejemplos',
        chooseFiles: 'Elegir archivos',
        viewAll: 'Ver Todos',
        removeFromRecent: 'Eliminar del Historial',
      },
      deleteDialog: {
        title: '¿Eliminar?',
        content: '¿Estás seguro de eliminar <Bold>{{title}}</Bold>?',
      },
      shareDialog: {
        title: 'Compartir',
        switchLabel: 'Compartir este Bot',
        label: {
          selectShare: 'Compartir con',
          all: 'TODOS los Usuarios',
          partial: 'Usuarios Seleccionados',
          search: 'Buscar Usuarios y Grupos',
          noSearchResults: 'No se encontraron resultados',
          memberManagement: 'Editar Miembros',
          sharing: {
            not_shared: 'No compartido con ningún grupo o usuario',
            shared_only_users: 'Compartido con {{count}} usuario',
            shared_only_users_plural: 'Compartido con {{count}} usuarios',
            shared_only_groups: 'Compartido con {{count}} grupo',
            shared_only_groups_plural: 'Compartido con {{count}} grupos',
            shared_both: 'Compartido con {{groupCount}} grupo y {{userCount}} usuario',
            shared_both_user_plural: 'Compartido con {{groupCount}} grupo y {{userCount}} usuarios',
            shared_both_group_plural: 'Compartido con {{groupCount}} grupos y {{userCount}} usuario',
            shared_both_plural: 'Compartido con {{groupCount}} grupos y {{userCount}} usuarios',
          },
          user: 'Usuario',
          group: 'Grupo',
        },
        off: {
          content: 'Este bot es privado y solo tú tienes acceso a él.',
        },
        on: {
          content:
            'Este bot está compartido y es accesible para otros usuarios. Los usuarios compartidos pueden encontrar y usar este bot a través de la página <Link>Descubrir Bot</Link>.',
          linkDescription:
            'También puedes chatear con el bot usando este enlace compartido.',
        },
        button: {
          manage: 'Gestionar',
          removeAccess: 'Eliminar Acceso',
          cancelRemoval: 'Cancelar Eliminación',
          cancelAddition: 'Cancelar Adición',
        },
      },
      error: {
        notSupportedFile: 'Este archivo no es compatible.',
        duplicatedFile: 'Un archivo con el mismo nombre ya ha sido subido.',
        failDeleteApi: 'No se pudo eliminar la API.',
      },
      activeModels: {
        title: 'Activación de Modelos',
        description: 'Configura qué modelos de IA se pueden usar con este bot.',
      },
      promptCaching: {
        title: 'Caché de Prompts',
        promptCachingEnabled: {
          title: 'Usar caché de prompts si el modelo lo soporta.',
          description: 'Si está habilitado, puede reducir el costo y la latencia de conversaciones repetidas con este bot.',
        },
      },
    },
    admin: {
      botAnalytics: {
        label: {
          pageTitle: 'Analítica de Bots',
          noBotUsages: 'Durante el Período de Cálculo, no se utilizaron bots.',
          published: 'La API está publicada.',
          SearchCondition: {
            title: 'Período de Cálculo',
            from: 'Desde',
            to: 'Hasta',
          },
          sortByCost: 'Ordenar por Costo',
        },
        help: {
          overview: 'Monitorea el estado de uso de Bots y APIs de Bots Publicadas.',
          calculationPeriod:
            'Si no se establece el Período de Cálculo, se mostrará el costo de hoy.',
        },
      },
      apiManagement: {
        label: {
          pageTitle: 'Gestión de API',
          publishedDate: 'Fecha de Publicación',
          noApi: 'No hay APIs.',
        },
      },
      botManagement: {
        label: {
          pageTitle: 'Gestión de Bots',
          sharedUrl: 'URL del Bot',
          apiSettings: 'Configuración de Publicación de API',
          noKnowledge: 'Este bot no tiene Conocimiento.',
          notPublishApi: 'La API de este bot no está publicada.',
          deployStatus: 'Estado del Despliegue',
          cfnStatus: 'Estado de CloudFormation',
          codebuildStatus: 'Estado de CodeBuild',
          codeBuildId: 'ID de CodeBuild',
          usagePlanOn: 'ACTIVADO',
          usagePlanOff: 'DESACTIVADO',
          rateLimit:
            '<Bold>{{limit}}</Bold> solicitudes por segundo que los clientes pueden hacer a la API.',
          burstLimit:
            'El cliente puede realizar <Bold>{{limit}}</Bold> solicitudes concurrentes a la API.',
          requestsLimit:
            'Puedes hacer <Bold>{{limit}}</Bold> solicitudes <Bold>{{period}}</Bold>.',
          sharedAllUsers: 'Compartido con TODOS los Usuarios',
          privateBot: 'Este bot no está compartido.',
          owner: 'Propietario',
        },
        alert: {
          noApiKeys: {
            title: 'No hay Claves de API',
            body: 'Todos los clientes no pueden acceder a la API.',
          },
        },
        button: {
          deleteApi: 'Eliminar API',
        },
      },
      validationError: {
        period: 'Introduce tanto Desde como Hasta',
      },
    },
    deleteDialog: {
      title: '¿Eliminar?',
      content: '¿Estás seguro de eliminar <Bold>{{title}}</Bold>?',
    },
    clearDialog: {
      title: '¿Eliminar TODO?',
      content: '¿Estás seguro de eliminar TODAS las conversaciones?',
    },
    languageDialog: {
      title: 'Cambiar idioma',
    },
    feedbackDialog: {
      title: 'Retroalimentación',
      content: 'Por favor proporciona más detalles.',
      categoryLabel: 'Categoría',
      commentLabel: 'Comentario',
      commentPlaceholder: '(Opcional) Introduce tu comentario',
      categories: [
        {
          value: 'notFactuallyCorrect',
          label: 'No es factualmente correcto',
        },
        {
          value: 'notFullyFollowRequest',
          label: 'No sigue completamente mi solicitud',
        },
        {
          value: 'other',
          label: 'Otro',
        },
      ],
    },
    button: {
      newChat: 'Nuevo Chat',
      backToConversationHistory: 'Volver al Historial de Chat',
      botConsole: 'Consola de Bot',
      botAnalytics: 'Analítica de Bots Compartidos',
      apiManagement: 'Gestión de API',
      userUsages: 'Usos de Usuario',
      SaveAndSubmit: 'Guardar y Enviar',
      resend: 'Reenviar',
      regenerate: 'Regenerar',
      delete: 'Eliminar',
      deleteAll: 'Eliminar Todo',
      done: 'Hecho',
      ok: 'OK',
      cancel: 'Cancelar',
      back: 'Atrás',
      menu: 'Menú',
      language: 'Idioma',
      clearConversation: 'Eliminar TODAS las conversaciones',
      signOut: 'Cerrar sesión',
      close: 'Cerrar',
      add: 'Agregar',
      continue: 'Continuar Generando',
      botManagement: 'Gestión de Bots',
      mode: 'Modo',
      drawerOption: 'Opciones del Menú Lateral',
    },
    input: {
      hint: {
        required: '* Requerido',
      },
      validationError: {
        required: 'Este campo es requerido.',
        invalidOriginFormat: 'Formato de Origen Inválido.',
      },
    },
    embeddingSettings: {
      title: 'Configuración de Embeddings',
      description:
        'Puedes configurar los parámetros para las incrustaciones vectoriales. Al ajustar los parámetros, puedes cambiar la precisión de la recuperación de documentos.',
      chunkSize: {
        label: 'Tamaño de Fragmento',
        hint: 'El tamaño de fragmento se refiere al tamaño en el que un documento se divide en segmentos más pequeños',
      },
      chunkOverlap: {
        label: 'Superposición de Fragmentos',
        hint: 'Puedes especificar el número de caracteres superpuestos entre fragmentos adyacentes.',
      },
      enablePartitionPdf: {
        label:
          'Habilitar análisis detallado de PDF. Si está habilitado, el PDF se analizará en detalle con el tiempo.',
        hint: 'Es efectivo cuando deseas mejorar la precisión de búsqueda. Los costos de cálculo aumentan porque el procesamiento toma más tiempo.',
      },
      help: {
        chunkSize:
          'Cuando el tamaño del fragmento es demasiado pequeño, se puede perder información contextual, y cuando es demasiado grande, puede existir información contextual diferente dentro del mismo fragmento, lo que reduce la precisión de la búsqueda.',
        chunkOverlap:
          'Al especificar la superposición de fragmentos, puedes preservar información contextual en los límites de los fragmentos. Aumentar el tamaño del fragmento puede mejorar la precisión de búsqueda. Sin embargo, ten en cuenta que aumentar la superposición de fragmentos puede llevar a mayores costos computacionales.',
        overlapTokens:
          'Configura el número de tokens para superponer o repetir en fragmentos adyacentes. Por ejemplo, si configuras tokens de superposición en 60, los últimos 60 tokens en el primer fragmento también se incluirán al principio del segundo fragmento.',
        maxParentTokenSize:
          'Puedes definir el tamaño de fragmento en la capa de padre. Durante la recuperación, el sistema inicialmente recupera fragmentos secundarios, pero los reemplaza por fragmentos padres más amplios para proporcionar al modelo un contexto más completo',
        maxChildTokenSize:
          'Puedes definir el tamaño de fragmento en la capa de hijo. Durante la recuperación, el sistema inicialmente recupera fragmentos secundarios, pero los reemplaza por fragmentos padres más amplios para proporcionar al modelo un contexto más completo',
        bufferSize:
          'Este parámetro puede influir en cuánta cantidad de texto se examina en conjunto para determinar los límites de cada fragmento, afectando la granularidad y coherencia de los fragmentos resultantes. Un tamaño de buffer mayor podría capturar más contexto, pero también puede introducir ruido, mientras que un tamaño de buffer menor puede omitir contexto importante pero asegura fragmentos más precisos.',
        breakpointPercentileThreshold:
          'Un umbral más alto requiere que las oraciones sean más distinguibles para ser divididas en diferentes fragmentos. Un umbral más alto da como resultado menos fragmentos y generalmente un tamaño promedio de fragmento más grande.',
      },
      alert: {
        sync: {
          error: {
            title: 'Error de División de Oraciones',
            body: 'Intenta nuevamente con un valor menor de superposición de fragmentos',
          },
        },
      },
    },
    generationConfig: {
      title: 'Configuración de Generación',
      description:
        'Puedes configurar los parámetros de inferencia de LLM para controlar la respuesta de los modelos.',
      maxTokens: {
        label: 'Longitud máxima de generación/nuevos tokens máximos',
        hint: 'El número máximo de tokens permitidos en la respuesta generada',
      },
      temperature: {
        label: 'Temperatura',
        hint: 'Afecta la forma de la distribución de probabilidad para la salida predicha e influye en la probabilidad de que el modelo seleccione salidas de menor probabilidad',
        help: 'Elige un valor menor para influir en que el modelo seleccione salidas de mayor probabilidad; elige un valor mayor para influir en que el modelo seleccione salidas de menor probabilidad',
      },
      topK: {
        label: 'Top-k',
        hint: 'El número de candidatos más probables que el modelo considera para el siguiente token',
        help: 'Elige un valor menor para reducir el tamaño del grupo y limitar las opciones a salidas más probables; elige un valor mayor para aumentar el tamaño del grupo y permitir que el modelo considere salidas menos probables',
      },
      topP: {
        label: 'Top-p',
        hint: 'El porcentaje de candidatos más probables que el modelo considera para el siguiente token',
        help: 'Elige un valor menor para reducir el tamaño del grupo y limitar las opciones a salidas más probables; elige un valor mayor para aumentar el tamaño del grupo y permitir que el modelo considere salidas menos probables',
      },
      stopSequences: {
        label: 'Token de finalización/secuencia de finalización',
        hint: 'Especifica secuencias de caracteres que detienen al modelo de generar más tokens. Usa comas para separar múltiples palabras',
      },
      budgetTokens: {
        label: 'Tokens de Presupuesto de Razonamiento',
        hint: 'El número máximo de tokens a asignar para pasos de razonamiento. Valores mayores permiten razonamiento más complejo pero pueden aumentar el tiempo de respuesta',
        help: 'Establece el presupuesto de tokens para pasos de razonamiento. No puede exceder el valor de Máx. Tokens.',
      },
    },
    searchSettings: {
      title: 'Configuración de Búsqueda',
      description:
        'Puedes configurar los parámetros de búsqueda para obtener documentos relevantes de la tienda vectorial.',
      maxResults: {
        label: 'Máx. Resultados',
        hint: 'El número máximo de registros recuperados de la tienda vectorial',
      },
      searchType: {
        label: 'Tipo de Búsqueda',
        hybrid: {
          label: 'Búsqueda híbrida',
          hint: 'Combina las puntuaciones de relevancia de la búsqueda semántica y de texto para proporcionar mayor precisión.',
        },
        semantic: {
          label: 'Búsqueda semántica',
          hint: 'Utiliza incrustaciones vectoriales para ofrecer resultados relevantes.',
        },
      },
    },
    knowledgeBaseSettings: {
      title: 'Configuración de Detalle de Conocimiento',
      description:
        'Selecciona el modelo incrustado para configurar el conocimiento y establece el método para dividir los documentos añadidos como conocimiento. Estas configuraciones no se pueden cambiar después de crear el bot.',
      embeddingModel: {
        label: 'Modelo de Embeddings',
        titan_v2: {
          label: 'Titan Embedding Text v2',
        },
        cohere_multilingual_v3: {
          label: 'Embed Multilingual v3',
        },
      },
      chunkingStrategy: {
        label: 'Estrategia de Fragmentación',
        default: {
          label: 'Fragmentación predeterminada',
          hint: 'Divide automáticamente el texto en fragmentos de aproximadamente 300 tokens por defecto. Si un documento es menor o ya tiene 300 tokens, no se divide más.',
        },
        fixed_size: {
          label: 'Fragmentación de tamaño fijo',
          hint: 'Divide el texto en el tamaño de tokens aproximado que configures.',
        },
        hierarchical: {
          label: 'Fragmentación jerárquica',
          hint: 'Divide el texto en estructuras anidadas de fragmentos hijo y padre.',
        },
        semantic: {
          label: 'Fragmentación semántica',
          hint: 'Divide el texto en fragmentos significativos para mejorar la comprensión y la recuperación de información.',
        },
        none: {
          label: 'Sin fragmentación',
          hint: 'Los documentos no se dividirán.',
        },
      },
      chunkingMaxTokens: {
        label: 'Máx. Tokens',
        hint: 'El número máximo de tokens por fragmento',
      },
      chunkingOverlapPercentage: {
        label: 'Porcentaje de Superposición entre Fragmentos',
        hint: 'La superposición del fragmento padre depende del tamaño de token del hijo y del porcentaje de superposición que especifiques para el hijo.',
      },
      overlapTokens: {
        label: 'Tokens de Superposición',
        hint: 'El número de tokens para repetir en fragmentos de la misma capa',
      },
      maxParentTokenSize: {
        label: 'Máx. Tamaño de Token de Padre',
        hint: 'El número máximo de tokens que puede contener un fragmento en la capa de Padre',
      },
      maxChildTokenSize: {
        label: 'Máx. Tamaño de Token de Hijo',
        hint: 'El número máximo de tokens que puede contener un fragmento en la capa de Hijo',
      },
      bufferSize: {
        label: 'Tamaño de Buffer',
        hint: 'el número de oraciones circundantes que se agregarán para la creación de embeddings. Un tamaño de buffer de 1 resulta en 3 oraciones (actual, anterior y siguiente) para ser combinadas e incrustadas',
      },
      breakpointPercentileThreshold: {
        label: 'Umbral percentil de punto de ruptura',
        hint: 'El umbral percentil de distancia/diferencia de oraciones para establecer puntos de ruptura entre las oraciones.',
      },
      opensearchAnalyzer: {
        label: 'Analizador (Tokenización, Normalización)',
        hint: 'Puedes especificar el analizador para tokenizar y normalizar los documentos registrados como conocimiento. Seleccionar un analizador apropiado mejorará la precisión de búsqueda. Elige el analizador óptimo que coincida con el idioma de tu conocimiento.',
        icu: {
          label: 'Analizador ICU',
          hint: 'Para tokenización, {{tokenizer}} se usa, y para normalización, {{normalizer}} se usa.',
        },
        kuromoji: {
          label: 'Analizador Japonés (kuromoji)',
          hint: 'Para tokenización, {{tokenizer}} se usa, y para normalización, {{normalizer}} se usa.',
        },
        none: {
          label: 'Analizador predeterminado del sistema',
          hint: 'Se usará el analizador predeterminado definido por el sistema (OpenSearch).',
        },
        tokenizer: 'Tokenizador:',
        normalizer: 'Normalizador:',
        token_filter: 'Filtro de Token:',
        not_specified: 'No especificado',
      },
      advancedParsing: {
        label: 'Análisis Avanzado',
        description:
          'Selecciona un modelo para usar capacidades de análisis avanzado de documentos.',
        hint: 'Adecuado para analizar más que texto estándar en formatos de documento soportados, incluyendo tablas dentro de PDFs con su estructura intacta. Se incurren costos adicionales por el análisis usando IA generativa.',
      },
      parsingModel: {
        label: 'Modelo de Análisis Avanzado',
        none: {
          label: 'Deshabilitado',
          hint: 'No se aplicará análisis avanzado.',
        },
        claude_3_5_sonnet_v1: {
          label: 'Claude 3.5 Sonnet v1',
          hint: 'Usar Claude 3.5 Sonnet v1 para análisis avanzado de documentos.',
        },
        claude_3_haiku_v1: {
          label: 'Claude 3 Haiku v1',
          hint: 'Usar Claude 3 Haiku v1 para análisis avanzado de documentos.',
        },
      },
      webCrawlerConfig: {
        title: 'Configuración del Rastreador Web',
        crawlingScope: {
          label: 'Alcance del Rastreo',
          default: {
            label: 'Predeterminado',
            hint: 'Limitar el rastreo a páginas web que pertenecen al mismo host y con la misma ruta URL inicial. Por ejemplo, con una URL semilla de "https://aws.amazon.com/bedrock/" solo se rastreará esta ruta y páginas web que se extiendan desde esta ruta, como "https://aws.amazon.com/bedrock/agents/". URLs hermanas como "https://aws.amazon.com/ec2/" no se rastrean, por ejemplo.',
          },
          subdomains: {
            label: 'Subdominios',
            hint: 'Incluir rastreo de cualquier página web que tenga el mismo dominio principal que la URL semilla. Por ejemplo, con una URL semilla de "https://aws.amazon.com/bedrock/" entonces cualquier página web que contenga "amazon.com" será rastreada, como "https://www.amazon.com".',
          },
          hostOnly: {
            label: 'Solo Host',
            hint: 'Limitar el rastreo a páginas web que pertenecen al mismo host. Por ejemplo, con una URL semilla de "https://aws.amazon.com/bedrock/", entonces páginas web con "https://docs.aws.amazon.com" también serán rastreadas, como "https://aws.amazon.com/ec2".',
          },
        },
        includePatterns: {
          label: 'Patrones de Inclusión',
          hint: 'Especifica patrones para incluir en el rastreo web. Solo se rastrearán URLs que coincidan con estos patrones.',
        },
        excludePatterns: {
          label: 'Patrones de Exclusión',
          hint: 'Especifica patrones para excluir del rastreo web. URLs que coincidan con estos patrones no serán rastreadas.',
        },
      },
      advancedConfigration: {
        existingKnowledgeBaseId: {
          label: 'ID para la Base de Conocimiento de Amazon Bedrock',
          description:
            'Por favor especifica el ID de tu base de conocimiento existente de Amazon Bedrock.',
        },
        createDedicatedKnowledgeBase: {
          label: 'Crear una Base de Conocimiento dedicada',
        },
        createTenantInSharedKnowledgeBase: {
          label: 'Crear un inquilino en una Base de Conocimiento compartida',
        },
        useExistingKnowledgeBase: {
          label: 'Usar tu Base de Conocimiento existente',
        },
      },
    },
    error: {
      answerResponse: 'Ocurrió un error mientras se respondía.',
      notFoundConversation:
        'Dado que el chat especificado no existe, se muestra una nueva pantalla de chat.',
      notFoundPage: 'La página que buscas no se encontró.',
      cannotAccessBot: 'No se puede acceder a este bot. Redirigido a Nuevo Chat.',
      unexpectedError: {
        title: 'Ocurrió un error inesperado.',
        restore: 'Ir a la página PRINCIPAL',
      },
      predict: {
        general: 'Ocurrió un error mientras se predecía.',
        invalidResponse:
          'Respuesta inesperada recibida. El formato de respuesta no coincide con el esperado.',
      },
      notSupportedImage: 'El modelo seleccionado no soporta imágenes.',
      unsupportedFileFormat:
        'El formato de archivo seleccionado no es compatible.',
      totalFileSizeToSendExceeded:
        'El tamaño total del archivo no debe superar {{maxSize}}.',
      attachment: {
        fileSizeExceeded:
          'El tamaño de cada documento no debe superar {{maxSize}}.',
        fileCountExceeded: 'No se pudo subir más de {{maxCount}} archivos.',
      },
      share: {
        markedEssential: {
          title: 'No se puede Cambiar la Configuración de Compartir',
          content:
            'Este bot está marcado como Esencial por el administrador. Los bots Esenciales deben ser compartidos con todos los usuarios.',
        },
        publication: {
          title: 'No se puede Cambiar la Configuración de Compartir',
          content:
            'Este bot está publicado como API por el administrador. Las API publicadas deben ser compartidas con todos los usuarios.',
        },
      },
      invalidMermaidFormat: 'Error en el dibujo del diagrama',
    },
    validation: {
      title: 'Error de Validación',
      maxRange: {
        message: 'El valor máximo que se puede configurar es {{size}}',
      },
      minRange: {
        message: 'El valor mínimo que se puede configurar es {{size}}',
      },
      maxBudgetTokens: {
        message: 'El maxBudgetToken no puede exceder los maxTokens {{size}}',
      },
      chunkOverlapLessThanChunkSize: {
        message:
          'La superposición de fragmentos debe configurarse en menos que el tamaño del fragmento',
      },
      parentTokenRange: {
        message: 'El tamaño de token del padre debe ser mayor que el del hijo',
      },
      quickStarter: {
        message:
          'Por favor, introduce tanto el Título como el Ejemplo de Conversación.',
      },
      required: '{{key}} es requerido',
      number: {
        greaterThen: '{{key}} debe ser mayor que {{value}}',
      },
    },
    helper: {
      shortcuts: {
        title: 'Teclas de Acceso Rápido',
        items: {
          focusInput: 'Enfocar entrada de chat',
          newChat: 'Abrir nuevo chat',
        },
      },
    },
    reasoning: {
      button: {
        label: 'Razonamiento',
      },
      card: {
        label: 'Proceso de Razonamiento',
      },
    },
    guardrails: {
      title: 'Guardrails',
      label: 'Habilitar Guardrails para Amazon Bedrock',
      hint: 'Los Guardrails para Amazon Bedrock se usan para implementar medidas de seguridad específicas de la aplicación según tus casos de uso y políticas de IA responsable.',
      harmfulCategories: {
        label: 'Categorías de Contenido Dañino',
        hint: 'Configura filtros de contenido ajustando el grado de filtrado para detectar y bloquear entradas de usuario y respuestas del modelo dañinas que violen tus políticas de uso. 0: desactivar, 1: bajo, 2: medio, 3: Alto',
        hate: {
          label: 'Odio',
          hint: 'Describe indicaciones de entrada y respuestas del modelo que discriminan, critican, insultan, denuncian o deshumanizan a una persona o grupo en función de una identidad (como raza, etnia, género, religión, orientación sexual, habilidad y origen nacional). 0: desactivar, 1: bajo, 2: medio, 3: Alto',
        },
        insults: {
          label: 'Insultos',
          hint: 'Describe indicaciones de entrada y respuestas del modelo que incluyen lenguaje degradante, humillante, burlón, insultante o despectivo. Este tipo de lenguaje también se etiqueta como acoso. 0: desactivar, 1: bajo, 2: medio, 3: Alto',
        },
        sexual: {
          label: 'Sexual',
          hint: 'Describe indicaciones de entrada y respuestas del modelo que indican interés, actividad o excitación sexual utilizando referencias directas o indirectas a partes del cuerpo, rasgos físicos o sexo. 0: desactivar, 1: bajo, 2: medio, 3: Alto',
        },
        violence: {
          label: 'Violencia',
          hint: 'Describe indicaciones de entrada y respuestas del modelo que incluyen glorificación de amenazas o intención de infligir dolor físico, daño o lesión hacia una persona, grupo o cosa. 0: desactivar, 1: bajo, 2: medio, 3: Alto',
        },
        misconduct: {
          label: 'Conducta Inapropiada',
          hint: 'Describe indicaciones de entrada y respuestas del modelo que buscan o proporcionan información sobre actividades inapropiadas o malintencionadas, o de cómo dañar, defraudar o aprovecharse de una persona, grupo o institución. 0: desactivar, 1: bajo, 2: medio, 3: Alto',
        },
      },
      contextualGroundingCheck: {
        label: 'Verificación de Fundamento Contextual',
        hint: 'Usa esta política para validar si las respuestas del modelo están fundamentadas en la fuente de referencia y son relevantes para la consulta del usuario para filtrar la alucinación del modelo.',
        groundingThreshold: {
          label: 'Fundamento',
          hint: 'Valida si las respuestas del modelo están fundamentadas y son factualmente correctas en función de la información proporcionada en la fuente de referencia y bloquea las respuestas que estén por debajo del umbral de fundamento definido. 0: no bloquea nada, 0.99: bloquea casi todo',
        },
        relevanceThreshold: {
          label: 'Relevancia',
          hint: 'Valida si las respuestas del modelo son relevantes para la consulta del usuario y bloquea las respuestas que estén por debajo del umbral de relevancia definido. 0: no bloquea nada, 0.99: bloquea casi todo',
        },
      },
    },
  },
};

export default translation;
