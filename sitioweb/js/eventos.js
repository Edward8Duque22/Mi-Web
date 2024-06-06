document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.querySelector('.calendario tbody');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Generar el calendario
    function generateCalendar(month, year) {
        calendarBody.innerHTML = '';
        const firstDay = new Date(year, month).getDay();
        const daysInMonth = 32 - new Date(year, month, 32).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.appendChild(document.createTextNode(''));
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const button = document.createElement('button');
                    button.innerText = date;
                    button.addEventListener('click', () => showAlert(date, month, year));
                    cell.appendChild(button);
                    row.appendChild(cell);
                    date++;
                }
            }
            calendarBody.appendChild(row);
        }
    }

    // Mostrar alerta con SweetAlert2
    function showAlert(day, month, year) {
        Swal.fire({
            title: `Detalles del día ${day} de ${monthNames[month]} de ${year}`,
            text: 'Aquí puedes agregar más detalles sobre este día específico.',
            icon: 'info',
            confirmButtonText: 'Cerrar'
        });
    }

    generateCalendar(currentMonth, currentYear);
});
