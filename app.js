const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const moveText = document.querySelector('.move-text');
const sensitivity = 0.2; // Adjust this value to control sensitivity
const maxX = 500; // Maximum allowed X coordinate for the text
const maxY = 300; // Maximum allowed Y coordinate for the text

// Start move text
document.addEventListener('mousemove', (e) => {
  // Get the cursor's position
  const xPos = (e.clientX - window.innerWidth / 2) * sensitivity;
  const yPos = (e.clientY - window.innerHeight / 2) * sensitivity;

  // Update the text's position based on cursor's position
  // Limit the text's position within the maximum boundaries
  moveText.style.left = `${Math.max(maxX, Math.min(maxX, xPos))}px`;
  moveText.style.top = `${Math.max(-maxY, Math.min(maxY, yPos))}px`;
});

// End move text 

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})