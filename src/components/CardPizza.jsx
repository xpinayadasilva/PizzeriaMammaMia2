function CardPizza({imageSrc, name, ingredients, price}) {
    return (
      <>
        <div class="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">          
          
          <div className="p-5">
            <a href="#">
            <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">{name}</h2>
            </a>
            <a href="#" >
            <img className="w-100 h-20 items-center" src={imageSrc} alt="Foto de la pizza" />
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span>Ingredientes: 
              <ul className="list-unstyled items-start justify-items-center text-xs">
                🍕 {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>                
              </span>
              <div className="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <button className="bg-white border-gray-500 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded">
                  Ver más
              </button>
              <button className="bg-black border-gray-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              🛒 Añadir 
              </button>
          </div>
            </p>
            <div>{price}</div>
          </div>
          
          {/* <a href="#" class="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ver más             
        </a> */}
        
        </div>
        
      </>
      
    )
  }
  export default CardPizza