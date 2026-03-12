install localstack
install terraform

terraform fmt

| Comando              | Para qué sirve          |
| -------------------- | ----------------------- |
| `terraform init`     | Inicializa providers    |
| `terraform validate` | valida sintaxis         |
| `terraform plan`     | muestra cambios         |
| `terraform apply`    | crea infraestructura    |
| `terraform destroy`  | elimina infraestructura |

| Archivo      | Uso       |
| ------------ | --------- |
| main.tf      | recursos  |
| variables.tf | variables |
| outputs.tf   | outputs   |
| tfvars       | valores   |

terraform state list

aws --endpoint-url=http://localhost:4566 s3 ls
aws --endpoint-url=http://localhost:4566 s3 ls s3://demo-s3-cloudfront-local
aws --endpoint-url=http://localhost:4566 s3 cp s3://demo-s3-cloudfront-local/index.html -

terraform output

http://demo-s3-cloudfront-local.s3-website.localhost.localstack.cloud:4566

Aca veo si subio:

https://app.localstack.cloud/inst/default/status

Auth

https://app.localstack.cloud/getting-started

terraform init -upgrade