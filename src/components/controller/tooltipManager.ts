export class TooltipManager {

  listenGameboard(event: Event) {
    const target = event.target as HTMLElement;
    const vinylEditor = document.querySelectorAll('[data-vinyl]');
    const tapeEditor = document.querySelectorAll('[data-tape]');

    if (target.hasAttribute('data-vinyl-table')) {
      target.classList.add('enhance');
      target.classList.add('visible');

      vinylEditor.forEach((item) => {
        if (item.getAttribute('data-vinyl') === target.getAttribute('data-vinyl-table')) {
          item.classList.add('pale');
        }
      });

      tapeEditor.forEach((item) => {
        if (item.getAttribute('data-tape') === target.getAttribute('data-vinyl-table')) {
          item.classList.add('pale');
        }
      });

      target.addEventListener('mouseout', () => {
        target.classList.remove('enhance');
        target.classList.remove('visible');
        vinylEditor.forEach((item) => {
          item.classList.remove('pale');
        });
        tapeEditor.forEach((item) => {
          item.classList.remove('pale');
        });
      });
    } else if (target.hasAttribute('data-tape-table')) {
      target.classList.add('enhance-tape');
      target.classList.add('visible-tape');

      tapeEditor.forEach((item) => {
        if (item.getAttribute('data-tape') === target.getAttribute('data-tape-table')) {
          item.classList.add('pale');
        }
      });

      target.addEventListener('mouseout', () => {
        target.classList.remove('enhance-tape');
        target.classList.remove('visible-tape');
        tapeEditor.forEach((item) => {
          item.classList.remove('pale');
        });
      });
    }
  }

  listenGameLayer(event: Event) {
    const target = event.target as HTMLElement;
    const vinylEditor = document.querySelectorAll('[data-vinyl]');
    const vinylTable = document.querySelectorAll('[data-vinyl-table]');
    const tapeTable = document.querySelectorAll('[data-tape-table]');
    const tapeEditor = document.querySelectorAll('[data-tape]');

    if (target.hasAttribute('data-vinyl')) {
      vinylEditor.forEach((item) => {
        if (item.getAttribute('data-vinyl') === target.getAttribute('data-vinyl')) {
          item.classList.add('pale');
        }
      });

      tapeEditor.forEach((item) => {
        if (item.getAttribute('data-tape') === target.getAttribute('data-vinyl')) {
          item.classList.add('pale');
        }
      });

      vinylTable.forEach((item) => {
        if (item.getAttribute('data-vinyl-table') === target.getAttribute('data-vinyl')) {
          item.classList.add('enhance');
          item.classList.add('visible');
        }
      });

      target.addEventListener('mouseout', () => {
        vinylEditor.forEach((item) => {
          item.classList.remove('pale');
        });
        vinylTable.forEach((item) => {
          item.classList.remove('enhance');
          item.classList.remove('visible');
        });
        tapeEditor.forEach((item) => {
          if (item.getAttribute('data-tape') === target.getAttribute('data-vinyl')) {
            item.classList.remove('pale');
          }
        });
      });
    } else if (target.hasAttribute('data-tape')) {
      target.classList.add('pale');

      tapeTable.forEach((item) => {
        if (item.getAttribute('data-tape-table') === target.getAttribute('data-tape')) {
          item.classList.add('enhance-tape');
          item.classList.add('visible-tape');
        }
      });

      target.addEventListener('mouseout', () => {
        target.classList.remove('pale');
        tapeTable.forEach((item) => {
          item.classList.remove('enhance-tape');
          item.classList.remove('visible-tape');
        });
      });
    }
  }
}