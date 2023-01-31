import checkNumInputs from "./checkNumInputs";
const forms = (state) => {
  const  form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');


  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо Скоро с вами свяжимся ",
    failure: "Что-то пошло не так..."
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e)=> {
      e.preventDefault();
      let  statusMessage = document.createElement('div');
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);
    
      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
          
        }
      }

      postData('assets/server.php', formData)
      .then(response => {
        console.log(response); //--------------------------------- Общий ответ
        statusMessage.textContent = message.success;
        binModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', true);
      }).catch(() => statusMessage.textContent = message.failure)
      .finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 3500);
      });
      
    
    });
  });
};

export default forms;