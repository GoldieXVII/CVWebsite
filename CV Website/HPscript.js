document.addEventListener("DOMContentLoaded", function()
{
  const items = document.querySelectorAll("#typewriter li");
  items.forEach((item, i) =>
  {
    const text = item.innerHTML;
    item.innerHTML = "";
    let index = 0;
  
     function typeWriter()
     {
      if (index < text.length)
        {
          if (text.charAt(index) === "<")
          {
            const endIndex = text.indexOf(">", index);
            item.innerHTML += text.substring(index, endIndex + 1);
            index = endIndex + 1;
          } else
          {
            item.innerHTML += text.charAt(index);
            index++;
          }
          setTimeout(typeWriter, 12); //Change time
        }
      }
      setTimeout(typeWriter, i * 250); // Delay each item by 1 second (1000 milliseconds)
  });
});

window.onload = function()
{
  const element = document.querySelector('.fade-in');
  element.style.opacity = 1; // Set opacity to 1 to trigger the fade-in animation
};
  

document.addEventListener("DOMContentLoaded", function()
{
  const educationListItems = document.querySelectorAll("#educationList li");
  educationListItems.forEach((item, index) =>
  {
    setTimeout(() =>
    {
      item.style.opacity = "1"; // Set opacity to 1 to trigger the fade-in effect
    }, 
    (index + 1) * 1000); // Delay each item by 1 second (1000 milliseconds), starting from index 0
    });
});

document.addEventListener("DOMContentLoaded", function()
{
  const xyzElement = document.getElementById("xyz");
  setTimeout(() =>
  {
    xyzElement.style.opacity = "1"; // Set opacity to 1 to trigger the fade-in effect
  }, 1000); // Delay the fade-in effect by 1 second (1000 milliseconds)
});