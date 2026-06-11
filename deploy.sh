#!/bin/bash
set -e
cd /home/kaduapps-social/htdocs/social.kaduapps.site
git pull origin main
pnpm install --frozen-lockfile
pnpm build
pm2 reload ecosystem.config.cjs --update-env
echo "✅ Deploy completo!"
