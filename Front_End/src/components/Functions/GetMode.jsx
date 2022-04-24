function GetMode({mode}) {
    function ReturnMode(){
        if(mode == 1){
            return "NPath Mode"
        }
        if(mode == 2){
            return "Nature Mode"
        }
        if (mode == 3){
            return "Creator Mode"
        }
    }

    return (
        <div className="m-2">
            Mode =  {ReturnMode()}
      
          </div>
            
    );
}
//module.exports = GetMode
export default GetMode;