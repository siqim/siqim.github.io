const dateTagClass = ".date";
var xhttp = new XMLHttpRequest();


var all_mon_names = ["ENE", "Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

xhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    let repo = JSON.parse(this.responseText);
    var lastPushed = new Date(repo.pushed_at);
    var day = lastPushed.getUTCDate();
    var month = lastPushed.getUTCMonth() + 1;
    var year = lastPushed.getUTCFullYear();
    var res = all_mon_names[month];
    $(dateTagClass).text(`Last updated: ${res} ${year}`);
  }
};

xhttp.open("GET", "https://api.github.com/repos/siqim/siqim.github.io", true);
xhttp.send(); 