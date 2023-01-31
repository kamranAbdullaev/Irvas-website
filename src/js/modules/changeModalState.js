import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems(event, element, prop) {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = index;
            console.log('span');
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[prop] = "Холодное": state[prop] = 'Теплое';
              element.forEach((box, i) => {
                box.checked = false;
                if (index === i) {
                  box.checked = true;
                }
              });
            }else{
              state[prop] = item.value;
            }
            break;
          case 'SELECT': 
            state[prop] = item.value;
          break;
        }
        
        console.log(state);
      });

    }); 
    
  }

  bindActionToElems('click', windowForm, 'window-Style');
  bindActionToElems('input', windowHeight, 'window-Height');
  bindActionToElems('input', windowWidth, 'window-Width');
  bindActionToElems('change', windowType, 'window-Type');
  bindActionToElems('change', windowProfile, 'window-Profile');




};
export default changeModalState;