# Imagen base de Nginx
FROM nginx:alpine

# Elimina los archivos por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia el contenido del build UI5 al directorio público de Nginx
COPY dist/ /usr/share/nginx/html/

# Expone el puerto 80 (dentro del contenedor)
EXPOSE 80
