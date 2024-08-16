// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: [
    { name: "Garlic Bread", price: 10 },
    { name: "Bruschetta", price: 15 },
  ],
  MainCourses: [
    { name: "Margherita Pizza", price: 20 },
    { name: "Spaghetti Carbonara", price: 25 },
  ],
  Desserts: [
    { name: "Tiramisu", price: 22 },
    { name: "Cheesecake", price: 18 },
  ],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuContainer = document.getElementById("menu");

  // Loop through each category and its items in the menu object
  for (menuItem in menu) {
    const menuCategoryContainer = document.createElement("div");
    menuCategoryContainer.classList.add("menu-category");

    // add menu container
    const menuCategoryHeading = document.createElement("h3");
    menuCategoryHeading.textContent = menuItem;

    // add heading
    menuCategoryContainer.appendChild(menuCategoryHeading);

    // Create an element to represent a list of items
    const menuItemsContainer = document.createElement("ul");
    // Loop through the items in the category and create list items
    menu[menuItem].map((item) => {
      const menuItem = document.createElement("li");
      menuItem.classList.add("menu-item");

      const menuItemButton = document.createElement("button");
      // Set the text content of the list item element to the item name
      menuItemButton.textContent = item.name;
      menuItemButton.addEventListener("click", () => {
        addToOrder(item);
      });

      menuItem.append(menuItemButton);
      menuItemsContainer.appendChild(menuItem);
    });

    // append menu items to category
    menuCategoryContainer.append(menuItemsContainer);

    // Append the category element to the menu container
    menuContainer.appendChild(menuCategoryContainer);
  }
  // Create an element to represent the category

  // Set the text content of the category element to the category name

  // Append a list of items element to the menu container

  // Create a list item element

  // Attach a click event listener to the list item to add it to the order

  // Append the list item to the list of items
}

// Callback function for adding an item to the order
function addToOrder(item) {
  // Get the order items list and the order total element from the HTML
  const orderList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");
  const orderTotal = document.getElementById("order-total").textContent;

  // Create a list item for the order
  const orderItem = document.createElement("li");
  // Set the text content of the list item to the item name
  orderItem.textContent = item.name;
  // Append the list item to the order items list
  orderList.appendChild(orderItem);

  // Calculate and update the total price
  const totalPrice = Number(orderTotal) + item.price;

  // Update the text content of the order total element with the new total
  orderTotalElement.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
