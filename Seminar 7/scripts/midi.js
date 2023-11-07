window.onload = function() {
    let pianoSounds = new Array(128).fill(null);
    let oscillatorSounds = new Array(128).fill(null);

    let emulatedKeys = {
        q: 60, 2: 61, w: 62, 3: 63, e: 64,
        r: 65, 5: 66, t: 67, 6: 68, y: 69,
        7: 70, u: 71, i: 72
    }
    
    function initialize() {
        for(let i = 36; i <= 96; i++) {
            let key = document.querySelector(`[data-midi-code="${i}"]`);
            let noteName = key.getAttribute('data-note');
            let audio = new Audio(`./notes/${noteName}.mp3`);
            pianoSounds[i] = audio;
            // oscillatorSounds[i] = createOscillator(i);
        }
    }

    function createOscillator(midiCode) {
        let context = new AudioContext();
        let oscillator = context.createOscillator();
        oscillator.type = 'sine';
        let frequency = 440 * Math.pow(2, (midiCode - 69) / 12);
        oscillator.frequency.setValueAtTime(frequency, context.currentTime);
        oscillator.connect(context.destination);
        oscillator.start();
        return {context: context, oscillator:oscillator};
    }

    function playOscillator(midiCode) {
        oscillatorSounds[midiCode].context.resume();
    }

    function stopOscillator(midiCode) {
        oscillatorSounds[midiCode].context.suspend();
    }

    function playPianoNote(midiCode) {
        pianoSounds[midiCode].currentTime = 0;
        pianoSounds[midiCode].play();
    }
    function stopPianoNote(midiCode) {
        // pianoSounds[midiCode].pause();
    }
    
    window.addEventListener('keydown', (e) => {
        let key = e.key;
        if(emulatedKeys.hasOwnProperty(key)) {
            playPianoNote(emulatedKeys[key]);
            // playOscillator(emulatedKeys[key]);

            // added by me
            let clap = document.querySelector(`[data-midi-code="${emulatedKeys[key]}"`);
            clap.classList.add('activeKey');
        }
    })

    window.addEventListener('keyup', (e) => {
        let key = e.key;
        if(emulatedKeys.hasOwnProperty(key)) {
            stopPianoNote(emulatedKeys[key]);
            // stopOscillator(emulatedKeys[key]);

            // added by me
            let clap = document.querySelector(`[data-midi-code="${emulatedKeys[key]}"`);
            clap.classList.remove('activeKey');
        }
    })

    initialize();

    // added by me
    document.getElementById('stop-sound').addEventListener('click', () => {
        oscillatorSounds.forEach((osc) => {
            if(osc != null)
                osc.context.suspend();
        });
        pianoSounds.forEach((note) => {
            if(note != null)
                note.pause();
        })
    })
}