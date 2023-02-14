
$(function () {
    // Get the current hour in 24-hour time
    const currentHour = new Date().getHours();

    // Add click event listener to the save button
    $('.saveBtn').click(function () {
        // Get the id of the containing time-block
        const timeBlockId = $(this).closest('.time-block').attr('id');
        // Get the value of the textarea in the time-block
        const description = $(this).closest('.time-block').find('textarea').val();
        // Save the description in local storage using the timeBlockId as the key
        localStorage.setItem(timeBlockId, description);
    });

    // Apply the past, present, or future class to each time-block
    $('.time-block').each(function () {
        // Get the hour from the id of the time-block
        const hour = parseInt(this.id.split('-')[1]);
        // Check if the hour is in the past, present, or future
        if (hour < currentHour) {
            $(this).addClass('past');
        } else if (hour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });

    // Get saved user input from local storage and set the textarea values
    $('.time-block').each(function () {
        // Get the description from local storage using the timeBlockId as the key
        const description = localStorage.getItem(this.id);
        // Set the value of the textarea in the time-block
        $(this).find('textarea').val(description);
    });

    // Display the current date in the header of the page
    const currentDate = new Date().toLocaleDateString();
    $('#currentDay').text(currentDate);
});
