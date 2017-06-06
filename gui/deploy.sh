#!/bin/bash
electron build
cp builds/website-now.app ../site
cp builds/website-now.exe ../site
cd ../site
npm run deploy
