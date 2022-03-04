# Sample

This sample project is here to demonstract an issue I encoutered for fixed
footers. The issue exists on Chrome for iPads. 

If you use `window.open` to open a new page with a fixed bottom bar, then that
bottom bar will be located off-screen. A tab switch or bring chrome into
background and active it again will fix the display issue.

## Reproduce

First we will need to install and run the app:

1. Clone this repository
2. `npm install`
3. `npm start`


Then visit: `<ip>:3000` on your iPad using Chrome. 

1. Click on the `OPEN IN THIS PAGE` button, you will see it navigates to a page
   with a `position: fixed` bottom bar.
   
2. Click on the `OPEN IN NEW WINDOW` button, you will see it navigates to the
   same page, but the bottom bar is hidden outside the screen.
   
## Video Cast

![Video Demo](./screencast.gif)
