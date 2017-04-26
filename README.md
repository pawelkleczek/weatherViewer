# Weather Viewer

### FreeCodeCamp challenge
#### by Paweł Kłeczek

Check it out on CodePen:
https://codepen.io/pawelkleczek/full/oZvzGL/

## What is this?

Thwitch TV API was done as a part of a Free Code Camp front-end course.
Basically, it's a web-app, that communicates with twitch.tv through API, and collects
data about certain channels. If the channel is currently active, it will show the title
of the current podcast, the logo will be in color, and you will be able to go to the actual
stream to watch it.

![alt tag](images/online.png)

Otherwise, it will show the channel is offline, and logo will be in grayscale.

![alt tag](images/offline.png)

I've used some Bootstrap, and jQuery. Data from Twitch is collected with getJSON cammand.
