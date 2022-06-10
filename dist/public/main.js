const socket = io();

socket.on('message_user', (data) => {
    console.log(data);
    render(data);
});

const render = (data) => {
    let html = data.map((x) => {
        return `
      <p> <strong> ${x.name} </strong> : ${x.message}</p>
    `;
    }).join(' ');
    document.querySelector('#message').innerHTML = html;
};

const addChat = () => {
    const addChat = {
        "name": document.querySelector('#nb').value,
        "message": document.querySelector('#msn').value
    };

    console.log(addChat);
    socket.emit('message_chat', addChat);
    document.querySelector('#msn').value = "";
    return false;
};
