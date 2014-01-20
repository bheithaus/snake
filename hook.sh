#!/bin/bash

# First, get the zip file
cd ~/Code/snake/latest && wget -O snakemaster.zip -q https://github.com/bheithaus/snake/archive/master.zip

# Second, unzip it, if the zip file exists
if [ -f ~/Code/snake/latest/snakemaster.zip ]; then
    # Unzip the zip file
    unzip -q ~/Code/snake/latest/snakemaster.zip

    # Delete zip file
    rm ~/Code/snake/latest/snakemaster.zip

    # Rename project directory to desired name
    mv Snake-master snakeserver.com

    # Delete current directory
    rm -rf ~/app/snakeserver.com

    # Replace with new files
    mv snakeserver.com ~/app/snakeserver.com

    killall node

    cd ~/app/snakeserver.com && npm install

    node app
    # Perhaps call any other scripts you need to rebuild assets here
    # or set owner/permissions
    # or confirm that the old site was replaced correctly
fi