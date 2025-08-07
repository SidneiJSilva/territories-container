# Use a versão LTS mais recente e estável do Node.js
FROM node:20-bookworm-slim

# O resto do ficheiro permanece igual
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# A linha CMD é essencial para dizer ao container o que fazer.
# Este comando genérico será usado pelo loginApp e territoriesApp.
# O docker-compose.yml irá sobrepor este comando para o container-app.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
