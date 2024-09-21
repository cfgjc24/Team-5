# Team-5

## Lodestar Navigation
Team Members : Emily Flores, Carlos Garcia, Lauren Lascano, Xiaomin Liu, Will Pelech, Diya Tomar, Jesse Xie

## Project Statement
For our project, we designed an application for supervisors and staff to streamline their management processes. Users can sign in and will be redirected to their respective pages where supervisors may view staff members on a map and a list of active members. Staff members will be able to check in and notify supervisors for emergencies and meeting extensions along with optional messages to provide details. 

## Run Instructions
Clone the repository with:  
```git@github.com:cfgjc24/Team-5.git```

Change the directory with:  
```cd Team-5/```

Install packages with:  
```cd client```
```npm install```

Enter API keys for the Google Maps API and Cloud Firestore into client/.env and client/config/config.tsx respectively:  
client/.env:  
VITE_MAP_API_KEY = [YOUR_API_KEY_HERE]  

client/config/config.tsx:  
Follow the format in client/config/sampleConfig.tsx

Start the client with:  
```npm test dev```

Start the server in a new console tab with:  
```cd server```  
```npm install```  
```npm test```  

Open the website by going to:
http://localhost:5173/

## Adknowledgements  
Thank you to Lodestar for their services and being apart of this event, and JPMorganChase and all of the workers/volunteers for hosting this hackathon!





