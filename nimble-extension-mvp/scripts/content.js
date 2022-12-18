const sleep = async (msecs) => {
  return new Promise((resolve) => setTimeout(resolve, msecs));
};

const logo = chrome.runtime.getURL("images/logo.png");
const page = chrome.runtime.getURL("build/index.html");
const notify = new Audio(chrome.runtime.getURL("wav/notify.wav"));

const closeSidebar = () => {
  $("#sidebar").animate({
    width: 0,
  }, () => {
    $("#sidebar").remove();
  });
};

const openSidebar = () => {
  $("body").off("click");
  $("#sidebar").animate({
    width: 399,
  });
  setTimeout(() => {
    $("body").click(closeSidebar);
  }, 1500);
  notify.play();
};

const htmlSidebar = `<div id="sidebar"><iframe id = "swoop-iframe" src = "${page}" scrolling="no"/></div>`;

$(document).ready(() => {
  //$("body").click(closeSidebar);
  document.onmouseup = textSelected;
  document.onkeyup = textSelected;
});

const getSelectedText = () => {
  var text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  } else if (
    typeof document.selection != "undefined" &&
    document.selection.type == "Text"
  ) {
    text = document.selection.createRange().text;
  }
  return text;
};

const textSelected = () => {
  var text = getSelectedText();
  if (text.length > 0) {
    const snippet = { text: text, uri: "testuri" };
    console.log("Snippet is", snippet);
    chrome.storage.local.set({ snippet }, () => {
      $("body").prepend(htmlSidebar);
      openSidebar();
    });
  }
};
