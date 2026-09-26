data "aws_caller_identity" "current" {}

resource "aws_iam_policy" "sentinelcart_read_identity" {
  name        = "${var.project_name}-${var.environment}-identity-read"
  description = "Minimal identity read permissions for SentinelCart infrastructure validation."

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "sts:GetCallerIdentity"
        ]

        Resource = "*"
      }
    ]
  })

  tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}