# Base image: Caddy on Alpine Linux (small, and Caddy handles HTTPS automatically)
FROM caddy:2-alpine

# Server config
COPY Caddyfile /etc/caddy/Caddyfile

# Site files only (explicit list keeps package.json, .gitignore, etc. out of the image)
COPY index.html experience.html lab.html contact.html style.css index.js tubes.js /srv/
