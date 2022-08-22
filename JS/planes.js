const listaPlanes = [
    basico = {
        id: '1',
        nombre: 'Básico',
        precio: 15 + '$ /mes',
        almacenamiento: '100 GB de almacenamiento',
        usuarios: '1 Usuario incluido',
        velocidad: 'Transferencia de datos básica',
        respaldo: 'Servicio de respaldo de datos'
    },
    negocios = {
        id: '2',
        nombre: 'Negocios',
        precio: 35 + '$ /mes',
        almacenamiento: '300 GB de almacenamiento',
        usuarios: '25 Usuarios incluidos',
        velocidad: 'Alta velocidad de transferencia',
        respaldo: 'Servicio de respaldo de datos'
    },
    basico = {
        id: '3',
        nombre: 'Empresas',
        precio: 45 + '$ /mes',
        almacenamiento: '750 GB de almacenamiento',
        usuarios: '1 Usuarios incluidos',
        velocidad: 'Alta velocidad de transferencia',
        respaldo: 'Servicio de respaldo de datos'
    }
]
const planPro = [
    pro = {
        id: '4',
        nombre: 'PRO',
        precio: 60 + '$ /mes',
        almacenamiento: '2 TB de almacenamiento',
        usuarios: 'Usuarios ilimitados',
        velocidad: 'Transferencia exclusiva',
        respaldo: 'Servicio de respaldo de datos'
    }
]


listaPlanes.forEach((planes)=>{
    const planesContainer = document.getElementById('planes-container')
    const div = document.createElement('div')
    div.classList.add('plancard', 'text-center', 'p-3', 'col-12', 'col-md-6', 'm-4')
    div.innerHTML = `
        <h2 class="cardtitle p-3 mb-4">${planes.nombre}</h2>
        <h3 class="fs-2">${planes.precio}</h3>
        <p>(Disponible para cancelar anualmente)</p>
        <br>
        <button id="cardbutton" class="dc-banner-button">Comprar</button>
        <br>
        <h6>${planes.almacenamiento}</h6>
        <h6>${planes.usuario}</h5>
        <h6>${planes.velocidad}</h6>
        <h6 class="mb-4">${planes.respaldo}</h6>
    `
    planesContainer.appendChild(div)
})


planPro.forEach((pro)=>{
    const planesContainer = document.getElementById('planes-container')
    const div = document.createElement('div')
    div.classList.add('proplan', 'plancard', 'text-center', 'text-light', 'p-3', 'col-12', 'col-md-6', 'm-4')
    div.innerHTML = `
        <h2 id="cardtitle-pro" class="p-3 mb-4">${pro.nombre}</h2>
        <h3 class="fs-2">${pro.precio}</h3>
        <p>(Disponible para cancelar anualmente)</p>
        <br>
        <button id="cardbutton-pro" class="dc-banner-button text-dark">Comprar</button>
        <br>
        <h6>${pro.almacenamiento}</h6>
        <h6>${pro.usuario}>
        <h6>${pro.velocidad}</h6>
        <h6 class="mb-4">${pro.respaldo}</h6>
    `
    planesContainer.appendChild(div)
})









