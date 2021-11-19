import React from 'react';
import HouseProject from './HouseProject';
import HouseData from './HouseData';


const HousePhoto=()=>
{
  return (
  <>
      <div className="my-5">
            <h1 className="text-center">Housing Plan Photos</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {
                        HouseData.map((val,ind)=>
                        {
                            return <HouseProject
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

export default HousePhoto