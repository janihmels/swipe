console.log("Moinsen Partner");

$(document).ready(() => {
  console.log("Document Ready", parent);
  setTimeout(() => {
    console.log("Scrolling Now");
    const c = document.getElementById("viewerContainer");
    if (c) {
      let textContent = "";
      $("#viewerContainer").animate({ scrollTop: c.scrollHeight }, 200, () => {
        $("#viewerContainer").animate({ scrollTop: 0 }, 200, () => {
          setTimeout(() => {
            const nodes = $(".textLayer");
            nodes.each((idx, node) => {
              //console.log(idx, node);
              const children = $(node).children();
              children.each((idx2, child) => {
                //console.log(idx2, child, $(child).prop("nodeName"));
                if ($(child).is("SPAN")) {
                  textContent += $(child).text();
                }
                if ($(child).is("BR")) {
                  textContent += "\n";
                }
              });
            });
            console.log("Text Content is", textContent);
          }, 2000);
        });
      });
      /*const height = c.scrollHeight;
        const numberBatches = Math.floor(height / 10);
        for (var ii = 0; ii < numberBatches; ii++) {
          c.scrollTop = ii * 10;
        }*/
    }
  }, 3000);
});
