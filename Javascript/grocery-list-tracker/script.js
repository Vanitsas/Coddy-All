// Liste
let groceryList = [];

// Ekleme
function addItem(item) {
  groceryList.push(item);
  console.log(`${item} added to the grocery list.`);
}

// Silme
function removeItem(item) {
  let index = groceryList.indexOf(item);

  if (index !== -1) {
    groceryList.splice(index, 1);
    console.log(`${item} removed from the grocery list.`);
  } else {
    console.log(`${item} is not in the grocery list.`);
  }
}

// Listeyi görüntüleme
function viewList() {
  if (groceryList.length === 0) {
    console.log("The grocery list is empty.");
    return;
  }

  console.log("Grocery List:");
  groceryList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

// Test
viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");