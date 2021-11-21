
const INITIAL_STATE = {
    currentPackage:{}
   
};
export default  (state = INITIAL_STATE,action) =>  {
    
    switch (action.type) {   
        
        case "ADDCURRENTPACKAGE":
            return({
                currentPackage:action.payload
            }
            
            )
            
        }
        
        console.log(state.currentPackage)

        return state;
}