# Utiliser une image de base Node
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /var/www/react

# Copier le package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port de développement de React
EXPOSE 3000

# Lancer le serveur de développement
CMD ["npm", "start"]
