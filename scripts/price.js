var r=document.querySelector(".order__filter-slider");noUiSlider.create(r,{range:{min:0,max:1e3},start:[0,900],step:10,connect:!0,format:{to:function(e){return e},from:function(e){return parseInt(e,10)}}});var i=e=>{let t=document.querySelector("#price-from"),o=document.querySelector("#price-to");e=r.noUiSlider.get(!0),t.value=e[0],o.value=e[1]};export{i as onSliderUpdate};
