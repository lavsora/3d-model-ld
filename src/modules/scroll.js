const scroll = () => {
    const scrollBtnStart = document.querySelector('a');
    const menuItems = document.querySelectorAll('ul>li>a');

    const linksArray = [...menuItems, scrollBtnStart];

    seamless.polyfill();

    linksArray.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
      
            const id = item.getAttribute("href").substring(1);
            const section = document.getElementById(id);
      
            if (section) {
              seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "start",
              });
            }
          });
    })
}

export default scroll;