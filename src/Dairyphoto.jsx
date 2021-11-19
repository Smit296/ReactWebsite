import React from 'react';
import Dairyproject from './Dairyproject';
import Dairydata from './Dairydata';


const Dairyphoto=()=>
{
  return (
  <>
      <div className="my-5">
            <h1 className="text-center">Dairy Project Photo</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {
                        Dairydata.map((val,ind)=>
                        {
                            return <Dairyproject
                            imgsrc={val.imgsrc}
                            //title={val.title}
                            />
  
                        }
                        )
                    }
                </div>
            </div>
        </div>
    </div>
    
</>
  );
};

export default Dairyphoto