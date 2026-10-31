// Tubes Cursor background by Kevin Levron (https://codepen.io/soju22/pen/qEbdVjK)
// Glowing tubes follow the mouse; when the mouse is away they drift on their own.
// Skipped for visitors who prefer reduced motion.
import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.30/build/cursors/tubes1.min.js';

const canvas = document.getElementById('tubes-canvas');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduceMotion) {
    TubesCursor(canvas, {
        tubes: {
            // Retro bands, red to orange (match --band-1 through --band-5 in style.css)
            colors: ['#CC2936', '#E35E2A', '#F29A2E'],
            lights: {
                intensity: 200,
                colors: ['#CC2936', '#D8432F', '#EC7A26', '#F29A2E']
            }
        }
    });
}
