const dateTagClass = ".date";
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    let repo = JSON.parse(this.responseText);
    var lastPushed = new Date(repo.pushed_at);
    var day = lastPushed.getUTCDate();
    var month = lastPushed.getUTCMonth() + 1;
    var year = lastPushed.getUTCFullYear();
    $(dateTagClass).text(`Last updated: ${year}-${month}`);
  }
};

xhttp.open("GET", "https://api.github.com/repos/siqim/siqim.github.io", true);
xhttp.send(); 