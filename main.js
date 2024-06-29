document.addEventListener("DOMContentLoaded", function () {
    var textButton = document.querySelectorAll(".item-menu-pro button");
    textButton.forEach(function (button) {
        button.addEventListener("click", function () {
            var target = this.getAttribute("data-target");
            var targetElement = document.getElementById(target)
            
            var items = document.querySelectorAll(".item-pro-outstanding")
            items.forEach(function (item) {
                item.style.visibility = "hidden";
                item.style.transform = 'translateX(100%)'
            });
            if (targetElement) {
                targetElement.style.visibility = "visible";
                targetElement.style.transform = 'translateX(0%)'
            }
        })
    })
})
// Outstanding Product

document.addEventListener("DOMContentLoaded", function () {
    var textButtonPro = document.querySelectorAll(".tab-item button");
    textButtonPro.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetPro = this.getAttribute("data-target");
            var targetProElement = document.getElementById(targetPro);
            
            var itemPros = document.querySelectorAll(".item-phone");
            itemPros.forEach(function (item) {
                item.style.visibility = "hidden";
                item.style.transform = 'translateX(100%)'
            });
            if (targetProElement) {
                targetProElement.style.visibility = "visible";
                targetProElement.style.transform = 'translateX(0%)'
            }
            
        })
    })
})
//Featured Product