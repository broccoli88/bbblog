/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                "wisp": ["Wisp", "system-ui", "sans-serif"]
            },

            fontSize: {
                "fsm-txt": "18px",
                "fsd-txt": "20px",
                "fsm-h1": "80px",
                "fsd-h1": "160px",
                "fsm-h2": "38px",
                "fsd-h2": "45px",
                "fsm-h3": "26px",
                "fsd-h3": "30px",
                "fsm-h4": "18px",
                "fsd-h4": "24px",
                "fsm-link": "30px",
                "fsd-link": "22px",
                "fsm-btn": "16px",
                "fsd-btn": "20px",
                "fsm-note": "10px",
                "fsd-note": "12px",
            },
            colors: {
                "clr-bg": " #140f1f",
                "clr-text": " #e9e2d0",
                "clr-primary": " #28adc8",
                "clr-input": " #13162a",
            }
        },
    },
    plugins: [],
}

