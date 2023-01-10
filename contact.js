const scriptURL = 'https://script.google.com/macros/s/AKfycbx5G8jHNxQSviKb0mTAQ3so5JEQqDPRtmDM8GHztzSUeeqrtTd3Up3V1g52GRf3ufaJ/exec'
      const form = document.forms['pesan-contact-form']
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const alert = document.querySelector('.alert');

    
      form.addEventListener('submit', e => {
        e.preventDefault()
        // ketika tombol disubmit diklik
        // tampilkan tomnbol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            alert.classList.toggle('d-none');
            // reset formnya
            form.reset();
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
      })