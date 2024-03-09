function delButton()
    {
        const delButton = document.getElementById('del-button');
        let startTime, endTime, longPressDelay = 1000; // Delay in milliseconds

        delButton.addEventListener('touchstart', function(e) {
            startTime = new Date().getTime();
        });

        delButton.addEventListener('touchend', function(e) {
            endTime = new Date().getTime();
            const duration = endTime - startTime;

            if (duration >= longPressDelay) {
            // Clear the text in the calculator's display on long press
            const cursor= document.getElementById('cursor');
            cursor.value='';
            }
        });
    }