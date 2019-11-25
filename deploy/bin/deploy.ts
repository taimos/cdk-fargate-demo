#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { DeployStack } from '../lib/deploy-stack';

const app = new cdk.App();
new DeployStack(app, 'cdk-fargate-demo');
