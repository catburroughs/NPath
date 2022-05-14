function GetActivationStatus({boardstatus}) {

//shows on Activation Page whether board is currently On or Off    

    return (
        <div className="m-2">
            Board is currently {boardstatus}.
      
          </div>
            
    );
}

export default GetActivationStatus;