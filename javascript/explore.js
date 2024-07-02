document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.content-explore .content [class^="explore-0"]').forEach(item => {
        item.addEventListener('mouseover', function () {
            const className = this.className;
            document.querySelectorAll('.image-content-explore [class^="explore-0"]').forEach(img => {
                img.style.visibility = 'hidden';
            });
            document.querySelector(`.image-content-explore .${className}`).style.visibility = 'visible';
            
            document.querySelectorAll('.content-explore .content [class^="explore-0"]').forEach(desc => {
                desc.querySelectorAll('.straight, .title-explore, hr').forEach(el => {
                    el.style.visibility = 'hidden';
                    el.style.transform = "translateY(0)"
                });
            });
            this.querySelectorAll('.straight, .title-explore, hr').forEach(el => {
                el.style.visibility = 'visible';
                el.style.transform = "translateY(-20px)"
            });
        });
    });
});
