const inputs = document.querySelectorAll('.code');

    inputs[0].focus();

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (e.target.value === '' && index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
          }
        } else if (e.key >= '0' && e.key <= '9') {
          // allow number
        } else if (e.key !== 'Tab') {
          e.preventDefault();
        }
      });
    });
  