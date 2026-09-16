# SentinelCart

Production-inspired secure e-commerce DevSecOps platform on AWS EKS.

## Project Status

Phase 0 — Architecture, requirements, and development environment.

This project is being built incrementally from local development to a
production-inspired DevSecOps platform on AWS.

The implementation will be validated phase by phase. Features and
security controls will only be marked complete after they are implemented
and tested.

## Project Overview

SentinelCart is a manageable e-commerce microservices application designed
to demonstrate modern DevOps and DevSecOps practices.

The application includes:

- Frontend
- Users service
- Products service
- Orders service
- Payments service
- PostgreSQL
- Redis

The primary goal is not to build a sophisticated business application.
The primary goal is to build a secure, observable, and auditable platform
around the application.

## Business Problem

A software team needs to deliver an e-commerce application reliably while
reducing security risks throughout the software delivery lifecycle.

SentinelCart demonstrates how to:

- Build and test application code.
- Scan source code and dependencies.
- Detect accidentally committed secrets.
- Build secure container images.
- Generate software bills of materials.
- Sign container artifacts.
- Store images in Amazon ECR.
- Provision AWS infrastructure using Terraform.
- Deploy applications to Amazon EKS.
- Manage deployments using GitOps.
- Enforce Kubernetes security policies.
- Manage secrets without committing credentials to Git.
- Detect suspicious runtime behavior.
- Monitor metrics, logs, traces, and alerts.
- Maintain an auditable delivery process.

## Target Architecture

```text
Developer
   |
   v
GitHub
   |
   v
Pull Request
   |
   v
GitHub Actions
   |
   +--> Tests
   +--> SAST
   +--> SCA
   +--> Secret Detection
   +--> IaC Security
   |
   v
Docker Build
   |
   +--> Image Scan
   +--> SBOM
   +--> Signing
   |
   v
Amazon ECR
   |
   v
GitOps Repository
   |
   v
Argo CD
   |
   v
Amazon EKS
   |
   +--> Kubernetes Security Policies
   +--> Runtime Security
   +--> Observability
   |
   v
Application