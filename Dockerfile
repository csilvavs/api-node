FROM nginx:alpine

# Etapa de construcción
FROM node:18 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

# Copiar todo el código fuente
COPY . .

# Ejecutar pruebas y construcción
RUN npm test && npm run build

# Etapa de producción
FROM nginx:alpine

# Limpiar contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar solo los archivos construidos desde la etapa builder
COPY --from=builder /app/dist /usr/share/nginx/html/

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
