// Set up context menu at install time.

  chrome.runtime.onInstalled.addListener(function() {
var context = "selection";
  var title = "Socail Media Search";
  var id = chrome.contextMenus.create({
           "title": title, "contexts":[context],
                                         "id": "Social Media"}); 
}); 


chrome.runtime.onInstalled.addListener(function() {
 
  var context = "selection";
  var title = "Linkedin";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "parentId": "Social Media" , "id" : "Linkedin" });  

});

chrome.runtime.onInstalled.addListener(function() {
 
  var context = "selection";
  var title = "Facebook ";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "parentId": "Social Media" , "id" : "Facebook" });  

});

chrome.runtime.onInstalled.addListener(function() {
 
  var context = "selection";
  var title = "Twitter ";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "parentId": "Social Media" , "id" : "Twitter" });  

});
chrome.runtime.onInstalled.addListener(function() {
 
  var context = "selection";
  var title = "Medium";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "parentId": "Social Media" , "id" : "Medium" });  

});

chrome.runtime.onInstalled.addListener(function() {
 
  var context = "selection";
  var title = "Quora";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "parentId": "Social Media" , "id" : "Quora" });  

});


chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab)  
{
if( info.menuItemId == 'Linkedin') 
  {
  var sText = info.selectionText;
  var url = "https://www.linkedin.com/search/results/index/?keywords=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
}
else if(info.menuItemId == 'Facebook')
  {
var sText = info.selectionText;
  var url = "https://www.facebook.com/search/top/?q=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
}
else  if (info.menuItemId == 'Twitter')
  {
  var sText = info.selectionText;
  var url = "https://twitter.com/search?f=users&q=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
}
else  if (info.menuItemId == 'Medium')
  {
  var sText = info.selectionText;
  var url = "https://medium.com/search?q=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
}
else  if (info.menuItemId == 'Quora')
  {
  var sText = info.selectionText;
  var url = "https://www.quora.com/search?q=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
}





};
