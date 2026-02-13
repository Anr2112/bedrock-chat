/**
 * Helper utility for consistent resource naming across the application
 */
export class NamingHelper {
  private readonly prefix: string;

  constructor(prefix: string = 'pulso-salud') {
    this.prefix = prefix;
  }

  /**
   * Get the base prefix
   */
  public getPrefix(): string {
    return this.prefix;
  }

  /**
   * Generate name for Lambda functions
   */
  public lambda(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for DynamoDB tables
   */
  public table(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for S3 buckets (includes account for uniqueness)
   */
  public bucket(name: string, account?: string): string {
    return account ? `${this.prefix}-${name}-${account}` : `${this.prefix}-${name}`;
  }

  /**
   * Generate name for API Gateway
   */
  public api(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for Cognito User Pool
   */
  public userPool(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for CloudFront distributions
   */
  public distribution(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for Step Functions state machines
   */
  public stateMachine(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for SQS queues
   */
  public queue(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for SNS topics
   */
  public topic(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for VPC
   */
  public vpc(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for Security Groups
   */
  public securityGroup(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate name for IAM roles
   */
  public role(name: string): string {
    return `${this.prefix}-${name}`;
  }

  /**
   * Generate generic resource name
   */
  public resource(name: string): string {
    return `${this.prefix}-${name}`;
  }
}
