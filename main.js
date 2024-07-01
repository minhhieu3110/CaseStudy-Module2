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
    var textButtonPro = document.querySelectorAll(".tab-item-phone button");
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
//Featured Product Phone



document.addEventListener("DOMContentLoaded", function () {
    var textButtonProTV = document.querySelectorAll(".tab-item-tv-av button");
    var containerTV = document.querySelector(".tv-loa-product-featured")

    textButtonProTV.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetProTV = this.getAttribute("data-target");
            var targetBgTV = this.getAttribute("data-bg");
            var targetProElementTV = document.getElementById(targetProTV);

            var itemProsTV = document.querySelectorAll(".item-tv-av");
            itemProsTV.forEach(function (item) {
                item.style.visibility = "hidden";
                item.style.transform = 'translateX(100%)'
                // containerTV.style.backgroundImage = `url("${targetBgTV}")`

            });
            if (targetProElementTV) {
                targetProElementTV.style.visibility = "visible";
                targetProElementTV.style.transform = 'translateX(0%)'
                containerTV.style.backgroundImage = `url("${targetBgTV}")`
            }
        })
    })
    if (textButtonProTV.length > 0) {
        var firstButton = textButtonProTV[0];
        var firstTargetProTV = firstButton.getAttribute("data-target");
        var firstTargetBgTV = firstButton.getAttribute("data-bg");
        var firstTargetProElementTV = document.getElementById(firstTargetProTV);

        if (firstTargetProElementTV) {
            firstTargetProElementTV.style.visibility = "visible";
            firstTargetProElementTV.style.transform = 'translateX(0%)';
            containerTV.style.backgroundImage = `url("${firstTargetBgTV}")`;
        }
    }
})

//Appliances



document.addEventListener("DOMContentLoaded", function () {
    var textButtonProAppliances = document.querySelectorAll(".tab-item-appliances button");
    var containerAppliances = document.querySelector(".appliances-product-featured")
    
    textButtonProAppliances.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetProAppliances = this.getAttribute("data-target");
            var targetBgAppliances = this.getAttribute("data-bg");
            var targetProElementAppliances = document.getElementById(targetProAppliances);
            
            var itemProsAppliances = document.querySelectorAll(".item-appliances");
            itemProsAppliances.forEach(function (item) {
                item.style.visibility = "hidden";
                item.style.transform = 'translateX(100%)'
            });
            if (targetProElementAppliances) {
                targetProElementAppliances.style.visibility = "visible";
                targetProElementAppliances.style.transform = 'translateX(0%)'
                containerAppliances.style.backgroundImage = `url("${targetBgAppliances}")`;
            }
        })
    })
    if (textButtonProAppliances.length > 0) {
        var firstButtonAppliances = textButtonProAppliances[0];
        var firstTargetProAppliances = firstButtonAppliances.getAttribute("data-target");
        var firstTargetBgAppliances = firstButtonAppliances.getAttribute("data-bg");
        var firstTargetProElementAppliances = document.getElementById(firstTargetProAppliances);
        
        if (firstTargetProElementAppliances) {
            firstTargetProElementAppliances.style.visibility = "visible";
            firstTargetProElementAppliances.style.transform = 'translateX(0%)';
            containerAppliances.style.backgroundImage = `url("${firstTargetBgAppliances}")`;
        }
    }
});