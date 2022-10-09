const data = [ 
    {
        id: 1,
        title: "Rescate",
        img: "https://www1.cbn.com/sites/default/files/styles/video_ratio_16_9/public/media/slider/images/rescatebanda_hdv.jpg",
        price: 100,
        detail: "Escucha el album completo",
        stock: 12,
        category: "rock / pop"
    },
    {
        id: 2,
        title:"Vico C",
        img: "https://www.gacetacristiana.com.ar/web/wp-content/uploads/2022/08/vico.jpg",
        price: 150,
        detail: "Rapero",
        stock: 10,
        category:"Rap"

    },
    {
        id: 3,
        title: "Miel San Marcos",
        img: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/06/29/Production/ETL/ETL-A/Images/Miel%20San%20Marcos.jpg",
        detail: "Musica cristiana",
        price: 250,
        stock: 10,
        category:"pop"
    },
]

export function getAlbums() {
    return new Promise( (res) =>{
        setTimeout( () => res(data),3000 )
    })
}
