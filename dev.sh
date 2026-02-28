#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20 --silent
cd /Users/gessese/gessese-v2
exec /Users/gessese/.nvm/versions/node/v20.20.0/bin/node node_modules/next/dist/bin/next dev --webpack
