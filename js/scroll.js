// Get all the scrollable sections
const sections = document.querySelectorAll('.scrollable-section');

// Initialize the current section index
let currentSectionIndex = 0;

// Function to handle scroll events
function handleScroll(event) {
  // Check if scrolling down
  if (event.deltaY > 0) {
    // Scroll to the next section if available
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Scroll to the previous section if available
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Attach the scroll event listener to the document
document.addEventListener('wheel', handleScroll);