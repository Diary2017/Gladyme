//make your own update photo

const select_files = document.querySelector("#select_files");
const file = document.querySelector("#file");
const img_area = document.querySelector(".img_area")
select_files.addEventListener("click", function(){
    file.click();
});

file.addEventListener("change", function(){

    let reader = new FileReader();
    reader.readAsDataURL(this.files[0]);

    reader.addEventListener("load", function(){
      // console.log(reader.result);
      let img_block = document.querySelector(".img_block");
      let img_str = '<img src="' + reader.result + '" class="small_width">';
      img_block.innerHTML = img_str;
    });


  });


  //submit 
  
  const submit_sl = document.querySelector(".buy");
  submit_sl.addEventListener("click", function(e){
    let con_sl = "Please check the details before you order.";
    if(confirm(con_sl) == true){
      e.preventDefault();
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
            swal("Well done!", "We will contact you for the details within three working days.", "success");
            break;
        }
      });
    }
    return;
  })

 



  //swiper
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    }
  });

 