variable "project_name" {
  description = "Project name."
  type        = string
}

variable "environment" {
  description = "Deployment environment."
  type        = string
}

variable "repository_names" {
  description = "List of ECR repository names."
  type        = set(string)
}