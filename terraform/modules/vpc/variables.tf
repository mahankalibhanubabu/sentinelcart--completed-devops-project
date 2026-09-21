variable "project_name" {
  description = "Project name."
  type        = string
}

variable "environment" {
  description = "Deployment environment."
  type        = string
}


variable "vpc_cidr" {
  description = "CIDR block for the SentinelCart VPC."
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "Availability zones used by SentinelCart."
  type        = list(string)
  default     = [
    "ap-south-2a",
    "ap-south-2b"
  ]
}

variable "public_subnet_cidrs" {
  description = "CIDRs for public subnets."
  type        = list(string)

  default = [
    "10.0.1.0/24",
    "10.0.2.0/24"
  ]
}

variable "private_subnet_cidrs" {
  description = "CIDRs for private subnets."
  type        = list(string)

  default = [
    "10.0.11.0/24",
    "10.0.12.0/24"
  ]
}