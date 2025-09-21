// A flooring company wants to build a small Tile Calculator App.The
// app should help customers find out how many rectangular tiles are
// needed to cover a floor.
// -The program must take the length and width of the floor as input.
// -It should also take the length and width of one tile as input. Using
// arithmetic operators, the program should calculate:
// 1. The area of the floor: Af loor = lengthf loor ×widthf loor
// 2. The area of one tile: Atile = lengthtile ×widthtile
// 3. The number of tiles required: N = Afloor
// Atile
// Additionally, display the perimeter of the floor for boundary design
// purposes.Write a JavaScript program to perform these calculations
// using arithmetic operators.
let length_floor = Number(prompt("Enter length of the floor : "));
let width_floor = Number(prompt("Enter width of the floor : "));
let length_tile = Number(prompt("Enter length of the tile :"));
let width_tile = Number(prompt("Enter width of the tile : "));
let area_floor = length_floor*width_floor , area_tile = length_tile*width_tile;
let total_tiles = Math.floor(area_floor/area_tile);
let per_floor = 2*(length_floor+width_floor);
console.log("Area of the floor is : "+ area_floor);
console.log("Area of the tile is : "+ area_tile);
console.log("Number of tiles required is : "+ total_tiles);
console.log("Perimeter of floor is :"+ per_floor);




