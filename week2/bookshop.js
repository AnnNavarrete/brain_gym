/* Additional warmups

Functions for a Bookshop
You are writing a program for a bookshop to be able to process purchases.


The Bookshop owner has asked you to create a list of the following books with
prices (excluding GST) and the number of copies the bookshop owns:

Harry Potter and the Chamber of Secrets, $29.99, number of copies: 5
Lord of the Rings: The Fellowship of the Ring, $34.99, number of copies: 3
A Song of Ice and Fire, $27.99, number of copies: 8
You would need to create three functions:

A function to calculate the price the customer needs to pay for a book. This function 
would receive the name of the book being purchased and would need to deduct the number 
of copies left in stock by 1.
A function to calculate GST tax (10%) on top of the price of the book. Decide what parameters
 this function needs to calculate the cost of GST.
A function to console log the name of the customer and the title of the book they are buying 
with the cost of the book, and then the total price they will be paying including GST. This function
should receive the book title, the customer's name, and the total price calculated in the previous function.
You would need to call all three functions above, in that specific order.*/

// pseudocode
// use objects to hold all the data; name of book, price and number of copies available

var bookInfo = {
  // prettier-ignore
  ["Harry Potter and the Chamber of Secrets"]: 
  { price: 29.99, 
    copies: 3 },

  ["Lord of the Rings: The Fellowship of the Ring"]: {
    price: 34.99,
    copies: 3
  },
  ["A Song of Ice and Fire"]: {
    price: 27.99,
    copies: 8
  }
};

var getPrice = function(bookTitle) {
  bookInfo[bookTitle].copies -= 1;
  return bookInfo[bookTitle].price;
};
getPrice("Harry Potter and the Chamber of Secrets");

var calculateGst = function(price) {
  return price * 0.1;
};

calculateGst(29.99);

var purchasedInfo = function(customerName, bookTitle) {
  var price = getPrice(bookTitle);
  var gst = calculateGst(price);
  var totalPrice = price + gst;
  return `${customerName} has purchased ${bookTitle} at a cost of ${totalPrice}`;
};
console.log(purchasedInfo("annie", "Harry Potter and the Chamber of Secrets"));
