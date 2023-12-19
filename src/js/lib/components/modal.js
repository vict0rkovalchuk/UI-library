import $ from '../core';

$.prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');

    $(this[i]).click(e => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(item => {
      $(item).click(() => {
        $(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          setTimeout(() => {
            document.querySelector(target).remove();
          }, 500);
        }
      });
    });

    $(target).click(e => {
      if (e.target.classList.contains('modal')) {
        $(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          setTimeout(() => {
            document.querySelector(target).remove();
          }, 500);
        }
      }
    });
  }
};

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    const buttons = [];
    for (let j = 0; j < btns.length; j++) {
      let [btnText, classNames, close, cb] = btns[j];
      let btn = document.createElement('button');
      btn.classList.add('btn', ...classNames);
      btn.textContent = btnText;
      if (close) {
        btn.setAttribute('data-close', 'true');
      }
      if (cb && typeof cb === 'function') {
        btn.addEventListener('click', cb);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <button class="close" data-close>
          <span>&times;</span>
        </button>
        <div class="modal-header">
          <div class="modal-title">${text.title}</div>
        </div>
        <div class="modal-body">
        ${text.body}
        </div>
        <div class="modal-footer">
          
        </div>
      </div>
    </div>
    `;

    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute('data-target')).fadeIn(500);
  }
};
