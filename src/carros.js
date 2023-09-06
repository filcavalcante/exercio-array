let cars = [
    {
        id: 1,
        marca: 'Volkswagen',
        modelo: 'Polo',
        ano: 2000,
        combustivel: ['gasolina', 'etanol'],
        cor: 'branco',
        km: 200000,
    },
    {
        id: 2,
        marca: 'Volkswagen',
        modelo: 'Jetta',
        ano: 2020,
        combustivel: ['gasolina', 'etanol'],
        cor: 'azul',
        km: 2000,
    },
    {
        id: 3,
        marca: 'Nissan',
        modelo: 'Kicks',
        ano: 2023,
        combustivel: ['gasolina', 'etanol'],
        cor: 'preto',
        km: 0,
    },
    {
        id: 4,
        marca: 'Chevrolet',
        modelo: 'Cruze',
        ano: 2021,
        combustivel: ['gasolina'],
        cor: 'laranja',
        km: 5000,
    },
    {
        id: 5,
        marca: 'Chevrolet',
        modelo: 'Onix',
        ano: 2023,
        combustivel: ['gasolina'],
        cor: 'verde',
        km: 9000,
    },
    {
        id: 6,
        marca: 'Fiat',
        modelo: 'Strada',
        ano: 2009,
        combustivel: ['gasolina', 'etanol'],
        cor: 'branco',
        km: 6000,
    },
    {
        id: 7,
        marca: 'Toyota',
        modelo: 'Hilux',
        ano: 2019,
        combustivel: ['etanol'],
        cor: 'preto',
        km: 1000,
    },
    {
        id: 8,
        marca: 'Chevrolet',
        modelo: 'S10',
        ano: 2022,
        combustivel: ['etanol'],
        cor: 'marrom',
        km: 8900,
    },
    {
        id: 9,
        marca: 'Ford',
        modelo: 'Ranger',
        ano: 2015,
        combustivel: ['etanol'],
        cor: 'branco',
        km: 700,
    }
];

function getCars(){
    return cars
}

export default getCars()