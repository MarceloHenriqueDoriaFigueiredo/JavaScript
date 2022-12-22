let select = document.querySelector("select[name='estado']");
select.addEventListener('change', function(event){
    console.log(event.target.value);
    alert('mudou');
});