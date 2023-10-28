const dataBase = {
    sayfiddin: {
        login: 'sayfiddinsadikov5@gmail.com',
        password: 123,
        fullName: 'sayfiddinsadikov'
    }
}

console.log('started');

const login = (lg, ps, call) => {
    setTimeout(() => {
        if (dataBase.sayfiddin.login === lg && dataBase.sayfiddin.password == ps) {
            return call(`Welcome To ${dataBase.sayfiddin.fullName} `);
        }
        else{
            return `Malumot notugri kiritilgan`;
        }
    }, '1000');
}
login('sayfiddinsadikov5@gmail.com', 123, (usr) => {
    console.log(usr);
    console.log('finished');
})
