function printerError(s) {
    let errors = 0;
    for (let i = 0; i < s.length; i++) {
      if (!(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 109)) {
        errors++;
      }
    }
    return String(errors) + "/" + String(s.length)
  }