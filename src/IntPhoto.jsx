import React from 'react';
import IntProject from './IntProject';
import IntData from './IntData';


const IntPhoto=()=>
{
  return (
  <>
      <div className="my-5">
            <h1 className="text-center">Interior Design Photos</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {
                        IntData.map((val,ind)=>
                        {
                            return <IntProject
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

export default IntPhoto