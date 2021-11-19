import React from 'react';
import LandProject from './LandProject';
import LandData from './LandData';


const LandPhoto=()=>
{
  return (
  <>
      <div className="my-5">
            <h1 className="text-center">LandScape design Photos</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {
                        LandData.map((val,ind)=>
                        {
                            return <LandProject
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

export default LandPhoto