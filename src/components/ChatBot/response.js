export function findCategory(input) {
    if (input.toLowerCase().includes("hello")) {
      return "Greeting";
    } else if (input.toLowerCase().includes("bye")) {
      return "Farewell";
    } else {
      return null; // Fallback case if no category matches
    }
  }
  
  export function generateResponse(category) {
    switch (category) {
      case "Greeting":
        return "Hi there! How can I help you today?";
      case "Farewell":
        return "Goodbye! Have a great day!";
      default:
        return "I'm here to assist you with anything you need!";
    }
  }
  