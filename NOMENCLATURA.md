# Nomenclatura del Proyecto: pulso-salud

## Descripción General

Este proyecto utiliza el prefijo **"pulso-salud"** para nombrar todos los recursos de AWS desplegados mediante CDK. Esto facilita la identificación y organización de los componentes en la consola de AWS.

## Configuración Aplicada

### 1. Archivo de Configuración Principal: `cdk/parameter.ts`

```typescript
bedrockChatParams.set("default", {
  envPrefix: "pulso-salud",
});
```

El prefijo `pulso-salud` se establece en el entorno `default` y será aplicado automáticamente a todos los recursos.

### 2. Contexto CDK: `cdk/cdk.json`

```json
{
  "context": {
    "resourcePrefix": "pulso-salud",
    ...
  }
}
```

### 3. Inicialización en `cdk/bin/bedrock-chat.ts`

```typescript
import { NamingHelper } from "../lib/utils/naming";

const resourcePrefix = app.node.tryGetContext("resourcePrefix") || "pulso-salud";
export const naming = new NamingHelper(resourcePrefix);
```

## Nomenclatura de Recursos

Los recursos de AWS se nombrarán con el siguiente patrón:

### Stacks de CDK
- **WAF Stack**: `pulso-salud-FrontendWafStack`
- **Recursos Bedrock**: `pulso-salud-BedrockRegionResourcesStack`
- **Stack Principal**: `pulso-salud-BedrockChatStack`

### Recursos AWS (ejemplos automáticos)

Con el `envPrefix: "pulso-salud"` configurado, los recursos se nombrarán automáticamente:

| Tipo de Recurso | Patrón de Nombre | Ejemplo |
|-----------------|------------------|---------|
| Lambda Functions | `pulso-salud-{función}-{hash}` | `pulso-salud-ChatHandler-A1B2C3` |
| DynamoDB Tables | `pulso-salud-{tabla}-{hash}` | `pulso-salud-ConversationTable-D4E5F6` |
| S3 Buckets | `pulso-salud-{bucket}-{account}-{hash}` | `pulso-salud-assets-123456789012-g7h8i9` |
| Cognito User Pool | `pulso-salud-{pool}` | `pulso-salud-UserPool` |
| API Gateway | `pulso-salud-{api}` | `pulso-salud-BedrockApi` |
| CloudFront | Tags: `Name: pulso-salud-cdn` | Distribution con tag identificativo |
| State Machines | `pulso-salud-{statemachine}-{hash}` | `pulso-salud-EmbeddingStateMachine-J1K2` |

## Uso del NamingHelper (Opcional)

Para aplicar nombres explícitos a recursos específicos, puedes usar la utilidad `NamingHelper` en tus stacks:

```typescript
import { NamingHelper } from "./utils/naming";

// En tu stack
const naming = new NamingHelper("pulso-salud");

// Lambda Function con nombre explícito
const myFunction = new lambda.Function(this, "MyFunction", {
  functionName: naming.lambda("chat-handler"),
  // ... otras propiedades
});

// DynamoDB Table con nombre explícito
const myTable = new dynamodb.Table(this, "MyTable", {
  tableName: naming.table("conversations"),
  // ... otras propiedades
});

// S3 Bucket con nombre explícito
const myBucket = new s3.Bucket(this, "MyBucket", {
  bucketName: naming.bucket("assets", this.account),
  // ... otras propiedades
});
```

### Métodos Disponibles en NamingHelper

- `naming.lambda(name)` - Para funciones Lambda
- `naming.table(name)` - Para tablas DynamoDB
- `naming.bucket(name, account?)` - Para buckets S3
- `naming.api(name)` - Para APIs
- `naming.userPool(name)` - Para User Pools de Cognito
- `naming.distribution(name)` - Para distribuciones CloudFront
- `naming.stateMachine(name)` - Para State Machines
- `naming.queue(name)` - Para colas SQS
- `naming.topic(name)` - Para topics SNS
- `naming.vpc(name)` - Para VPCs
- `naming.securityGroup(name)` - Para Security Groups
- `naming.role(name)` - Para roles IAM
- `naming.resource(name)` - Para recursos genéricos

## Tags Aplicados

Todos los recursos incluyen los siguientes tags:

- **Project**: `pulso-salud`
- **CDKEnvironment**: `default` (o el entorno especificado)
- **ManagedBy**: `CDK`

## Despliegue

Para desplegar la infraestructura con la nomenclatura configurada:

```bash
cd cdk
npm install
npx cdk diff   # Revisa los cambios antes de desplegar
npx cdk deploy --all
```

## Cambiar el Prefijo

Si necesitas cambiar el prefijo en el futuro:

1. **Edita `cdk/parameter.ts`**:
   ```typescript
   bedrockChatParams.set("default", {
     envPrefix: "nuevo-prefijo",
   });
   ```

2. **Edita `cdk/cdk.json`**:
   ```json
   "resourcePrefix": "nuevo-prefijo"
   ```

3. **Redespliega**:
   ```bash
   npx cdk deploy --all
   ```

⚠️ **ADVERTENCIA**: Cambiar el prefijo de recursos existentes causará que CDK los elimine y recree, lo que puede resultar en pérdida de datos. Siempre:
- Haz backup de datos importantes
- Revisa `cdk diff` antes de desplegar
- Considera usar `removalPolicy: RemovalPolicy.RETAIN` para recursos críticos

## Verificar Recursos Desplegados

Después del despliegue, puedes buscar tus recursos en AWS Console usando el prefijo "pulso-salud" o filtrando por los tags aplicados.

### CLI de AWS

```bash
# Listar recursos con tag Project=pulso-salud
aws resourcegroupstaggingapi get-resources \
  --tag-filters Key=Project,Values=pulso-salud \
  --region us-east-1
```

## Entornos Múltiples

Puedes definir diferentes prefijos para diferentes entornos:

```typescript
// cdk/parameter.ts
bedrockChatParams.set("dev", {
  envPrefix: "pulso-salud-dev",
});

bedrockChatParams.set("prod", {
  envPrefix: "pulso-salud-prod",
});
```

Despliega un entorno específico con:

```bash
npx cdk deploy --all -c envName=dev
```
