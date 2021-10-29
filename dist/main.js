const modalToggle = document.getElementsByClassName('modal-toggle');
if(modalToggle) {
    const modal = document.getElementsByClassName('modal-overlay');
    Object.keys(modalToggle).forEach(function(index) {
        modalToggle[index].addEventListener('click', function() {
            Object.keys(modal).forEach(function(index) {
                modal[index].classList.toggle('show');
            });
       });
    });
}

function rmeoveLoading() {
    document.querySelector('.loading').remove();
}
