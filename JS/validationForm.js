const d = document;

const contactFormValidation = ()=> {
  const $form = d.querySelector('.contact-form');
  const $inputs = d.querySelectorAll('.contact-form [required]');
  // console.log($inputs);

  $inputs.forEach(input => {
    const $span = d.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('contact-form-error', 'none');
    input.insertAdjacentElement("afterend", $span);
    // console.log(input);
  });

const validation = (e)=> {
  if (e.target.matches('.contact-form [required]')) {
    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;

      // console.log($input, pattern);
    if (pattern && $input.value !== "") {
      // console.log("el input tiene patron");
      let regex = new RegExp(pattern);
      return !regex.exec($input.value)
      ? d.getElementById($input.name).classList.add("is-active")
      : d.getElementById($input.name).classList.remove("is-active");
    }
    if (!pattern) {
      return $input.value === ""
      ? d.getElementById($input.name).classList.add("is-active")
      : d.getElementById($input.name).classList.remove("is-active");
      // console.log("el input no tiene patron");
    }
  }
}
d.addEventListener('keyup', validation);
// $formSubmit.addEventListener('click', console.log('hello'));
d.addEventListener('submit', (e)=> {
  // e.preventDefault();
  // alert('enviando formulario');

  const $loader = d.querySelector('.contact-form-loader'),
    $response = d.querySelector('.contact-form-response');
// console.log($loader);
    $loader.classList.remove('none');
    
    setTimeout(() => {
      $loader.classList.add('none');
      $response.classList.remove('none');
      $form.reset();
      setTimeout(() => $response.classList.add('none'), 3000);
    }, 3000);
})
}

export default contactFormValidation;