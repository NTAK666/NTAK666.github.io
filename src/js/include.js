function include() {
    var z, i, element, file, httpRqs;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      element = z[i];
      file = element.getAttribute("include");
      if (file) {
        httpRqs = new XMLHttpRequest();
        httpRqs.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            element.removeAttribute("include");
            include();
          }
        }
        httpRqs.open("GET", file, true);
        httpRqs.send();
        return;
      }
    }
  }
  
  include();