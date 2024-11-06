import React, { useEffect } from 'react';

const ShowAdButton = () => {
    useEffect(() => {
        // Ensure the ad script is loaded only once
        if (window.show_8457081) return;

        const tag = document.createElement('script');
        tag.src = '//doakosteceet.net/vignette.min.js';
        tag.dataset.zone = '8457081';
        tag.dataset.sdk = 'show_8457081';

        document.body.appendChild(tag);
    }, []);

    const showAd = () => {
        // Check if the ad SDK function exists
        if (typeof show_8457081 === 'function') {
            show_8457081().then(() => {
                rewardUser();
            });
        } else {
            console.error('Ad SDK not loaded');
        }
    };

    const rewardUser = () => {
        // Implement your reward logic here, e.g., adding coins to the user’s balance
        alert('You have seen the ad! You earned 10 coins.');
        // Your reward logic goes here
    };

    return <button onClick={showAd}>Show Ad</button>;
};

export default ShowAdButton;
