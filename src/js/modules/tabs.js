const tabs = (headerSelector, tabSelector, contentSelector, activClass, display = 'block') => {
  
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });

    tab.forEach(element => {
      element.classList.remove(activClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activClass);
  }

  hideTabContent();
  showTabContent();
  header.addEventListener('click', (e) => {
    const target = e.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

};

export default tabs;