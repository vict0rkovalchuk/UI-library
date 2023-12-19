import $ from './lib/lib';

$('.wrap').html(
  `<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">
      Dropdown button
    </button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
      <a href="#" class="dropdown-item">Action</a
      ><a href="#" class="dropdown-item">Action #2</a
      ><a href="#" class="dropdown-item">Action #3</a>
    </div>
  </div>`
);

$('.dropdown-toggle').dropdown();

$('#trigger').click(() =>
  $('#trigger').createModal({
    text: {
      title: 'Modal title',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laboriosam exercitationem aliquid nostrum sequi quos ducimus
    fugiat, quis ut, placeat delectus facilis similique eligendi iste
    dolor, cupiditate tempore inventore fugit soluta.`
    },
    btns: [
      ['Close', ['btn-danger', 'mr-10'], true],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Saved');
        }
      ],
      [
        'Another btn',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('Third btn');
        }
      ]
    ]
  })
);
