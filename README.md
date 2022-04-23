# Image-processing-api-project
## Start
The repositry is an Api project for resizing images.

## Images Folder in my project contains: 
1) icelandwaterfall
2) palmtunnel
3) encenadaport
4) fjord
5) santamonica
## some Shortcuts
200: means image found
## steps that I follow in imgprocess file
1) giving width and hight => return resized image with new width and height
2) undefined width and undefined => return orignal image
3) giving only width => return the message"please enter the new height"
4) giving only height => return the message"please enter the new width"
5) giving invalid width or height => return the message"Enter valid values for width and height,please."
## Prerequisites Technologies

Your must install the following in order to use the project:
-[Typescript](https://www.npmjs.com/package/typescript) (install it globally)
- [Node & NPM](https://nodejs.org/en/download/)
- [Jasmine](https://www.npmjs.com/package/jasmine)

## Run the program in development mode

  `npm run start`

-and then head to your browser at `localhost:4000` and it should be working.

## Run the program in production mode

  `npm run build`
  
  `node dist/index.js`
  
  #### formating code 

using eslint and prettier
    npm run lint
    npm run prettier

## Test the app

    npm run test
 
## Examples

1)`localhost:4000/ss/esraa?filename=encenadaport&width=820&height=700`

-The outputof example : Return the resized image with the new width(820) and new height (700). 

2)`Localhost:4000/ss/esraa?filename=palmtunnel&width=200`

-The outputof example : Return the message "please enter the new height"

3)`Localhost:4000/ss/esraa?filename=fjord&height=300`

-The outputof example : Return the message "please enter the new width"

4)`Localhost:4000/ss/esraa?filename=ghshkja&width=400&height=250`

-The outputof example : Return the message "Image does not exist"

5)`Localhost:4000/ss/esraa?filename=santamonica&width=100&height=rw`

-The outputof example : Return the message "Enter valid values for width and height,please."
