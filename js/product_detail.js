const submit_pd_sl = document.querySelector(".buy");
submit_pd_sl.addEventListener("click", function(e){
  let con_sl = "Please check the details before you order.";
  if(confirm(con_sl) == true){
    e.preventDefault;
    swal("Do you want to do this? You won't be able to revert this!", {
      buttons: {
        cancel: "Go back",
        confirm: {
          text: "comfirm",
          value: "confirm",
        },
      },
    })
    .then((value) => {
      switch (value) {
        case "confirm":
          swal("Well done!", "Thank you for choice us!", "success");
          break;
      }
    });
  }
  return;
})

