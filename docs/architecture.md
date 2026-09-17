# SentinelCart Architecture

## High-Level Flow

Developer
    ↓
GitHub Application Repository
    ↓
GitHub Actions CI
    ↓
Build and Test
    ↓
Security Scanning
    ↓
Docker Image
    ↓
Amazon ECR
    ↓
GitOps Repository
    ↓
Argo CD
    ↓
Amazon EKS
    ↓
SentinelCart Application
    ↓
PostgreSQL Database

## Security Components

- Trivy for vulnerability scanning
- Kyverno for Kubernetes policy enforcement
- Falco for runtime threat detection
- AWS IAM for access control
- AWS Secrets Manager for secret storage

## Observability Components

- Prometheus for metrics collection
- Grafana for dashboards
- Kubernetes logs for troubleshooting