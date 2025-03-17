# Change these values to the ones used to create the App Service.
# use: ./deploy.sh
# documentation: https://learn.microsoft.com/en-us/azure/app-service/quickstart-python?tabs=flask%2Cmac-linux%2Cazure-portal%2Czip-deploy%2Cdeploy-instructions-azportal%2Cterminal-bash%2Cdeploy-instructions-zip-azcli
RESOURCE_GROUP_NAME='sunshield_group'
APP_SERVICE_NAME='sunshield'
ZIP_PATH='/Users/an/Documents/Monash/FIT5120/MockProj/SUNSHIELD/backend/sun-shield.zip'

az webapp deploy --name $APP_SERVICE_NAME --resource-group $RESOURCE_GROUP_NAME --src-path $ZIP_PATH