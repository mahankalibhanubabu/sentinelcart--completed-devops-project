output "aws_account_id" {
  description = "AWS account ID."
  value       = data.aws_caller_identity.current.account_id
}

output "aws_region" {
  description = "Current AWS region."
  value       = data.aws_region.current.name
}

output "project_name" {
  description = "Project name."
  value       = var.project_name
}

output "environment" {
  description = "Environment name."
  value       = var.environment
}

output "vpc_id" {
  description = "SentinelCart VPC ID."
  value       = module.vpc.vpc_id
}

output "vpc_cidr" {
  description = "SentinelCart VPC CIDR."
  value       = module.vpc.vpc_cidr
}

output "public_subnet_ids" {
  description = "SentinelCart public subnet IDs."
  value       = module.vpc.public_subnet_ids
}

output "private_subnet_ids" {
  description = "SentinelCart private subnet IDs."
  value       = module.vpc.private_subnet_ids
}

output "nat_gateway_id" {
  description = "SentinelCart NAT Gateway ID."
  value       = module.vpc.nat_gateway_id
}