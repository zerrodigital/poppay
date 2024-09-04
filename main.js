// Custom Popup Script
// This script adds a popup feature to the site.
// To integrate it, include the following in your Shopify theme:
// <script src="https://raw.githubusercontent.com/zerrodigital/poppay/main/main.js" defer></script>

// Initialize the custom popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find the element with id="MainContent"
    var mainContent = document.querySelector('#MainContent');

    // Create a new div element
    var popPayDiv = document.createElement('div');
    popPayDiv.id = 'popPay';

    // Insert the new div after the #MainContent element
    if (mainContent) {
        mainContent.parentNode.insertBefore(popPayDiv, mainContent.nextSibling);
    }
});