#!/usr/bin/env bash
set -euo pipefail

BASE=/mnt/HC_Volume_104649189/websys-platform
cd "$BASE"

git sparse-checkout init --no-cone
cat > .git/info/sparse-checkout <<SPARSE
backend/
frontend/
docker-compose.platform.yml
.env.platform.example
.gitignore
README.md
SPARSE

git fetch origin master
git checkout master
git pull --ff-only origin master

if [ ! -f .env ]; then
  cp .env.platform.example .env
fi

mkdir -p data/mysql

docker compose -f docker-compose.platform.yml up -d mysql
docker compose -f docker-compose.platform.yml run --rm backend sh -lc "npx prisma db push"
docker compose -f docker-compose.platform.yml run --rm backend sh -lc "npm run db:seed"
docker compose -f docker-compose.platform.yml up -d --build backend frontend

docker compose -f docker-compose.platform.yml ps
