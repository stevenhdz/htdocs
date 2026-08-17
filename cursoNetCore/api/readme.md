---
runme:
  id: 01HVW80FE1XM0RESAY8XV4SBYR
  version: v3
---

dotnet new webapi -o api

dotnet ef migrations add hi

dotnet ef database update

dotnet build

dotnet watch run