import React from 'react';
import CafeProject from './CafeProject';
import CafeData from './CafeData';


const CafePhoto=()=>
{
  return (
  <>
      <div className="my-5">
            <h1 className="text-center">Cafe Shop Photos</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {
                        CafeData.map((val,ind)=>
                        {
                            return <CafeProject
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

export default CafePhoto