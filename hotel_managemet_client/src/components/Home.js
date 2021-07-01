function Home(props){

return(

<div className='card'>
    <h2>{props.text}</h2>
        <div className='actions'>
<button className='btn'>booking</button>
        </div>
</div>

);

}

export default Home;