import formatCurrency from "../assets/utils/formatCurrency";

function NavBar() {
  const total=25000;
  const token=false;
  return (    
      <>    
        <div className="flex border-2 border-white-200 justify-between items-center p-1">
          <span className="m-1 h-2">Pizzería Mamma Mía</span>
          <button>🍕 Home</button>
            <div>
              {token ? (
                <span className="m-1 h-2 p-1"> 
                  <button>😀Login</button>
                  <button>✏️ Register</button>     
                </span>
                ) : (  
                  <span className="m-1 h-2 p-1">
                    <button>🔐Profile</button>
                    <button>🚶Logout</button>                      
                  </span>
                  )
                }   
              </div>
            <span ><button >🛒 ${formatCurrency(total)}</button></span>          
        </div>      
      </>    
  )
}
export default NavBar