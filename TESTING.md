# Testing 

### Browser compatibility
- Responsiveness on different browsers and screen sizes:

[Google Chrome](https://google.com) all the testing information has been tested on Chrome browser using DevTools.
[Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/) works as inteaded.
[Internet Explorer](https://www.microsoft.com/en-gb/download/internet-explorer.aspx) works as intended.
[Opera](https://www.opera.com/) works as intended.

manuel tested each one to ensure the website was responsive on the different browers listed via testing them all on different resoultions.

### Second Test - Validation of code using W3C Markup Validation Service
- Testing HTML
    - Pasted the url of each individual page for validation. A few minor errors in the code was discovered and corrected.

    ![validator](/assets/wireframes/htmlvalidator.png)
- Testing CSS
    - Pasted the complete CSS code in the "jigsaw Validate by direct input"-section. No problems found

    ![validator](/assets/wireframes/cssjigsawvalidator.png)

- Javascript testing
  - Used[JShint](https://jshint.com/) website and no bugs or errors found. 

### testing user stories 

- As a user, I want a simplistic and easy to navigate website.
 - the user can see that it is only a two page website with very minimal detail and not overwhelming with just key information showing.

- As a user, I want to be able to use it on desktop, tablet and mobile devices.
 - the user can use any device to play the game without the core features or style changing

- As a user, I want to have a counter to keep track of how many moves I make to finish the game.
 - move counter add to the top left of the game to keep track of how many moves the user has made.

- As a user, I want to have a timer to keep track of how long it takes to finish the game.
 - a timer was added to the top center of the game to keep track of how much time has passed since the game has started.

- As a user, I want to have a restart button that resets all the features whenever I want.
 - the user can use the restart button which is found and easily spotted by the top right side of the game.

- As a user, I want to see fun and eye catching images.
 - the user can keep track of the unique and interesting pokemon used for cards which are high quality.

- As a user, I want easy to follow instructions.
 - the user can find the instruction on the first page as it is eye catching and easy to find, the instructions themselves being very easy to understand and follow.

- As a user, I want to improve my memory.
 - the user can improve their memory by playing by challenging them to improve their scores.

- As a user, I want a victory popup message to tell me when I've finished the game, displaying how many moves I made and the time it took for me to finish the game. It should also have a button to play the game again.
 - as the user completes the game a victory pop will appear and show them their stats for that round.

 ## Bugs

 - on lower screen resolutions the modal wasnt working as intended and in order to fix it and changed the display:none for the border on screen resolutions under 280px

### Existing Bugs

 - rarely the grid with flip on its side for a fraction of a second then flip back, im unaware what causes this and am unable to debugg it


