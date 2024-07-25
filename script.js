
function func(){
    const place=document.getElementById("place");
const plv=place.value;
const date=document.querySelector(".date");
const selectedDate = new Date(date.value);
const day = selectedDate.getDate();
const month = selectedDate.getMonth() + 1; 
const year = selectedDate.getFullYear();
    const val=confirm(`Are you sure, You wanna book a trip on ${day }- ${month} - ${year} to ${plv}?`);
    if(val) alert("Booking under process....");
    
}
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const dateTimeString = `${date} ${time}`;
    const dateTimeElement = document.getElementById("datetime");
    dateTimeElement.innerHTML = dateTimeString;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);