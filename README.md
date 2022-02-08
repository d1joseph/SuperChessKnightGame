# Chess Knight Game

![Chess Knight Game](docs\SuperChessKnightGame.svg)

# About
Chess Knight Game is a *knight* tutorial for learning how to move the knight piece from the game of [Chess](https://en.wikipedia.org/wiki/Chess). The tutorial begins by spawning a **single knight piece** and **a beacon** at random positions on the board.

The player then needs to move the knight to the beacon's position, using *valid knight moves*.

### Learning The Moves Of A Knight
A knight moves to any of the closest squares that are not on the same rank, file, or diagonal. (Thus the move forms an "L"-shape: two squares vertically and one square horizontally, or two squares horizontally and one square vertically.) The knight is the only piece that can leap over other pieces.

![moves of a knight](docs\moves-of-a-knightJPG.JPG)

The objective of the tutorial is to let players play the knight's moveset until they reach the beacon.

### Help

If the player gets stuck they can press a **Help button**, which will move the knight toward the beacon. Players can get help at anytime by pressing the Help button.

![Help Button](docs\help-button.JPG) 

## How It Works

1. Pressing the **Begin button** begins the tutorial.

2. A Knight and Beacon will spawn at
random positions on the board.

3. The player can click anywhere on the board to move the knight.

4. Only **valid moves** will move the knight.

5. Pressing the **Help button** will automatically move the knight **once** toward the beacon. Players can press Help as many times as they need.

6. The tutorial ends when the knight reaches the beacon.

7. Pressing the **Reset button** restarts the tutorial.


## Scope
In thinking about the scope of this project, I boil it down to the following items:

* An interactive chessboard where the player can click a square to move the knight on.

* [AN](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)) or Algrabraic notation, a chess notation for describing moves and positions on the board. Using AN we can describe current context like the positions of the knight, N at D4 and Beacon, B at F2, so that we can describe our current context as ND4,BF2. **Note:** *B = Bishop* in AN but we're letting it be **B = Beacon** for this case.

* A beacon element representing the goal position relative to the knight

* An interactive knight piece.

* We need to spawn the knight and beacon at random positions on the board such that their positions do not overlap nor are <2 moves of overlapping. This just makes it a bit more interesting. 

* We need to be able to restart the tutorial which spawns the knight and beacon at new locations.

* Logic for the knight moveset so that the knight will only move on valid moves.

* A method to send the current context i.e. ND4,BF2, to our backend to process and respond with a move for the knight.

* A handler to update the board with the knight at its new position using the response from our backend.

* An event signalling the end of the tutorial when the objective is complete, i.e the knight's position == the beacon's position in the current context.

**Frontend**

For frontend I'm using the latest **React** and some *vanilla JS* for the chess elements and logic, GET methods and async function to process the responses from our backend. We don't need an external chess engine library since we're not playing a full game of chess with an opponent, and all the pieces of black and white.

**Backend**

For the backend I'm using **Ruby on Rails 7** to build the server side API. The API is an implementation of a [BFS]() or *Breadth-first search* algorithm written in Ruby.

Our frontend will call our API listening at a specified port with our React client whitelisted in our corbs.rb file passing the current board context in our request, which is our **source** and **destination** inputs for BFS. The server then responds with the best knight move given the current context.

## Specs


## Building The Project

## Installing ChessKnightGame


## Running ChessKnightGame


## Bugs


## Contributing


## Credits, Attributes, Version

