const stockProductos = [
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto1',
		precio: 1000,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 1
    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto2',
		precio: 100880,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 2,
		categoria: 'hombres'

    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto3',
		precio: 132,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 3,
		categoria: 'hombres'

    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto4',
		precio: 2345,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 4
    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto5',
		precio: 231,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 5
    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto6',
		precio: 111,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 6
    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto7',
		precio: 32,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 7
    },
    {
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto8',
		precio: 230,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 8
	},
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto9',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 9
	},
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Mujer',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 10,
		categoria: 'mujeres'

	},
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Mujer',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 11,
		categoria: 'mujeres'
    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto12',
		precio: 1231,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 12
    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto13',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 13
    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto14',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 14,
		categoria: 'hombres'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 2312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 15,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 2312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 16,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 17,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 2312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 18,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 19,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 2312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 20,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 21,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 2312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 22,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 23,
		categoria: 'ninos'

    },
	{
		imagen: 'http://placehold.it/200x250',
		nombre: 'Producto Ninos',
		precio: 12312,
		descripcion: 'Biquíni Asa Delta Tamanho: único (veste do 36 ao 42)Diversas coresTecido: SuplexAtacado: R$19.99',
		id: 24,
		categoria: 'ninos'

    }
    
]