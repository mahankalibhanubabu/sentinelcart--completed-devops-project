provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "SentinelCart"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}