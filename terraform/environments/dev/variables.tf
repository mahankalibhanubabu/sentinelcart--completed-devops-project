variable "aws_region" {
  description = "AWS region where SentinelCart infrastructure will be deployed."
  type        = string
  default     = "ap-south-2"
}

variable "environment" {
  description = "Deployment environment."
  type        = string
  default     = "dev"
}

variable "project_name" {
  description = "Name of the project."
  type        = string
  default     = "sentinelcart"
}