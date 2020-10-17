/*

  Using the farmAnimals array
    1. Log all of the strings in the array using a loop
    2. Log the last item in the array without looping
    3. Log only the animals that begin with the letter "C"
    4. Log only the animals that do not have an "e" in the string
    5. Log all of the string to uppercase using a loop
    6. Log all of the animals that end in the letter "n"

    7. Add "pig" to the farm animals array
    8. Log all of the strings that have an "H" and an "e"
    9. Log all of the string that start with a "C" or an "R"
    10. Log any string that contain consecutive vowels
    11. Log all of the strings that are 3 characters in length
    12. Log all of the string that are more than 3 characters in length
*/

var farmAnimals = ["Cow", "Sheep", "Chicken", "Rooster", "Horse", "Hen"];

//1
for(var i = 0; i < farmAnimals.length; i++){
  console.log(farmAnimals[i])
}

//2
console.log(farmAnimals[5])
console.log(farmAnimals[farmAnimals.length-1]);

//3
for(var i = 0; i < farmAnimals.length; i++){
  //farmAnimals[i].charAt(0) == "C"
  if(farmAnimals[i].indexOf("C") == 0){
    console.log(farmAnimals[i])
  }
}

//4
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].indexOf("e") < 0){
    console.log(farmAnimals[i])
  }
}

//5
for(var i = 0; i < farmAnimals.length; i++){
  console.log(farmAnimals[i].toUpperCase())
}

//6
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].charAt(farmAnimals[i].length - 1) === "n"){
    console.log(farmAnimals[i])
  }
}

//7
farmAnimals.push("Pig");

//8
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].indexOf("H") > -1 && farmAnimals[i].indexOf("e") > -1){
    console.log(farmAnimals[i])
  }
}

//9
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].indexOf("C") == 0 || farmAnimals[i].indexOf("R") == 0){
    console.log(farmAnimals[i])
  }
}

//10
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].indexOf("aa") > -1 || farmAnimals[i].indexOf("ee") > -1 || farmAnimals[i].indexOf("ii") > -1 || farmAnimals[i].indexOf("oo") > -1 || farmAnimals[i].indexOf("uu") > -1){
    console.log(farmAnimals[i])
  }
}

//11
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].length == 3){
    console.log(farmAnimals[i])
  }
}

//12
for(var i = 0; i < farmAnimals.length; i++){
  if(farmAnimals[i].length > 3){
    console.log(farmAnimals[i])
  }
}
