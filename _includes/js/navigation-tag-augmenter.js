document.addEventListener('DOMContentLoaded', updateTagSelection);
window.addEventListener('hashchange', updateTagSelection);

function updateTagSelection() {
  const tag = window.location.hash.replace(/^#/, '');
  const navigationElement = document.querySelector('.navigation');
  if(tag === '') {
    navigationElement.classList.remove('navigation--filtered');
  } else {
    navigationElement.classList.add('navigation--filtered');
    Array.from(document.querySelectorAll('.tag-list__tag')).forEach(tagElement => {
      if(tagElement.textContent.trim() === tag) {
        tagElement.classList.add('tag-list__tag--active');
      } else {
        tagElement.classList.remove('tag-list__tag--active');
      }
    });
    Array.from(document.querySelectorAll('[data-tags]')).forEach(li => {
      const tags = (li.dataset.tags || '').split(' ');
      if(tags.indexOf(tag) >= 0) {
        li.classList.add('navigation__collection--highlighted');
      } else {
        li.classList.remove('navigation__collection--highlighted');
      }
    });
  }
}
