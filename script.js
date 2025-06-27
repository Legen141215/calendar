const correctPassword = "love123";  // You can change this password

function unlock() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMsg');
    if (input === correctPassword) {
        document.getElementById('lockScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
    } else {
        errorMsg.textContent = "Incorrect password. Try again ";
    }
}

function saveNote() {
    const date = document.getElementById('datePicker').value;
    const note = document.getElementById('noteArea').value;
    if (date) {
        localStorage.setItem('note_' + date, note);
        alert('Note saved for ' + date + ' 💌');
    } else {
        alert('Please select a date first!');
    }
}

document.getElementById('datePicker').addEventListener('change', function() {
    const date = this.value;
    const savedNote = localStorage.getItem('note_' + date) || '';
    document.getElementById('noteArea').value = savedNote;
});
