$(document).ready(function() {
  // Это для формы
  $('.filter-form__submit').on('click', function(e) {
      e.preventDefault()
      var form = $(this).closest('form');

      form.find('.filter-form__checkbox').each(function() {
          if($(this).prop('checked')) {
              $(this).val = 'da';
          }
      });

      form.submit()
  })


  $('.filter-form .filter-form__select').each(function() {
    !$(this).val() ? $(this).addClass('empty') : $(this).removeClass('empty');

    $(this).on('change', function() {
      !$(this).val() ? $(this).addClass('empty') : $(this).removeClass('empty');
    })
  });


  // Это для переключения табов

  const tabbed = document.querySelector('.tabs');
  if (tabbed) {
    const tablist = tabbed.querySelector('ul');
    const tabs = tablist.querySelectorAll('a');
    const panels = document.querySelectorAll('[id^="section"]');

    // tabbed.classList.remove('no-js');

    const switchTab = function(oldTab, newTab) {
        newTab.focus();
        newTab.removeAttribute('tabindex');
        newTab.setAttribute('aria-selected', 'true');
        oldTab.removeAttribute('aria-selected');
        oldTab.setAttribute('tabindex', '-1');
        var index = Array.prototype.indexOf.call(tabs, newTab);
        var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
        panels[oldIndex].hidden = true;
        panels[index].hidden = false;
    };

    tablist.setAttribute('role', 'tablist');

    Array.prototype.forEach.call(tabs, function(tab, i) {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('id', 'tab' + (i + 1));
        tab.setAttribute('tabindex', '-1');
        tab.parentNode.setAttribute('role', 'presentation');

        tab.addEventListener('click', function(e) {
        e.preventDefault();
        var currentTab = tablist.querySelector('[aria-selected]');
        if (e.currentTarget !== currentTab) {
            switchTab(currentTab, e.currentTarget);
        }
        });

        tab.addEventListener('keydown', function(e) {
        var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
        var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
        if (dir !== null) {
            e.preventDefault();
            dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
        }
        });
    });

    Array.prototype.forEach.call(panels, function(panel, i) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', '-1');
        var id = panel.getAttribute('id');
        panel.setAttribute('aria-labelledby', tabs[i].id);
        panel.hidden = true;
    });

    tabs[0].removeAttribute('tabindex');
    tabs[0].setAttribute('aria-selected', 'true');
    panels[0].hidden = false;
  }
});
