import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { ApplicationLoadBalancedFargateService } from '@aws-cdk/aws-ecs-patterns';
import { env } from 'process';
import { Vpc } from '@aws-cdk/aws-ec2';
import { ContainerImage } from '@aws-cdk/aws-ecs';

export class DeployStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id, { env: { account: env.CDK_DEFAULT_ACCOUNT, region: env.CDK_DEFAULT_REGION } });

    const vpc = new Vpc(this, 'VPC');

    new ApplicationLoadBalancedFargateService(this, 'App', {
      vpc,
      desiredCount: 2,
      memoryLimitMiB: 512,
      cpu: 256,
      taskImageOptions: {
        image: ContainerImage.fromAsset(__dirname + '/../../app'), 
      },
    });
  }
}
