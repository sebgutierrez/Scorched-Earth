# Scorched Earth / Weather Wizard
A deep learning web app for predicting future temperatures based off of ERA5-Land data

## Running the website
Move to the client directory

    cd client
    
Install required packages
  
    npm install
  
Run server

    npm run dev
    
Open on browser by CTRL+Clicking the localhost:port link.

## Running the backend
On another terminal, move to the server directory

    cd server
    
Run the server.py script

    python app.py
    
Unlike with vite, you must restart the server for any changes to server.py to be reflected. Simply repeat the last step.

## Status
The site is currently static while we get the AccuWeather API and other models working.

## Downloading data from CDS
We used the CDS API to collect our data [https://cds.climate.copernicus.eu/api-how-to]. Repo doesn't come with the dataset, thus you will have to download your own data if you would like to train your data using our models. This is not needed to run the app.
