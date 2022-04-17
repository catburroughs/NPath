function GetTouchpads({touchpads}) {

    return (
        <>
           
        {
            touchpads?.map((value,key)=>
                <div>list = {key}</div>
                
            )
        }
     </>
            
    );
}

export default GetTouchpads;