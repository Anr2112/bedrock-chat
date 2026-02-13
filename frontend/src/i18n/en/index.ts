const translation = {
  translation: {
    signIn: {
      button: {
        login: 'Login',
      },
    },
    app: {
      name: 'Bedrock Chat',
      name2: 'Bedrock Chat',
      inputMessage: 'How can I Help You?',
      myBots: 'My Bots',
      discoverBots: 'Discover Bots',
      pinnedBots: 'Pinned Bots',
      starredBots: 'Starred Bots',
      recentlyUsedBots: 'Recently Used Bots',
      conversationHistory: 'Recent Chats',
      chatWaitingSymbol: '▍',
      adminConsoles: 'Admin Panel',
      backChat: 'Back to Chat',
      userGroups: 'User Groups',
    },
    model: {
      'claude-v4-opus': {
        label: 'Claude 4 (Opus)',
        description:
          'Powerful hybrid reasoning model for complex tasks, coding, and AI agents with 200K token context window.',
      },
      'claude-v4.1-opus': {
        label: 'Claude 4.1 (Opus)',
        description:
          'Latest version of the most powerful Opus model with enhanced reasoning capabilities.',
      },
      'claude-v4.5-opus': {
        label: 'Claude 4.5 (Opus)',
        description:
          'The most intelligent model combining maximum capability with practical performance. Features a more accessible price point than previous Opus models.',
      },
      'claude-v4-sonnet': {
        label: 'Claude 4 (Sonnet)',
        description:
          'Balanced hybrid reasoning model optimized for efficiency at scale with 200K token context window.',
      },
      'claude-v4.5-sonnet': {
        label: 'Claude 4.5 (Sonnet)',
        description:
          'The latest version of the Sonnet model that achieves the highest level of coding performance and extended task processing',
      },
      'claude-v4.5-haiku': {
        label: 'Claude 4.5 (Haiku)',
        description:
          'The fastest and most intelligent Haiku model with near-frontier performance and extended thinking capabilities',
      },
      'claude-v3-haiku': {
        label: 'Claude 3 (Haiku)',
        description:
          'Previous version optimized for speed and compactness, providing near-instant responsiveness.',
      },
      'claude-v3.5-sonnet': {
        label: 'Claude 3.5 (Sonnet) v1',
        description:
          'An earlier version of Claude 3.5. Supports a wide range of tasks, but v2 offers improved accuracy.',
      },
      'claude-v3.5-sonnet-v2': {
        label: 'Claude 3.5 (Sonnet) v2',
        description:
          'The latest version of Claude 3.5. An enhanced model that builds on v1 with higher accuracy and performance.',
      },
      'claude-v3.7-sonnet': {
        label: 'Claude 3.7 Sonnet',
        description:
          'Hybrid reasoning model balancing quick responses and deep analytical capabilities.',
      },
      'claude-v3.5-haiku': {
        label: 'Claude 3.5 (Haiku) v1',
        description:
          'The latest version, offering even faster responsiveness and improved capabilities over Haiku 3.',
      },
      'claude-v3-opus': {
        label: 'Claude 3 (Opus)',
        description: 'Powerful model for highly complex tasks.',
      },
      'mistral-7b-instruct': {
        label: 'Mistral 7B',
        description:
          'Supports English text generation tasks with natural coding capabilities',
      },
      'mixtral-8x7b-instruct': {
        label: 'Mistral-8x7B',
        description:
          'A popular, high-quality, sparse Mixture-of-Experts (MoE) model, that is ideal for text summarization, question and answering, text classification, text completion, and code generation.',
      },
      'mistral-large': {
        label: 'Mistral Large',
        description:
          'Ideal for complex tasks that require substantial reasoning capabilities, or ones that are highly specialized, such as Synthetic Text Generation or Code Generation.',
      },
      'mistral-large-2': {
        label: 'Mistral Large2',
        description:
          'Advanced LLM supporting dozens of languages and 80+ coding languages, with best-in-class agentive capabilities including native function calling, JSON output, and reasoning.',
      },
      'amazon-nova-pro': {
        label: 'Amazon Nova Pro',
        description:
          'A highly capable multimodal model with the best combination of accuracy, speed, and cost for a wide range of tasks.',
      },
      'amazon-nova-lite': {
        label: 'Amazon Nova Lite',
        description:
          'A very low-cost multimodal model that is lightning fast for processing image, video, and text inputs.',
      },
      'amazon-nova-micro': {
        label: 'Amazon Nova Micro',
        description:
          'A text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost.',
      },
      'deepseek-r1': {
        label: 'DeepSeek R1',
        description:
          'State-of-the-art reasoning model optimized for general reasoning, math, science, and code generation. Supports English and Chinese languages.',
      },
      // Meta Llama 3 models
      'llama3-3-70b-instruct': {
        label: 'Meta Llama 3.3 70B Instruct',
        description:
          'Latest Llama 3 model offering performance on par with the 405B model at a lower cost with excellent reasoning and instruction-following capabilities.',
      },
      'llama3-2-1b-instruct': {
        label: 'Meta Llama 3.2 1B Instruct',
        description:
          'Lightweight model optimized for edge devices with efficient on-device processing for personal information management and multilingual knowledge retrieval.',
      },
      'llama3-2-3b-instruct': {
        label: 'Meta Llama 3.2 3B Instruct',
        description:
          'Compact model delivering text generation, summarization, and sentiment analysis with low latency, ideal for mobile AI applications.',
      },
      'llama3-2-11b-instruct': {
        label: 'Meta Llama 3.2 11B Instruct',
        description:
          'Multimodal model excelling at image understanding and visual reasoning for image captioning, visual question answering, and document processing.',
      },
      'llama3-2-90b-instruct': {
        label: 'Meta Llama 3.2 90B Instruct',
        description:
          'Large multimodal model with advanced image understanding and visual reasoning capabilities for sophisticated visual intelligence applications.',
      },
      'gpt-oss-20b': {
        label: 'GPT-OSS 20B',
        description:
          'Open-weight 20B parameter model with 128K context window and reasoning capabilities.',
      },
      'gpt-oss-120b': {
        label: 'GPT-OSS 120B',
        description:
          'Open-weight 120B parameter model with 128K context window and advanced reasoning capabilities.',
      },
    },
    agent: {
      label: 'Agent',
      help: {
        overview:
          'By using the Agent functionality, your chatbot can automatically handle more complex tasks. The model must be compatible with Tool use. Please check <Link>here</Link> for details.',
      },
      hint: `The agent automatically determines which tools to use to answer the user's questions. Due to the time required for decision, the response time tends to be longer. Activating one or more tools enables the agent's functionality. Conversely, if no tools are selected, the agent's functionality is not utilized. When the agent's functionality is enabled, the use of "Knowledge" is also treated as one of the tools. This means that "Knowledge" may not be used in responses.`,
      progress: {
        label: 'Thinking...',
      },
      progressCard: {
        toolInput: 'Input: ',
        toolOutput: 'Output: ',
        status: {
          running: 'Running...',
          success: 'Success',
          error: 'Error',
        },
      },
      tools: {
        get_weather: {
          name: 'Current Weather',
          description: 'Retrieve the current weather forecast.',
        },
        sql_db_query: {
          name: 'Database Query',
          description:
            'Execute a detailed and correct SQL query to retrieve results from the database.',
        },
        sql_db_schema: {
          name: 'Database Schema',
          description:
            'Retrieve the schema and sample rows for a list of tables.',
        },
        sql_db_list_tables: {
          name: 'List Database Tables',
          description: 'List all tables available in the database.',
        },
        sql_db_query_checker: {
          name: 'Query Checker',
          description: 'Check if your SQL query is correct before execution.',
        },
        internet_search: {
          name: 'Internet Search',
          description: 'Search the internet for information.',
          settings: 'Search Settings',
          engine: 'Search Engine',
          engines: {
            duckduckgo: {
              label: 'DuckDuckGo (For Trial)',
              hint: 'Limited rate, but free to use. Designed for trial use.',
            },
            firecrawl: {
              label: 'Firecrawl (For Business)',
              hint: 'Rate limits can be expanded. Designed for business use. API key is required. https://www.firecrawl.dev/',
            },
          },
        },
        knowledge_base_tool: {
          name: 'Retrieve Knowledge',
          description: 'Retrieve information from knowledge.',
        },
        bedrock_agent: {
          name: 'Bedrock Agent',
          description: 'Ask a question to the configured Bedrock Agent',
        },
        firecrawl: {
          apiKey: 'Firecrawl API Key',
          maxResults: 'Maximum Results',
        },
        bedrockAgent: {
          name: 'Bedrock Agent',
          description: 'Use Bedrock Agent as a tool.',
          agentId: {
            label: 'Agent ID',
            placeholder: 'Enter Agent ID',
          },
          aliasId: {
            label: 'Alias ID',
            placeholder: 'Enter Alias ID',
          },
        },
      },
    },
    bot: {
      label: {
        myBots: 'My Bots',
        recentlyUsedBots: 'Recently Used Bots',
        knowledge: 'Knowledge',
        url: 'URL',
        s3url: 'S3 Data Source',
        sitemap: 'Sitemap URL',
        file: 'File',
        loadingBot: 'Loading...',
        normalChat: 'Chat',
        notAvailableBot: '[NOT Available]',
        notAvailableBotInputMessage: 'This bot is NOT available.',
        noDescription: 'No Description',
        notAvailable: 'This bot is NOT available.',
        noBots: 'No Bots.',
        noBotsRecentlyUsed: 'No Recently Used Bots.',
        noStarredBots: 'No Starred Bots.',
        retrievingKnowledge: '[Retrieving Knowledge...]',
        dndFileUpload:
          'You can upload files by drag and drop.\nSupported files: {{fileExtensions}}',
        uploadError: 'Error Message',
        referenceLink: 'Reference Link',
        syncStatus: {
          queue: 'Waiting Sync',
          running: 'Syncing',
          success: 'Completed Sync',
          fail: 'Failed Sync',
        },
        fileUploadStatus: {
          uploading: 'Uploading...',
          uploaded: 'Uploaded',
          error: 'ERROR',
        },
        quickStarter: {
          title: 'Conversation Quick Starter ',
          exampleTitle: 'Title',
          example: 'Conversation Example',
        },
        citeRetrievedContexts: 'Retrieved Context Citation',
        unsupported: 'Unsupported, Read-only',
      },
      titleSubmenu: {
        edit: 'Edit',
        copyLink: 'Copy Link',
        copiedLink: 'Copied',
        markAsEssential: 'Marcar como esencial',
        removeEssential: 'Eliminar estado esencial',
      },
      help: {
        overview:
          'Los bots funcionan según instrucciones predefinidas. El chat no funciona como se espera a menos que se defina el contexto en el mensaje, pero con los bots no es necesario definir el contexto.',
        instructions:
          'Defina cómo debe comportarse el bot. Dar instrucciones ambiguas puede provocar movimientos impredecibles, por lo que debe proporcionar instrucciones claras y específicas.',
        knowledge: {
          overview:
            'Al proporcionar conocimientos externos al bot, este es capaz de manejar datos para los que no ha sido entrenado previamente.',
          url: 'La información de la URL especificada se utilizará como conocimiento.',
          s3url:
            'Al introducir el URI de S3, puede añadir S3 como fuente de datos. Puede añadir hasta 4 fuentes. Solo admite buckets que existan en la misma cuenta y la misma región que la región Bedrock.',
          sitemap:
            'Al especificar la URL del mapa del sitio, la información obtenida mediante el rastreo automático de los sitios web que lo componen se utilizará como conocimiento.',
          file: 'Los archivos subidos se utilizarán como conocimiento.',
          citeRetrievedContexts:
            'Configure si se debe mostrar el contexto recuperado para responder a las consultas de los usuarios como información de citación.\nSi está habilitado, los usuarios pueden acceder a las URL o archivos de origen originales.',
        },
        quickStarter: {
          overview:
            'Al iniciar una conversación, proporcione ejemplos. Los ejemplos ilustran cómo usar el bot.',
        },
      },
      alert: {
        sync: {
          error: {
            title: 'Error de sincronización del conocimiento',
            body: 'Ocurrió un error al sincronizar el conocimiento. Por favor, revise el siguiente mensaje:',
          },
          incomplete: {
            title: 'No listo',
            body: 'Este bot no ha completado la sincronización del conocimiento, por lo que se utiliza el conocimiento anterior a la actualización.',
          },
        },
      },
      samples: {
        title: 'Instrucciones de ejemplo',
        anthropicLibrary: {
          title: 'Biblioteca de Prompts de Anthropic',
          sentence: '¿Necesita más ejemplos? Visite: ',
          url: 'https://docs.anthropic.com/claude/prompt-library',
        },
        pythonCodeAssistant: {
          title: 'Asistente de Codificación en Python',
          prompt: `Escriba un script de Python corto y de alta calidad para la tarea dada, algo que un experto en Python muy calificado escribiría. Está escribiendo código para un desarrollador experimentado, por lo que solo agregue comentarios para cosas que no sean obvias. Asegúrese de incluir cualquier importación requerida. 
NUNCA escriba nada antes del bloque \`\`\`python\`\`\`. Después de generar el código y después del bloque \`\`\`python\`\`\`, revise su trabajo cuidadosamente para asegurarse de que no haya errores, fallos o inconsistencias. Si hay errores, enumere esos errores en etiquetas <error>, luego genere una nueva versión con esos errores corregidos. Si no hay errores, escriba "VERIFICADO: SIN ERRORES" en las etiquetas <error>.`,
        },
        mailCategorizer: {
          title: 'Clasificador de Correos',
          prompt: `Eres un agente de servicio al cliente encargado de clasificar los correos electrónicos por tipo. Por favor, proporciona tu respuesta y luego justifica tu clasificación.

Las categorías de clasificación son: 
(A) Pregunta previa a la venta 
(B) Artículo roto o defectuoso 
(C) Pregunta de facturación 
(D) Otro (por favor explique)

¿Cómo categorizaría este correo electrónico?`,
        },
        fitnessCoach: {
          title: 'Entrenador Personal de Fitness',
          prompt: `Eres un entrenador personal de fitness optimista y entusiasta llamado Sam. Sam es apasionado por ayudar a los clientes a ponerse en forma y llevar un estilo de vida más saludable. Escribes en un tono alentador y amigable y siempre intentas guiar a tus clientes hacia mejores objetivos de fitness. Si el usuario te pregunta algo no relacionado con el fitness, ya sea que lleves el tema de vuelta al fitness, o digas que no puedes responder.`,
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
      apiSettings: {
        pageTitle: 'Configuración de la API de Publicación de Bots Compartidos',
        label: {
          endpoint: 'Punto de acceso de la API',
          usagePlan: 'Plan de uso',
          allowOrigins: 'Orígenes permitidos',
          apiKeys: 'Claves de API',
          period: {
            day: 'Por DÍA',
            week: 'Por SEMANA',
            month: 'Por MES',
          },
          apiKeyDetail: {
            creationDate: 'Fecha de creación',
            active: 'Activo',
            inactive: 'Inactivo',
            key: 'Clave de API',
          },
        },
        item: {
          throttling: 'Throttling',
          burstLimit: 'Burst',
          rateLimit: 'Rate',
          quota: 'Quota',
          requestLimit: 'Requests',
          offset: 'Offset',
        },
        help: {
          overview:
            "La creación de una API permite que los clientes externos accedan a las funciones del bot; las API permiten la integración con aplicaciones externas.",
          endpoint: 'El cliente puede usar el bot desde este punto de acceso.',
          usagePlan:
            'Los planes de uso especifican el número o la tasa de solicitudes que su API acepta de un cliente. Asocie una API con un plan de uso para rastrear las solicitudes que recibe su API.',
          throttling: 'Limite la tasa a la que los usuarios pueden llamar a su API.',
          rateLimit:
            'Ingrese la tasa, en solicitudes por segundo, que los clientes pueden llamar a su API.',
          burstLimit:
            'Ingrese el número de solicitudes concurrentes que un cliente puede hacer a su API.',
          quota:
            'Active las cuotas para limitar el número de solicitudes que un usuario puede hacer a su API en un período de tiempo determinado.',
          requestLimit:
            'Ingrese el número total de solicitudes que un usuario puede hacer en el período de tiempo que seleccione en la lista desplegable.',
          allowOrigins:
            'Orígenes de clientes permitidos para el acceso. Si el origen no está permitido, el llamador recibe una respuesta 403 Forbidden y se le niega el acceso a la API. El origen debe seguir el formato: "(http|https)://nombre-del-host" o "(http|https)://nombre-del-host:puerto" y se pueden usar comodines (*).',  
          allowOriginsExample:
            'e.g. https://your-host-name.com, https://*.your-host-name.com, http://localhost:8000',
          apiKeys:
            'Una clave API es una cadena alfanumérica que se utiliza para identificar a un cliente de su API. De lo contrario, el solicitante recibe una respuesta 403 Prohibido y se le deniega el acceso a la API.',
        },
        button: {
          ApiKeyShow: 'Mostrar',
          ApiKeyHide: 'Ocultar',
        },
        alert: {
          botUnshared: {
            title: 'Por favor, comparte el bot con todos los usuarios.',
            body: 'No puedes publicar una API para el bot que no está compartido con todos los usuarios.',
          },
          deploying: {
            title: 'El despliegue de la API está EN PROGRESO',
            body: 'Por favor espera hasta que el despliegue esté completo.',
          },
          deployed: {
            title: 'La API ha sido DESPLEGADA',
            body: 'Puedes acceder a la API desde el Cliente usando el Punto de acceso de la API y la Clave de API.',
          },
          deployError: {
            title: 'FALLÓ el despliegue de la API',
            body: 'Por favor elimina la API y vuelve a crearla.',
          },
        },
        deleteApiDaialog: {
          title: 'Borrar?',
          content:
            '¿Estás seguro de que deseas borrar la API? El punto de acceso de la API será eliminado y el cliente ya no tendrá acceso a ella.',
        },
        addApiKeyDialog: {
          title: 'Agregar Clave API',
          content: 'Ingrese un nombre para identificar la Clave API.',
        },
        deleteApiKeyDialog: {
          title: 'Borrar?',
          content:
            '¿Estás seguro de que deseas borrar <Bold>{{title}}</Bold>?\nLos clientes que usen esta Clave API no tendrán acceso a la API.',
        },
      },
      button: {
        newBot: 'Create New Bot',
        create: 'Create',
        edit: 'Edit',
        save: 'Save',
        delete: 'Delete',
        share: 'Share',
        apiSettings: 'API Publish Settings',
        copy: 'Copy',
        copied: 'Copied',
        instructionsSamples: 'Samples',
        chooseFiles: 'Choose files',
        viewAll: 'Ver Todos',
        removeFromRecent: 'Remove from History',
      },
      deleteDialog: {
        title: 'Delete?',
        content: 'Are you sure to delete <Bold>{{title}}</Bold>?',
      },
      shareDialog: {
        title: 'Share',
        switchLabel: 'Share this Bot',
        label: {
          selectShare: 'Share with',
          all: 'ALL Users',
          partial: 'Selected Users',
          search: 'Search for Users and Groups',
          noSearchResults: 'No search results found',
          memberManagement: 'Edit Members',
          sharing: {
            not_shared: 'Not shared with any groups or users',
            shared_only_users: 'Shared with {{count}} user',
            shared_only_users_plural: 'Shared with {{count}} users',
            shared_only_groups: 'Shared with {{count}} group',
            shared_only_groups_plural: 'Shared with {{count}} groups',
            shared_both:
              'Shared with {{groupCount}} group and {{userCount}} user ',
            shared_both_user_plural:
              'Shared with {{groupCount}} group and {{userCount}} users',
            shared_both_group_plural:
              'Shared with {{groupCount}} groups and {{userCount}} user',
            shared_both_plural:
              'Shared with {{groupCount}} groups and {{userCount}} users ',
          },
          user: 'User',
          group: 'Group',
        },
        off: {
          content: 'This bot is private and only you have access to it.',
        },
        on: {
          content:
            'This bot is shared and accessible to other users. Shared users can find and use this bot through the <Link>Discover Bot</Link> page.',
          linkDescription:
            'You can also chat with the bot using this shared link.',
        },
        button: {
          manage: 'Manage',
          removeAccess: 'Remove Access',
          cancelRemoval: 'Cancel Removal',
          cancelAddition: 'Cancel Addition',
        },
      },
      error: {
        notSupportedFile: 'This file is not supported.',
        duplicatedFile: 'A file with the same name has been uploaded.',
        failDeleteApi: 'Failed to delete the API.',
      },
      activeModels: {
        title: 'Model Activation',
        description: 'Configure which AI models can be used with this bot.',
      },
      promptCaching: {
        title: 'Prompt Caching',
        promptCachingEnabled: {
          title: 'Use prompt caching if the model supports it.',
          description: 'If enabled, it may reduce the cost and latency of repeated conversations with this bot.',
        },
      },
    },
    admin: {
      botAnalytics: {
        label: {
          pageTitle: 'Bot Analytics',
          noBotUsages: 'During the Calculation Period, no bots were utilized.',
          published: 'API is published.',
          SearchCondition: {
            title: 'Calculation Period',
            from: 'From',
            to: 'To',
          },
          sortByCost: 'Sort by Cost',
        },
        help: {
          overview: 'Monitor the usage status of Bots and Published Bot APIs.',
          calculationPeriod:
            'If the Calculation Period is not set, the cost for today will be displayed.',
        },
      },
      apiManagement: {
        label: {
          pageTitle: 'API Management',
          publishedDate: 'Published Date',
          noApi: 'No APIs.',
        },
      },
      botManagement: {
        label: {
          pageTitle: 'Bot Management',
          sharedUrl: 'Bot URL',
          apiSettings: 'API Publish Settings',
          noKnowledge: 'This bot has no Knowledge.',
          notPublishApi: "This bot's API is not published.",
          deployStatus: 'Deploy Status',
          cfnStatus: 'CloudFormation Status',
          codebuildStatus: 'CodeBuild Status',
          codeBuildId: 'CodeBuild ID',
          usagePlanOn: 'ON',
          usagePlanOff: 'OFF',
          rateLimit:
            '<Bold>{{limit}}</Bold> requests per second, that clients can call the API.',
          burstLimit:
            'The client can make <Bold>{{limit}}</Bold> concurrent requests to the API.',
          requestsLimit:
            'You can make <Bold>{{limit}}</Bold> requests <Bold>{{period}}</Bold>.',
          sharedAllUsers: 'Shared with ALL Users',
          privateBot: 'This bot is not shared.',
          owner: 'Owner',
        },
        alert: {
          noApiKeys: {
            title: 'No API Keys',
            body: 'All clients cannot access the API.',
          },
        },
        button: {
          deleteApi: 'Eliminar API',
        },
      },
      validationError: {
        period: 'Enter both From and To',
      },
    },
    discover: {
      pageTitle: 'Descubre mas Bots',
      description:
        'Ver y buscar bots que sean públicos o para los que tengas permiso de acceso.',
      search: {
        placeholder: 'Search Bots',
        searching: 'Searching...',
        results: 'Found {{count}} results for "{{query}}"',
        noResults: 'No results found for "{{query}}"',
        tryDifferent: 'Try different keywords.',
        backToHome: 'Back to Home',
      },
      essential: {
        label: 'Essential',
        description:
          'These bots are officially selected by administrators. Use them actively to improve your work efficiency as part of standard operations.',
        noEssentialBotsMessage: {
          title: 'No Essential Bots',
          content: `Essential section is hidden for non-admin users since there are no Essential bots.<br/>
          Bots shared with All Users can be marked as Essential.<br/>
          Use the bot menu in Chat, My Bots, Starred Bots, or Recently Used Bots views to mark a bot as Essential.<br/>
          Click the <MenuButton/> button on these views to access the menu.`,
        },
      },
      trending: {
        label: 'Tendencias',
        description: 'Los Bots más populares.',
      },
      discover: {
        label: 'Descubrir',
        description: 'Muestra aleatoria de Bots.',
      },
    },
    conversationHistory: {
      pageTitle: 'Historial de Chat',
      label: {
        noConversations: 'No hay historial de chat',
      },
      searchConversation: {
        placeholder: 'Buscar conversaciones...',
        searching: 'Buscando...',
        results: 'Se encontraron {{count}} chats que coinciden con "{{query}}"',
        noResults: 'No se encontraron chats que coincidan con "{{query}}"',
        tryDifferentKeywords: 'Intenta con diferentes palabras clave',
        resultsCount: '{{count}} resultados encontrados',
      },
    },
    deleteDialog: {
      title: 'Borrar?',
      content: '¿Estás seguro de que deseas borrar <Bold>{{title}}</Bold>?',
      pinnedBotError: {
        title: 'No se puede Borrar',
        content:
          'Este bot está marcado como esencial. El administrador puede cambiar el estado esencial.',
      },
    },
    clearDialog: {
      title: '¿Borrar TODO?',
      content: '¿Estás seguro de que deseas borrar TODAS las conversaciones?',
    },
    languageDialog: {
      title: 'Cambiar idioma',
    },
    drawerOptionsDialog: {
      title: 'Opciones del menú lateral',
      label: {
        visibility: 'Visibilidad',
        displayCount: 'Cantidad a mostrar',
      },
    },
    feedbackDialog: {
      title: 'Feedback',
      content: 'Please provide more details.',
      categoryLabel: 'Category',
      commentLabel: 'Comment',
      commentPlaceholder: '(Optional) Enter your comment',
      categories: [
        {
          value: 'notFactuallyCorrect',
          label: 'Not factually correct',
        },
        {
          value: 'notFullyFollowRequest',
          label: 'Not fully following my request',
        },
        {
          value: 'other',
          label: 'Other',
        },
      ],
    },
    button: {
      newChat: 'New Chat',
      backToConversationHistory: 'Back to Chat History',
      botConsole: 'Bot Console',
      botAnalytics: 'Shared Bot Analytics',
      apiManagement: 'API Management',
      userUsages: 'User Usages',
      SaveAndSubmit: 'Save & Submit',
      resend: 'Resend',
      regenerate: 'Regenerate',
      delete: 'Delete',
      deleteAll: 'Delete All',
      done: 'Done',
      ok: 'OK',
      cancel: 'Cancel',
      back: 'Back',
      menu: 'Menu',
      language: 'Language',
      clearConversation: 'Delete ALL Conversations',
      signOut: 'Sign out',
      close: 'Close',
      add: 'Add',
      continue: 'Continue to Generate',
      botManagement: 'Bot Management',
      mode: 'Mode',
      drawerOption: 'Side Menu Options',
    },
    input: {
      hint: {
        required: '* Required',
      },
      validationError: {
        required: 'This field is required.',
        invalidOriginFormat: 'Invalid Origin format.',
      },
    },
    embeddingSettings: {
      title: 'Embedding Setting',
      description:
        'You can configure the parameters for vector embeddings. By adjusting the parameters, you can change the accuracy of document retrieval.',
      chunkSize: {
        label: 'chunk size',
        hint: 'The chunk size refers to the size at which a document is divided into smaller segments',
      },
      chunkOverlap: {
        label: 'chunk overlap',
        hint: 'You can specify the number of overlapping characters between adjacent chunks.',
      },
      enablePartitionPdf: {
        label:
          'Enable detailed PDF analysis. If enabled, the PDF will be analyzed in detail over time.',
        hint: 'It is effective when you want to improve search accuracy. Computation costs increase because computation takes more time.',
      },
      help: {
        chunkSize:
          "When the chunk size is too small, contextual information can be lost, and when it's too large, different contextual information may exist within the same chunk, potentially reducing search accuracy.",
        chunkOverlap:
          'By specifying chunk overlap, you can preserve contextual information around chunk boundaries. Increasing the chunk size can sometimes improve search accuracy. However, be aware that increasing the chunk overlap can lead to higher computational costs.',
        overlapTokens:
          'You configure the number of tokens to overlap, or repeat across adjacent chunks. For example, if you set overlap tokens to 60, the last 60 tokens in the first chunk are also included at the beginning of the second chunk.',
        maxParentTokenSize:
          'You are able to define the parent chunk size. During retrieval, the system initially retrieves child chunks, but replaces them with broader parent chunks so as to provide the model with more comprehensive context',
        maxChildTokenSize:
          'You are able to define the child chunk size. During retrieval, the system initially retrieves child chunks, but replaces them with broader parent chunks so as to provide the model with more comprehensive context',
        bufferSize:
          'This parameter can influence how much text is examined together to determine the boundaries of each chunk, impacting the granularity and coherence of the resulting chunks. A larger buffer size might capture more context but can also introduce noise, while a smaller buffer size might miss important context but ensures more precise chunking.',
        breakpointPercentileThreshold:
          'A higher threshold requires sentences to be more distinguishable in order to be split into different chunks. A higher threshold results in fewer chunks and typically larger average chunk size.',
      },
      alert: {
        sync: {
          error: {
            title: 'Sentence Splitte Error',
            body: 'Try again with less chunk overlap value',
          },
        },
      },
    },
    generationConfig: {
      title: 'Generation Config',
      description:
        ' You can configure LLM inference parameters to control the response from the models.',
      maxTokens: {
        label: 'Maximum generation length/maximum new tokens',
        hint: 'The maximum number of tokens allowed in the generated response',
      },
      temperature: {
        label: 'Temperature',
        hint: 'Affects the shape of the probability distribution for the predicted output and influences the likelihood of the model selecting lower-probability outputs',
        help: 'Choose a lower value to influence the model to select higher-probability outputs; Choose a higher value to influence the model to select lower-probability outputs',
      },
      topK: {
        label: 'Top-k',
        hint: 'The number of most-likely candidates that the model considers for the next token',
        help: 'Choose a lower value to decrease the size of the pool and limit the options to more likely outputs; Choose a higher value to increase the size of the pool and allow the model to consider less likely outputs',
      },
      topP: {
        label: 'Top-p',
        hint: 'The percentage of most-likely candidates that the model considers for the next token',
        help: 'Choose a lower value to decrease the size of the pool and limit the options to more likely outputs; Choose a higher value to increase the size of the pool and allow the model to consider less likely outputs',
      },
      stopSequences: {
        label: 'End token/end sequence',
        hint: 'Specify sequences of characters that stop the model from generating further tokens. Use commas to separate multiple words',
      },
      budgetTokens: {
        label: 'Reasoning Budget Tokens',
        hint: 'The maximum number of tokens to allocate for reasoning steps. Larger values allow for more complex reasoning but may increase response time',
        help: 'Sets the token budget for reasoning steps. Cannot exceed the Max Tokens value.',
      },
    },
    searchSettings: {
      title: 'Search Settings',
      description:
        'You can configure search parameters to fetch relevant documents from vector store.',
      maxResults: {
        label: 'Max Results',
        hint: 'The maximum number of records fetched from vector store',
      },
      searchType: {
        label: 'Search Type',
        hybrid: {
          label: 'Hybrid search',
          hint: 'Combines relevancy scores from semantic and text search to provide greater accuracy.',
        },
        semantic: {
          label: 'Semantic search',
          hint: 'Uses vector embeddings to deliver relevant results.',
        },
      },
    },
    knowledgeBaseSettings: {
      title: 'Knowledge Detail Settings',
      description:
        'Select the embedded model for configuring knowledge, and set the method for splitting documents added as knowledge. These settings cannot be changed after creating the bot.',
      embeddingModel: {
        label: 'Embeddings Model',
        titan_v2: {
          label: 'Titan Embedding Text v2',
        },
        cohere_multilingual_v3: {
          label: 'Embed Multilingual v3',
        },
      },
      chunkingStrategy: {
        label: 'Chunking Strategy',
        default: {
          label: 'Default chunking',
          hint: "Automatically splits text into chunks of about 300 tokens in size, by default. If a document is less than or already 300 tokens, it's not split any futher.",
        },
        fixed_size: {
          label: 'Fixed-size chunking',
          hint: 'Splits text into your set approximate token size.',
        },
        hierarchical: {
          label: 'hierarchical chunking',
          hint: 'Splits text into nested structures of child and parent chunks.',
        },
        semantic: {
          label: 'semantic chunking',
          hint: 'Splits text into meaningful chunks to enhance understanding and information retrieval.',
        },
        none: {
          label: 'No chunking',
          hint: 'Documents will not be split.',
        },
      },
      chunkingMaxTokens: {
        label: 'Max Tokens',
        hint: 'The maximum number of tokens per chunk',
      },
      chunkingOverlapPercentage: {
        label: 'Overlap Percentage between Chunks',
        hint: 'Parent chunk overlap depends on the child token size and child percentage overlap you specify.',
      },
      overlapTokens: {
        label: 'Overlap Tokens',
        hint: 'The number of tokens to repeat across chunks in the same layer',
      },
      maxParentTokenSize: {
        label: 'Max Parent Token Size',
        hint: 'The maximum number of tokens that a chunk can contain in Parent layer',
      },
      maxChildTokenSize: {
        label: 'Max Child Token Size',
        hint: 'The maximum number of tokens that a chunk can contain in Child layer',
      },
      bufferSize: {
        label: 'Buffer Size',
        hint: 'the number of surrounding sentences to be added for embeddings creation. A buffer size of 1 results in 3 sentences (current, previous and next sentence) to be combined and embedded',
      },
      breakpointPercentileThreshold: {
        label: 'Breakpoint percentile threshold',
        hint: 'The percentile threshold of sentence distance/dissimilarity to draw breakpoints between sentences.',
      },
      opensearchAnalyzer: {
        label: 'Analyzer (Tokenization, Normalization)',
        hint: 'You can specify the analyzer to tokenize and normalize the documents registered as knowledge. Selecting an appropriate analyzer will improve search accuracy. Please choose the optimal analyzer that matches the language of your knowledge.',
        icu: {
          label: 'ICU analyzer',
          hint: 'For tokenization, {{tokenizer}} is used, and for normalization, {{normalizer}} is used.',
        },
        kuromoji: {
          label: 'Japanese (kuromoji) analyzer',
          hint: 'For tokenization, {{tokenizer}} is used, and for normalization, {{normalizer}} is used.',
        },
        none: {
          label: 'System default analyzer',
          hint: 'The default analyzer defined by the system (OpenSearch) will be used.',
        },
        tokenizer: 'Tokenizer:',
        normalizer: 'Normalizer:',
        token_filter: 'Token Filter:',
        not_specified: 'Not specified',
      },
      advancedParsing: {
        label: 'Advanced Parsing',
        description:
          'Select a model to use for advanced document parsing capabilities.',
        hint: 'Suitable for parsing more than standard text in supported document formats, including tables within PDFs with their structure intact. Additional costs are incurred for parsing using generative AI.',
      },
      parsingModel: {
        label: 'Advanced Parsing Model',
        none: {
          label: 'Disabled',
          hint: 'No advanced parsing will be applied.',
        },
        claude_3_5_sonnet_v1: {
          label: 'Claude 3.5 Sonnet v1',
          hint: 'Use Claude 3.5 Sonnet v1 for advanced document parsing.',
        },
        claude_3_haiku_v1: {
          label: 'Claude 3 Haiku v1',
          hint: 'Use Claude 3 Haiku v1 for advanced document parsing.',
        },
      },
      webCrawlerConfig: {
        title: 'Web Crawler Config',
        crawlingScope: {
          label: 'Crawling Scope',
          default: {
            label: 'Default',
            hint: 'Limit crawling to web pages that belong to the same host and with the same initial URL path. For example, with a seed URL of "https://aws.amazon.com/bedrock/" then only this path and web pages that extend from this path will be crawled, like "https://aws.amazon.com/bedrock/agents/". Sibling URLs like "https://aws.amazon.com/ec2/" are not crawled, for example.',
          },
          subdomains: {
            label: 'Subdomains',
            hint: 'Include crawling of any web page that has the same primary domain as the seed URL. For example, with a seed URL of "https://aws.amazon.com/bedrock/" then any web page that contains "amazon.com" will be crawled, like "https://www.amazon.com".',
          },
          hostOnly: {
            label: 'Host Only',
            hint: 'Limit crawling to web pages that belong to the same host. For example, with a seed URL of "https://aws.amazon.com/bedrock/", then web pages with "https://docs.aws.amazon.com" will also be crawled, like "https://aws.amazon.com/ec2".',
          },
        },
        includePatterns: {
          label: 'Include Patterns',
          hint: 'Specify patterns to include in web crawling. Only URLs matching these patterns will be crawled.',
        },
        excludePatterns: {
          label: 'Exclude Patterns',
          hint: 'Specify patterns to exclude from web crawling. URLs matching these patterns will not be crawled.',
        },
      },
      advancedConfigration: {
        existingKnowledgeBaseId: {
          label: 'ID for the Amazon Bedrock Knowledge Base',
          description:
            'Please specify ID that your existing Amazon Bedrock knowledge base.',
        },
        createDedicatedKnowledgeBase: {
          label: 'Create a dedicated Knowledge Base',
        },
        createTenantInSharedKnowledgeBase: {
          label: 'Create a tenant in a shared Knowledge Base',
        },
        useExistingKnowledgeBase: {
          label: 'Use your existing Knowledge Base',
        },
      },
    },
    error: {
      answerResponse: 'An error occurred while responding.',
      notFoundConversation:
        'Since the specified chat does not exist, a new chat screen is displayed.',
      notFoundPage: 'The page you are looking for is not found.',
      cannotAccessBot: 'Cannot access this bot. Redirected to New Chat.',
      unexpectedError: {
        title: 'An unexpected error has occurred.',
        restore: 'Go to TOP page',
      },
      predict: {
        general: 'An error occurred while predicting.',
        invalidResponse:
          'Unexpected response received. The response format does not match the expected format.',
      },
      notSupportedImage: 'The selected model does not support images.',
      unsupportedFileFormat: 'The selected file format is not supported.',
      totalFileSizeToSendExceeded:
        'The total file size must be no more than {{maxSize}}.',
      attachment: {
        fileSizeExceeded:
          'Each document size must be no more than {{maxSize}}.',
        fileCountExceeded: 'Could not upload more than {{maxCount}} files.',
      },
      share: {
        markedEssential: {
          title: 'Unable to Change Sharing Settings',
          content:
            'This bot is marked Essential by administrator. Essential bots must be shared with all users.',
        },
        publication: {
          title: 'Unable to Change Sharing Settings',
          content:
            'This bot is published as API by administrator. Published API must be shared with all users.',
        },
      },
      invalidMermaidFormat: "Error in diagram drawing"
    },
    validation: {
      title: 'Validation Error',
      maxRange: {
        message: 'The maximum value that can be set is {{size}}',
      },
      minRange: {
        message: 'The minimum value that can be set is {{size}}',
      },
      maxBudgetTokens: {
        message: 'The maxBudgetToken cannot exceed the maxTokens {{size}}',
      },
      chunkOverlapLessThanChunkSize: {
        message: 'Chunk overlap must be set to less than Chunk size',
      },
      parentTokenRange: {
        message: 'Parent token size should be larger than child token size',
      },
      quickStarter: {
        message: 'Please input both Title and Conversation Example.',
      },
      required: '{{key}} is required',
      number: {
        greaterThen: '{{key}} must be greater then {{value}} ',
      },
    },
    helper: {
      shortcuts: {
        title: 'Shortcut Keys',
        items: {
          focusInput: 'Shift focus to chat input',
          newChat: 'Open new chat',
        },
      },
    },
    guardrails: {
      title: 'Guardrails',
      label: 'Enable Guardrails for Amazon Bedrock',
      hint: 'Guardrails for Amazon Bedrock are used to implement application-specific safeguards based on your use cases and responsible AI policies.',
      harmfulCategories: {
        label: 'Harmful Categories',
        hint: 'Configure content filters by adjusting the degree of filtering to detect and block harmful user inputs and model responses that violate your usage policies. 0: disable, 1: low, 2: middle, 3: High',
        hate: {
          label: 'Hate',
          hint: 'Describes input prompts and model responses that discriminate, criticize, insult, denounce, or dehumanize a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin). 0: disable, 1: low, 2: middle, 3: High',
        },
        insults: {
          label: 'Insults',
          hint: 'Describes input prompts and model responses that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying. 0: disable, 1: low, 2: middle, 3: High',
        },
        sexual: {
          label: 'Sexual',
          hint: 'Describes input prompts and model responses that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex. 0: disable, 1: low, 2: middle, 3: High',
        },
        violence: {
          label: 'Violence',
          hint: 'Describes input prompts and model responses that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing. 0: disable, 1: low, 2: middle, 3: High ',
        },
        misconduct: {
          label: 'Misconduct',
          hint: 'Describes input prompts and model responses that seeks or provides information about engaging in misconduct activity, or harming, defrauding, or taking advantage of a person, group or institution. 0: disable, 1: low, 2: middle, 3: High',
        },
      },
      contextualGroundingCheck: {
        label: 'Contextual Grounding Check',
        hint: 'Use this policy to validate if model responses are grounded in the reference source and relevant to user’s query to filter model hallucination.',
        groundingThreshold: {
          label: 'Grounding',
          hint: 'Validate if the model responses are grounded and factually correct based on the information provided in the reference source, and block responses that are below the defined threshold of grounding. 0: blocks nothing, 1: blocks almost everything',
        },
        relevanceThreshold: {
          label: 'Relevance',
          hint: "Validate if the model responses are relevant to the user's query and block responses that are below the defined threshold of relevance. 0: blocks nothing, 1: blocks almost everything",
        },
      },
    },
    reasoning: {
      button: {
        label: 'Reasoning',
      },
      card: {
        label: 'Reasoning Process',
      },
    },
  },
};

export default translation;
