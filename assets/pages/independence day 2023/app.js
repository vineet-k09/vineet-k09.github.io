const pipelineSteps = [
    { id: 'event1', title: 'Event 1', date: '1857', content: 'Description of Event 1' },
    { id: 'event2', title: 'Event 2', date: '1919', content: 'Description of Event 2' },
    { id: 'event3', title: 'Event 3', date: '1942', content: 'Description of Event 3' },
    { id: 'event4', title: 'Event 4', date: '1947', content: 'Description of Event 4' },
    { id: 'event5', title: 'Event 5', date: '2023', content: 'Description of Event 5' }
  ];

  const pipelineContainer = document.getElementById('pipeline-container');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    pipelineSteps.forEach(step => {
      const section = document.getElementById(step.id);
      if (section.offsetTop <= currentScroll + window.innerHeight * 0.5) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
// Set the date for August 15, 2023
const targetDate = new Date("2023-08-15T00:00:00");

function updateTimer() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        document.getElementById("timer").innerHTML = "Happy Independence Day!";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set up the timer
updateTimer();