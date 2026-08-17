variable "aws_region" {
  description = "Región AWS simulada en LocalStack"
  type        = string
}

variable "localstack_endpoint" {
  description = "Endpoint principal de LocalStack"
  type        = string
}

variable "bucket_name" {
  description = "Nombre del bucket S3"
  type        = string
}