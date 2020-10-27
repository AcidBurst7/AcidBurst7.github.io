var searchHotelLink = document.querySelector(".search-hotel-button");
var popupSearchHotel = document.querySelector(".booking-form-block");
var formSubmitButton = document.querySelector(".booking-form");
var formDateArriveInput = document.querySelector("[name=dateArrive]");
var formDateDepartInput = document.querySelector("[name=dateDepart]");
var formAdultsAmountInput = document.querySelector("[name=adultsAmount]");
var formChildrenAmountInput = document.querySelector("[name=childrenAmount]");

window.addEventListener("keydown", function(event) 
    {
        if(event.keyCode === 27) 
        {
            if(!popupSearchHotel.classList.contains("form-close")) 
            {
                popupSearchHotel.classList.add("form-close");
            }
        }
    }
);

searchHotelLink.addEventListener("click", function(event) 
    {
        event.preventDefault();

        if(popupSearchHotel.classList.contains("form-close")) 
        {
            popupSearchHotel.classList.remove("form-close");
            popupSearchHotel.classList.remove("form-error");
            popupSearchHotel.classList.add("form-show");
        }
        else 
        {
            popupSearchHotel.classList.add("form-close");
            popupSearchHotel.classList.remove("form-show");
        }
    }
);

formSubmitButton.addEventListener("submit", function(event) {
    event.preventDefault();

    if(!formDateArriveInput.value || !formDateDepartInput.value || 
    !formAdultsAmountInput.value || !formChildrenAmountInput.value)
    {
        popupSearchHotel.classList.remove("form-error");
        popupSearchHotel.offsetWidth = popupSearchHotel.offsetWidth;
        formDateArriveInput.focus();
        popupSearchHotel.classList.add("form-error");
    } 
    else 
    {
        localStorage.setItem("dateArrive", formDateArriveInput.value);
        localStorage.setItem("dateDepart", formDateDepartInput.value);
        localStorage.setItem("adultsAmount", formAdultsAmountInput.value);
        localStorage.setItem("childrenAmount", formChildrenAmountInput.value);
        popupSearchHotel.classList.remove("form-error");
    }
});