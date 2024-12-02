import { findCategory, generateResponse, listAllOptions } from './response.js';

const chatbotSteps = [
  {
    id: "welcome",
    message: "Welcome to our e-commerce chatbot! 😊 How can I assist you today?",
    trigger: "show-options",
  },
  {
    id: "show-options",
    message: "Here’s what I can help you with:",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "order_status", label: "Check Order Status", trigger: "order-status" },
      { value: "refund", label: "Refund or Return", trigger: "refund" },
      { value: "product_search", label: "Search for a Product", trigger: "product-search" },
      { value: "customer_support", label: "Talk to Support", trigger: "customer-support" },
    ],
  },
  {
    id: "order-status",
    message: "Please provide your order ID to check the status.",
    user: true,
    validator: (value) => {
      if (!value.trim()) {
        return "Order ID cannot be empty!";
      }
      if (!/^\d+$/.test(value.trim())) {
        return "Order ID should contain only numbers.";
      }
      return true;
    },
    trigger: "order-status-response",
  },
  {
    id: "order-status-response",
    message: ({ previousValue }) => {
      const orderStatus = findCategory("order_status", previousValue.trim());
      return `Your order status: ${orderStatus}. Is there anything else I can assist with?`;
    },
    trigger: "show-options",
  },
  {
    id: "refund",
    message:
      "Sure, I can help you with refunds or returns. Can you describe the issue or provide your order ID?",
    user: true,
    trigger: "refund-response",
  },
  {
    id: "refund-response",
    message: ({ previousValue }) => {
      const refundResponse = generateResponse("refund", previousValue.trim());
      return refundResponse;
    },
    trigger: "show-options",
  },
  {
    id: "product-search",
    message: "What product are you looking for? Type in the product name or category.",
    user: true,
    trigger: "product-search-response",
  },
  {
    id: "product-search-response",
    message: ({ previousValue }) => {
      const searchResults = generateResponse("product_search", previousValue.trim());
      return `Here’s what I found for "${previousValue.trim()}":\n\n${searchResults}`;
    },
    trigger: "show-options",
  },
  {
    id: "customer-support",
    message:
      "Connecting you to customer support. Please wait... In the meantime, you can describe your issue here:",
    user: true,
    trigger: "support-response",
  },
  {
    id: "support-response",
    message: "Thank you for providing the details. A customer support agent will reach out to you shortly!",
    trigger: "show-options",
  },
  {
    id: "fallback",
    message:
      "I'm not sure I understand. Here’s what I can help you with. Choose an option below:",
    trigger: "options",
  },
];

export default chatbotSteps;
