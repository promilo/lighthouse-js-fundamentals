var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var indent = 0;
while (indent < ingredients.length) {

  console.log(ingredients[indent]);
  indent++;
  }
// Write a for loop that prints out the contents of ingredients:
for (var indent = 0; indent < ingredients.length; indent++) {
  console.log(ingredients[indent]);
  }

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var indent = ingredients.length - 1; indent >= 0; indent--) {
  console.log(ingredients[indent]);
  }