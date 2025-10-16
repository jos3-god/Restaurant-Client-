// wanna put a clock with this time in the hero page and develop the page to look like something some client like to buy

 // Choose allday = true for 24-hour format, false for 12-hour with AM/PM
    const allday = false;

    function pad(n){ return String(n).padStart(2,'0'); }

    function updateClock(){
      const now = new Date();
      let h = now.getHours();
      let ampm = '';
      if (!allday) {
        ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        if (h === 0) h = 12;
      }
      const m = now.getMinutes();
      const s = now.getSeconds();
      const timeStr = pad(h) + ':' + pad(m) + ':' + pad(s);
      document.getElementById('time').textContent = timeStr;
      document.getElementById('ampm').textContent = allday ? '' : ampm;
    }

    // first call immediately so there's no flash of 00:00:00
    updateClock();
    // update every second
    setInterval(updateClock, 1000);