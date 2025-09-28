document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const fallbackMessage = document.querySelector('.fallback-message');

    // Check if video can play
    video.addEventListener('error', () => {
        console.error('Error loading video');
        fallbackMessage.style.display = 'block';
    });

    // Ensure video plays when loaded
    video.addEventListener('canplay', () => {
        video.play().catch(err => {
            console.error('Error playing video:', err);
            fallbackMessage.style.display = 'block';
        });
    });

    // Handle visibility changes to pause/resume video for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            video.pause();
        } else {
            video.play().catch(err => console.error('Error resuming video:', err));
        }
    });
});
