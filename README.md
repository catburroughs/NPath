# NPath
Final Project for University of Aberdeen MA Computing
Making a Capacitive Touch Maze Controlled by a React Website

Back End Requirements
1. Install Python
2. Install Pip
3. Start the terminal
4. In the terminal type in ’pip install requirements.txt’ to install required dependencies.

Front End Requirements
1. Install JavaScript React
Set up react:
npx create-react-app my-app
cd my-app
npm start
2. In the Front End folder the npm shrinkwrap file contains all dependencies needed for the
Front End

Running the NPath program
1. Navigate into the Back End folder of the NPath project and run ’sudo python3 app.py’ in
the terminal
2. Navigate into the Front End folder of the NPath project and run ’npm start’

NPath Program File System

Front End Folder
• Components Folder
This folder contains Background Image, Buttons, Functions, Landing Text, Slider,
Taskbar, Taskbar Link, and Touchpad Map Folders, each containing jsx, css, and test files.
• Pages Folder
This folder contains About NPath Page, Activate Board Page, Assign Touchpad Page,
Landing Page, Set Mode Page, Set Volume Page, and Upload Sounds Page
• App.js - the main runnable file
• Global.css

Back End Folder
• NPath Sounds
• Nature Sounds
• app.py - the main runnable file
• captouch.py - creates the NPath Board object
• playboard.py - runs the board hardware
• testdict.py - a file than runs the entire board for debugging purposes

The Creator Files folder is a separate folder outside of and accessed by both the Front End and
Back End folders.

Troubleshooting

As the NPath project was configured for hardware, some changes will be necessary to ensure the
successful running of the program.

1. In the Back End folder, the user needs to change the absolute path set for the three sound
folders to reflect that of their own set up. The Pygame/Raspberry Pi program needs absolute
paths to be set to ensure the reliable retrieval of sounds used.

2. In the Front End folder, the user needs to change the IP address in the fetch commands. If
they are running both Front and Back Ends on the same computer, both ends can be set to
localhost, with the Front End set to port 3000 and the Back End to port 5000.

3. If the user would like to run the program functionality without the capacitive board hardware, the hardware imports need to be commented out.

4. If the user wants to test the capacitive touch board without the Front End functionality,
the user can run testdict.py with the command ’sudo python3 testdict.py’ in the terminal.
This file will initialise a sound dictionary and play an initial single sound to make sure that
playback is audible, before running the capacitive touch board.


