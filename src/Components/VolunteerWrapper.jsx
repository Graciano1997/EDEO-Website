const VolunteerWrapper = ({object})=>{
    return (
    <div>
        <div className="w-[270px] h-[270px]">
        <img src={object.photo} alt="Sameer"  className='rounded-[50%] w-[100%] h-[100%] border-6 border-blue-200 volunteer'/>
        </div>
        <h4 className='text-center font-bold text-2xl mt-4'>{object.name}</h4>
    </div>
    );
};

export default VolunteerWrapper;
