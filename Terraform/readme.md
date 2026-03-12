# Terraform + LocalStack (Quick Lab)

## Requisitos

Instalar:

* LocalStack
* Terraform
* AWS CLI
* Docker

---

## Estructura

```
terraform/
├── main.tf
├── variables.tf
├── outputs.tf
└── terraform.tfvars
```

| Archivo          | Uso       |
| ---------------- | --------- |
| main.tf          | recursos  |
| variables.tf     | variables |
| outputs.tf       | outputs   |
| terraform.tfvars | valores   |

---

## Flujo Terraform

```bash
terraform fmt
terraform init
terraform validate
terraform plan
terraform apply
terraform destroy
```

---

## Verificar infraestructura

```bash
terraform state list
terraform output
```

---

## Verificar en LocalStack

```bash
aws --endpoint-url=http://localhost:4566 s3 ls
aws --endpoint-url=http://localhost:4566 s3 ls s3://demo-s3-cloudfront-local
aws --endpoint-url=http://localhost:4566 s3 cp s3://demo-s3-cloudfront-local/index.html -
```

---

## Probar sitio

```
http://demo-s3-cloudfront-local.s3-website.localhost.localstack.cloud:4566
```

---

## Dashboard

```
https://app.localstack.cloud/inst/default/status
```

---

## Actualizar providers (si es necesario)

```bash
terraform init -upgrade
```
