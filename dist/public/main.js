const socket = io();

socket.on('message_user', (data) => {
    console.log(data);
    render(data);
});

const render = (data) => {
    let html = data.map((x) => {
        return `
      <p> ${x.date} <strong> ${x.name} </strong> : ${x.message}</p>
    `;
    }).join(' ');
    document.querySelector('#message').innerHTML = html;
};

const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes()
    str_minutos = new String(minutes)
    if (str_minutos.lengt == 1) {
       minutes = `0${minutes}`
    }
    timeMessage = `${hours}:${minutes}`

const addChat = () => {
    const addChat = {
        "name": document.querySelector('#nb').value,
        "message": document.querySelector('#msn').value,
        "date": timeMessage
    };

    console.log(addChat);
    socket.emit('message_chat', addChat);
    document.querySelector('#msn').value = "";
    return false;
};
