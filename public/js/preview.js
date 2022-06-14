document.getElementById("file").onchange = function(e) {
    let reader = new FileReader();
  
    reader.onload = function() {
      let preview = document.getElementById('preview'),
        image = document.createElement('img');
        p= document.createElement("div");
        image.src = reader.result;
        p.innerHTML="Vista Previa";
      preview.innerHTML='';
      preview.append(image);
      preview.append(p);
      preview.style.boxShadow="0px 0px 10px black";
      p.style.margin="15px auto auto auto";
    };
  
    reader.readAsDataURL(e.target.files[0]);
  }