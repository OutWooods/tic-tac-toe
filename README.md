<h2 align="center"> Title </h2>

 <p align="center">  <a href='#scenario'>Scenario</a> |   <a href='#use'>How to use</a>  |  
 <a href='#screen_shots'>Screen Shots</a> | <a href='#approach'>Approach</a> |  <a href='#extentions'>Extentions</a> |  <a href='#feedback'>Feedback points</a> | <a href='#tech'>Tech</a>

## Scenario  <a name= "scenario"></a>

Version 1
You can input x's and o's into a board, setting specifical places.
It will tell you when it is full, and the game is hence over.
It assumes people will not overwrite a square, and that the players
will work out who has won/lost.

Version 2
All the functionality of above.
But now the game works out if anyone has won or lost. And ends the game
if so.
It still assumes people will not overwrite a square.

Version 3
All the functionaity of above.
But it will stop people overwriting the square.

## How to use  <a name= "use"> </a>

## Screen shots <a name= "screen_shots"> </a>

## Approach -- no more than 4 points <a name= "approach"> </a>

I broke the speak into three versions (see above). And focused on solving them
the simplest way possible. Trying not to over commit on design structures,
and adding marking points (the versions) to reflect and adapt my design. Identify other paths.

Why did I choose a single array over multiple nested arrays or a matrix?
   A single array seemed simpler to communicate with for an interface.
   Instead of having to know how coordinates are set up you could just link each position
   to a number.
   I felt it was more extendable, as you could just increase the number of places, rather than
   have to awkwardly change the number of arrays and their lengths.

   The disadvantage is potentially working our who wins or loses could get more complex. Especially
   if you extended the design. But I felt that actually, though this possibly is true. A single arrays
   may be more adaptable to change to non-square grids, to varying lengths for wins, as you don't have to change
   the underlying structure, just the way wins are calculated. When you start nesting arrays or rows, you
   make it harder to adapt win lose algorithms. As these algorithms are more dependent on a rigid structure of data. 

#### Targets (Written before starting) - no more than 4 points

  - Focus on good OO design, not on just modelling real life
  - Try out a new testing framework (Mocha)
  - Make sure to not 'over test', focus on testing behaviour rather than state
  - Add multiple points for reflection on my design. Don't commit too early to a design structure.


#### What went well - no more than 3

#### Development points - no more than 3

## Extentions <a name= "extentions"> </a>

## Feedback points <a name= "feedback"> </a>
* These are areas I want to improve, if you see anything particularly relating to these I would be grateful for any feedback.
   Also any feedback on anything else ofcourse! *

## Tech <a name= "tech"> </a>

Mocha
Node
Javascript
