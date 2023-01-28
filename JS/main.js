const tabItems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item form DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show Class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabcontentItems.forEach(item => item.classList.remove('show'));
}

// Listen for Tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));