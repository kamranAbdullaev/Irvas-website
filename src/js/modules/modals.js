const modals = () => {
  function binModal(triggerSelector, modalSilector, closeSilector, closeClickOverlay = true) {

    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSilector),
      close = document.querySelector(closeSilector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = CalcScroll();

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(element => {
          element.style.display = 'none';
        });
        modal.style.display = "block";
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;

        // document.body.classList.add("modal-open");
      });
    });

    close.addEventListener('click', (e) => {
      windows.forEach(element => {
        element.style.display = 'none';
      });

      modal.style.display = "none";
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      // document.body.classList.remove("modal-open");
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(element => {
          element.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        // document.body.classList.remove("modal-open");
      }
    });
  }

  function ShowModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }
function CalcScroll() {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
div.style.overflowY = 'scroll';
div.style.visibility = 'hidden';
document.body.appendChild(div);

let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

return scrollWidth;


}
  binModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  binModal(".phone_link", '.popup', '.popup .popup_close');
  binModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  binModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  binModal('.popup_calc_profile_button', '.popup_calc_end','.popup_calc_end_close', true);
  ShowModalByTime('.popup', 12000000);

};

export default modals;
