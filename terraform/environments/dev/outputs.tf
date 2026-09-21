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