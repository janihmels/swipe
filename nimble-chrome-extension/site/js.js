$(document).ready(() => {
  /*chrome.storage.local.get(["response"], (result) => {
    
    const price = result.response.salePrice;
    const id = result.response.itemId;
    const uri = `https://www.walmart.com/ip/${id}`;

    $("#item-price").text(`$${price}`);
    $("#item-uri").attr("href", uri);
  });*/
  
  const price = 39.99;
  const uri = `www.hackernews.com`;

  $("#item-price").text(`$${price}`);
  $("#item-uri").attr("href", uri);

});
