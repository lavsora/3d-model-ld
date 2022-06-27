const menu = () => {
    const mainBlock = document.querySelector('main')
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = document.querySelectorAll('ul>li>a');

    mainBlock.addEventListener('click', (e) => {
        console.log(e.target.closest('.close-btn'))
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu')
        } else if (e.target.classList.contains('close-btn') || !e.target.closest('.active-menu')) {
            e.preventDefault()
            menu.classList.remove('active-menu')
        } else if (e.target.closest('ul>li>a')) {
            menu.classList.remove('active-menu')
        }
    })

    // const handleMenu = () => {
    //     menu.classList.toggle('active-menu')
    // }

    // // menuBtn.addEventListener('click', handleMenu);
    // // closeBtn.addEventListener('click', handleMenu);

    // menuItems.forEach(menuItem => menuItem.addEventListener('click' , handleMenu));
}

export default menu;