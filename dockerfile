# Usamos Node.js como base
FROM node:20

# Directorio de trabajo dentro del contenedor
WORKDIR /project

# Copiar dependencias primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar resto del código
COPY . .

# Exponer puerto de Vite
EXPOSE 5173

# Iniciar servidor de desarrollo
CMD ["npm", "run", "dev"]