document.addEventListener("DOMContentLoaded", 
    function() {
    var selectMonth = document.getElementById("month");
    var selectYear = document.getElementById("year");
    var enterDateInput = document.getElementById("enter-date");
    var submitButton = document.getElementById("submit");
  
    //  years dropdown 
    var currentYear = new Date().getFullYear();
    for (var i = currentYear - 10; i <= currentYear + 10; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      selectYear.appendChild(option);
    }
  
    // Set month and year
    var currentDate = new Date();
    selectMonth.value = currentDate.getMonth();
    selectYear.value = currentDate.getFullYear();
  

    renderCalendar();
  
    // month and year change
    selectMonth.addEventListener("change", renderCalendar);
    selectYear.addEventListener("change", renderCalendar);
  
    // Handle enter key press in "Enter Any Date" input
    enterDateInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        var date = parseInt(this.value);
        if (!isNaN(date) && date >= 1 && date <= 31) {
          toggleDateCell(date);
          this.value = "";
        }
      }
    });
  
    // submit button click
    submitButton.addEventListener("click", function() {
      var date = parseInt(enterDateInput.value);
      if (!isNaN(date) && date >= 1 && date <= 31) {
        toggleDateCell(date);
        enterDateInput.value = "";
      }
    });
  
    // Render the calendar for the selected month and year
    function renderCalendar() {
      var month = parseInt(selectMonth.value);
      var year = parseInt(selectYear.value);
  
      var firstDay = new Date(year, month, 1).getDay();
      var totalDays = new Date(year, month + 1, 0).getDate();
  
      var dates = document.querySelector(".dates");
      dates.innerHTML = "";
  
      // Render empty cells for previous month
      for (var i = 0; i < firstDay; i++) {
        var emptyCell = document.createElement("div");
        emptyCell.className = "date";
        dates.appendChild(emptyCell);
      }
  
      // Render date cells for current month
      for (var j = 1; j <= totalDays; j++) {
        var dateCell = document.createElement("div");
        dateCell.className = "date";
        dateCell.setAttribute("data-date", j);
        dateCell.textContent = j;
        dates.appendChild(dateCell);
      }
  
      // Add click event listener to date cells
      var dateCells = document.querySelectorAll(".date");
      dateCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
          var date = parseInt(this.getAttribute("data-date"));
          toggleDateCell(date);
        });
      });
    }
  
    // Toggle the background color of the date cell
    function toggleDateCell(date) {
      var dateCells = document.querySelectorAll(".date");
      dateCells.forEach(function(cell) {
        var cellDate = parseInt(cell.getAttribute("data-date"));
        if (cellDate === date) {
          cell.classList.toggle("green");
        } else if (cell.classList.contains("green")) {
          cell.classList.remove("green");
        }
      });
    }
  });