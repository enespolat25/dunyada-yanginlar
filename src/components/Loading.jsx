import spinner from './Spinner.gif'

const Loading = () => {
  return (
    <div className='loader'>
        <img src={spinner} alt="Loading" />
        <h1>Veri Alınıyor</h1>
    </div>
  )
}

export default Loading