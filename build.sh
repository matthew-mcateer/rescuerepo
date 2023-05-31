#!/bin/bash
cd backend/
pip install -r requirements.txt
cd ../frontend
npm i 
npm run build
